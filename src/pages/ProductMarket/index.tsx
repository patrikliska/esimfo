import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
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
  const [server, setServer] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data: { [x: string]: any }) => {
    if (!data) return;

    const products = Object.keys(data);

    return products.map((product) => {
      if (!Array.isArray(data[product])) return {};

      return { name: product, marketDetails: data[product] };
    });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setServer(event.target.value);

    if (event.target.value) {
      setIsLoading(true);

      fetch(
        `https://e-sim-api.herokuapp.com//https:/${event.target.value}.e-sim.org/prices.html`
      )
        .then((response) => response.json())
        .then((actualData) => {
          const formatedData = formatData(actualData);

          console.log('formatedData', formatedData);

          setProductMarket(formatedData);
        })
        .catch((err) => console.log('error', err))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <Box
      sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1 }}
    >
      <Box sx={{ minWidth: 120, gridColumn: '1 / 6' }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Server</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={server}
            label='Server'
            onChange={handleChange}
          >
            <MenuItem value='chimera'>chimera</MenuItem>
            <MenuItem value='versa'>versa</MenuItem>
            <MenuItem value='luxia'>luxia</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {isLoading ? (
        <CircularProgress
          sx={{
            margin: 'auto',
            display: 'flex',
            marginTop: '25%',
            gridColumn: '1 / 6',
          }}
        />
      ) : (
        productMarket?.map((product) => (
          <PriceTable
            productName={product.name}
            productMarketDetails={product.marketDetails}
          />
        ))
      )}
    </Box>
  );
};
