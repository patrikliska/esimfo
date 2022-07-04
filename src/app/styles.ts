import { addAlpha, colors } from '../colors/colors';

export const styledAppContainer = () => ({
  backgroundColor: colors.secondary,
  display: 'grid',
  gridColumnGap: 2,
  gridRowGap: 2,
  gridTemplateColumns: 'repeat(24, 1fr)',
  gridTemplateRows: 'repeat(16, 1fr)',
  minHeight: '100%',
  maxHeight: '100vh',
  minWidth: '100%',
});

export const styledContentContainer = () => ({
  backgroundColor: '#20bf55',
  backgroundImage: 'linear-gradient(315deg, #20bf55 0%, #01baef 74%)',
  display: 'flex',
  gridArea: '2 / 1 / 17 / 25',
  justifyContent: 'center',
  padding: '0 5% 2.5% 5%',
});

export const styledPageContainer = () => ({
  overflow: 'auto',
  boxShadow: `0px 0px 10px 5px ${addAlpha(colors.primary, 0.2)}`,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
  height: '100%',
  width: '100%',
  padding: 10,
});
