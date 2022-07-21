import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { PriceTable } from '../../components/PriceTable';

export interface MarketDetails {
  'monetary market'?: string;
  stock?: number;
  country?: string;
  link?: string;
  price?: number;
}

interface Product {
  name?: string;
  marketDetails?: MarketDetails[];
}

export const ProductMarket = () => {
  const [productMarket, setProductMarket] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);

  const formatData = (data: { [x: string]: any }) => {
    if (!data) return;

    const products = Object.keys(data);

    return products.map((product) => {
      if (!Array.isArray(data[product])) return {};

      return { name: product, marketDetails: data[product] };
    });
  };

  useEffect(() => {
    fetch(
      'https://e-sim-api.herokuapp.com//https:/chimera.e-sim.org/prices.html'
    )
      .then((response) => response.json())
      .then((actualData) => {
        const formatedData = formatData(actualData);

        console.log('formatedData', formatedData);

        setProductMarket(formatedData);
      })
      .catch((err) => console.log('error', err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading)
    return (
      <CircularProgress
        sx={{ margin: 'auto', display: 'flex', marginTop: '25%' }}
      />
    );

  return (
    <Box
      sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1 }}
    >
      {productMarket?.map((product) => (
        <PriceTable
          productName={product.name}
          productMarketDetails={product.marketDetails}
        />
      ))}
    </Box>
  );
};
