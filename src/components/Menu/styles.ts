import { addAlpha, colors } from '../../colors/colors';

export const styledMenuContainer = () => ({
  gridArea: '1 / 1 / 2 / 25',
  backgroundColor: colors.primary,
  boxShadow: `0px 0px 10px 5px ${addAlpha(colors.primary, 0.5)}`,
  zIndex: 1,
  alignItems: 'center',
  display: 'inline-flex',
  flexDirection: 'row',
  marginBottom: '-2px',
});

export const styledLogo = () => ({
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
});

export const styledLinkContainer = () => ({
  alignItems: 'center',
  flexGrow: 1,
  gap: 2,
  display: { xs: 'none', md: 'flex' },
});

export const styledHomeButton = () => ({
  my: 2,
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
});

export const styledLink = () => ({
  fontWeight: 700,
  color: 'inherit',
  textDecoration: 'none',
});
