import {useContext, React} from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';

import navImg1 from '../assets/mulhere.png';
import navImg2 from '../assets/weher.png';
import ButtonColorContext from './buttoncolorcontext';

// personalizacao
const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

//rotas
const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
      text: "Cursos",
      to: "/about"
    },
    {
        text: "Login",
        to: "/contact"
    },
    {
        text:"Soluções",
        to: "/quiz"
    },
    {
    text:"Sobre",
    to:"/sobre"
    },
    {
        text:"Painel Admin",
        to:"/adminpanel"
    }
];


const Navbar = () => {
  const { buttonColor } = useContext(ButtonColorContext);
  const {buttonColor2} = useContext(ButtonColorContext);
    
    return (
        <AppBar component="nav" position="sticky" sx={{ backgroundColor: 'white' }} elevation={0} style={{ width: '100%', height: '80px' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={navImg1} alt="mulheres conectadas" style={{ width: "180px", height: "80px", marginRight: '10px' }} />
          <img src={navImg2} alt="mulheres conectadas" style={{ width: "150px", height: "60px", marginRight: '10px' }} />
        </Box>

        <List sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft:'auto'}}>
          {itemList.map((item) => {
            const { text, to } = item;
            return (
              <ListItem key={text} sx={{ color: '#ab4f9d' }}>
                <ListItemButton component={Link} to={to} sx={{ color: buttonColor, "&:hover": { backgroundColor: 'transparent', color: 'purple' } }}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Toolbar>
    </AppBar>
    )
}

export default Navbar;
