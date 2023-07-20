import React, { useContext } from 'react';
import { AppBar, Toolbar, Box, List, ListItem, styled, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import navImg1 from '../assets/mulhere.png';
import navImg2 from '../assets/weher.png';
import ButtonColorContext from './buttoncolorcontext';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));


let itemList = [
  {
    text: 'Início',
    to: '/',
  },
  {
    text: 'Cursos',
    to: '/about',
  },
  {
    text: 'Login',
    to: '/contact',
  },
  {
    text: 'Soluções',
    to: '/quiz',
  },
  {
    text: 'Painel Admin',
    to: '/adminpanel',
  },
];


const Navbar = () => {
  const { buttonColor } = useContext(ButtonColorContext);

  return (
    <AppBar component="nav" position="sticky" sx={{ backgroundColor: 'white' }} elevation={0} style={{ width: '100%', height: '80px' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={navImg1} alt="mulheres conectadas" style={{ width: '200px', height: '80px', marginRight: '5px' }} />
          <img src={navImg2} alt="mulheres conectadas" style={{ width: '150px', height: '60px', marginRight: '5px' }} />
        </Box>

        <List sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}>
          {itemList.map((item) => (
            <ListItem key={item.text} sx={{ color: '#ab4f9d', }}>
              <ListItemButton component={Link} to={item.to} sx={{ color: buttonColor, '&:hover': { backgroundColor: 'transparent', color: 'purple' } }}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
