import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import navImg1 from "../assets/mulhere.png";
import navImg2 from "../assets/weher.png";
import ButtonColorContext from "./buttoncolorcontext";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuInicial = [
    {
      text: "Início",
      to: "/",
    },
    {
      text: "Selos",
      to: "/selos",
    },
    {
      text: "Soluções",
      to: "/Formulario",
    },
    {
      text: "Login",
      to: "/contact",
    },
  ];

  const [lista, setLista] = useState(menuInicial);

  const { buttonColor } = useContext(ButtonColorContext);

  useEffect(() => {
    const auth = getAuth();

    //Garantir que o usuario se mantenha conectado após a pagina ser atualizada
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser != null) {
        let newItemList = lista;
        //Garantir que o butão de logout fique por ultimo
        let ultimoItem = newItemList.pop();
        //Adicionar um novo elemento na lista para ter um novo botão no Nav
        newItemList.push({
          text: "Cursos",
          to: "/cursos",
        });

        newItemList.push({
          text: "Painel Admin",
          to: "/adminpanel",
        });

        ultimoItem.text = "Sair";
        //Logout, Atualizar a página e enviar para a tela de inicio
        ultimoItem.to = () => {
          signOut(getAuth());
          navigate("/");
          window.location.reload();
        };
        newItemList.push(ultimoItem);
        setLista([...newItemList]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const navigate = useNavigate();

  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{ backgroundColor: "white" }}
      elevation={0}
      style={{ width: "100%", height: "80px" }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            onClick={() => navigate("/")}
            src={navImg1}
            alt="mulheres conectadas"
            style={{
              width: "200px",
              height: "80px",
              marginRight: "5px",
              cursor: "pointer",
              "&hover": { opacity: 0.6 },
            }}
          />
          <img
            src={navImg2}
            alt="mulheres conectadas"
            style={{ width: "150px", height: "60px", marginRight: "5px" }}
          />
        </Box>

        <List
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginLeft: "auto",
          }}
        >
          {lista.map((item) => (
            <ListItem key={item.text} sx={{ color: "#ab4f9d" }}>
              <ListItemButton
                component={Link}
                onClick={item.to}
                to={item.to}
                sx={{
                  color: buttonColor,
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "purple",
                  },
                }}
              >
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
