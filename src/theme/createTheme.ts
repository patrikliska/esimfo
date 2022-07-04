import { createTheme as createMuiTheme, Theme } from '@mui/material';

import { muiTypographySettings } from './components';

export const createTheme = (): Theme =>
  createMuiTheme({
    components: {
      MuiTypography: muiTypographySettings,
    },
  });
