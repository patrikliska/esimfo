import { TextField, Box, InputAdornment } from '@mui/material';
import { useEffect, useState } from 'react';
import { PriceTable } from '../../components/PriceTable';

export const BattleDrops = () => {
  return (
    <Box
      sx={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 1 }}
    >
      <TextField
        sx={{ gridColumn: '2 / 4', gridRow: 2 }}
        id='battleUrl'
        label='Enter battle url'
        variant='standard'
        required
      />
      <TextField
        sx={{ gridColumn: '4 / 4', gridRow: 2 }}
        id='battleDropsBonus'
        label='Battle drops bonus %'
        variant='standard'
      />
    </Box>
  );
};
