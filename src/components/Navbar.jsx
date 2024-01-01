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
import { doc, getDoc } from "firebase/firestore";
import db from "../config/firebase";

const Navbar = () => {
  const navigate = useNavigate();

  const rotas = [
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
      onClick: () => {
        window.open("https://www.mulheresconnectadas.com.br/category/solucao/");
        window.location = "/";
      },
    },
    {
      text: "Jornadas",
      to: "/cursos",
      logged: true,
    },
    {
      text: "Ferramentas",
      to: "/ferramentas",
      logged: true,
    },
    {
      text: "Painel Admin",
      to: "/adminpanel",
      logged: true,
      admin: true,
    },
    {
      text: "Sair",
      onClick: () => {
        signOut(getAuth());
        window.location = "/";
      },
      logged: true,
    },
    {
      text: "Login",
      to: "/contact",
      logged: false,
    },
  ];

  const [loggedUser, setLoggedUser] = useState(false);
  const [userAdmin, setUserAdmin] = useState(false);
  const { buttonColor } = useContext(ButtonColorContext);

  useEffect(() => {
    const auth = getAuth();

    //Garantir que o usuario se mantenha conectado após a pagina ser atualizada
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      // Verifica a autenticação do usuário
      if (currentUser != null) {
        setLoggedUser(true);

        // Verifica se é administrador
        const snapshotUsuarios = await getDoc(
          doc(db, "usuarios", currentUser.uid)
        ).catch((erro) => console.log(erro));
        const dadosUsuario = snapshotUsuarios.data();
        setUserAdmin(dadosUsuario !== undefined && dadosUsuario.admin === true);
      } else {
        setLoggedUser(false);
        setUserAdmin(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{ backgroundColor: "white" }}
      elevation={0}
      style={{ width: "100%", height: "80px", zIndex:998 }}
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
          {rotas.map((item) => (
            <>
              {item.logged === undefined ||
              (item.logged === true &&
                loggedUser === true &&
                item.admin === undefined) ||
              (item.logged === false && loggedUser === false) ||
              (item.admin !== undefined &&
                item.admin === true &&
                userAdmin === true) ? (
                <ListItem key={item.text} sx={{ color: "#ab4f9d" }}>
                  <ListItemButton
                    component={Link}
                    onClick={() => {
                      item.onClick !== undefined && item.onClick();
                    }}
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
              ) : (
                <></>
              )}
            </>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
