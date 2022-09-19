import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Link,
} from '@mui/material';
import { Home } from '@mui/icons-material';

import {
  styledHomeButton,
  styledLink,
  styledLinkContainer,
  styledLogo,
  styledMenuContainer,
} from './styles';

interface MenuProps {
  pages?: {
    name: string;
    href: string;
  }[];
}

const Menu = ({
  pages = [
    { name: 'Product market', href: 'esimfo' },
    { name: 'Battle drops', href: 'esimfo/battleDrops' },
  ],
}: MenuProps) => (
  <AppBar position='static' sx={styledMenuContainer}>
    <Container maxWidth='xl'>
      <Toolbar disableGutters>
        <Typography variant='h4' component='a' href='/esimfo' sx={styledLogo}>
          E-Simfo
        </Typography>
        <Box sx={styledLinkContainer}>
          <Link href='/esimfo' sx={styledHomeButton}>
            <Home fontSize='large' />
          </Link>
          {pages.map(({ name, href }) => (
            <Link href={`/${href}`} sx={styledLink}>
              <Typography
                variant='button'
                noWrap
                component='a'
                href={`/${href}`}
                sx={styledLink}
              >
                {name}
              </Typography>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Menu;
