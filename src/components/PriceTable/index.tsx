import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { MarketDetails } from '../../pages/ProductMarket';

interface PriceTableProps {
  productName?: string;
  productMarketDetails?: MarketDetails[];
}

export const PriceTable = ({
  productName,
  productMarketDetails,
}: PriceTableProps) => {
  console.log('productMarketDetails', productMarketDetails);

  if (!productName) return <></>;

  return (
    <TableContainer component={Paper}>
      <Table size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>{productName}</TableCell>
            <TableCell align='right'>Price</TableCell>
            <TableCell align='right'>Stock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productMarketDetails?.map((market) => {
            const { country, price, stock } = market;
            console.log('ahoj', market);

            if (!country || !price || !stock)
              return <div>Can't get any data</div>;

            return (
              <TableRow
                key={productName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {country}
                </TableCell>
                <TableCell align='right'>{price}</TableCell>
                <TableCell align='right'>{stock}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
