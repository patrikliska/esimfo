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
  pages?: string[];
}

const Menu = ({ pages = ['About', 'TestPage'] }: MenuProps) => (
  <AppBar position='static' sx={styledMenuContainer}>
    <Container maxWidth='xl'>
      <Toolbar disableGutters>
        <Typography variant='h4' component='a' href='/' sx={styledLogo}>
          E-Simfo
        </Typography>
        <Box sx={styledLinkContainer}>
          <Link href='/' sx={styledHomeButton}>
            <Home fontSize='large' />
          </Link>
          {pages.map((page) => (
            <Link href={`/${page.toLowerCase()}`} sx={styledLink}>
              <Typography
                variant='h6'
                noWrap
                component='a'
                href='/'
                sx={styledLink}
              >
                {page}
              </Typography>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Menu;
