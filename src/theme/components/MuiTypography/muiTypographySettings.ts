import { ComponentSettings } from '../../types';

export const muiTypographySettings: ComponentSettings<'MuiTypography'> = {
  styleOverrides: {
    root: {
      alignItems: 'flex-end',
      display: 'flex',
    },
  },
  variants: [
    {
      props: { variant: 'h6' },
      style: {
        '&:hover': {
          textDecoration: 'none',
          color: 'inherit',
          transform: 'scale(1.03)',
          transition: 'all 200ms',
        },
      },
    },
  ],
};
