import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Carroussel from "../carrousel";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../config/firebase";
import { useState } from "react";

import Sidebar from "../SideBar/index";
import { FaBars } from 'react-icons/fa'

const Header = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    // tamanhos
    gap: theme.spacing(5),
    paddingTop: theme.spacing(0),
    // cor de fundo
    backgroundColor: "#990099",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  const CarrousselBox = styled(Box)(({ theme }) => ({
    flex: "2",
    alignSelf: "flex-end",
    paddingTop: "30px",
    [theme.breakpoints.down("md")]: {
      flex: "1",
      alignSelf: "center",
    },
  }));

  const [textoList, setTextoList] = useState([]);

  useEffect(() => {
    getFirestoreData();
  }, []);

  const getFirestoreData = async () => {
    try {
      //é aqui ne? beleza!
      const querySnapshot = await getDocs(collection(db, "telainicial"));
      const retorno = [];
      console.log()
      querySnapshot.forEach((item) => {
        const dados = { ...item.data(), id: item.id };
        retorno.push(dados);
      });
      setTextoList(retorno);
    } catch (erro) {
      alert(erro);
    }
  };

  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
      
    <CustomBox component="header">
          <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
      {textoList.map((texto) => (
      <BoxText component="section">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#fff",
          }}
        >
          {texto.tituloesquerdo}
        </Typography>

        <Typography
          variant="p"
          component="p"
          sx={{
            py: 3,
            lineHeight: 1.6,
            color: "#fff",
            textAlign: "justify",
          }}
        >
          {texto.subtituloesquerdo}
        </Typography>
        <Box>
          {/* <Button
            component={Link}
            to={"/mensagem"}
            variant="outlined"
            sx={{
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              backgroundColor: "transparent",
              borderColor: "#fff",
              color: "#fff", // Adiciona esta linha
              "&&:hover": {
                color: "#343a55",
                borderColor: "#343a55",
              },
              "&&:focus": {
                color: "#343a55",
                borderColor: "#343a55",
              },
            }}
          >
            Entre em contato conosco
          </Button> */}
          <Button
            component={Link}
            to={"/formulario"}
            variant="outlined"
            sx={{
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              backgroundColor: "transparent",
              borderColor: "#fff",
              color: "#fff", // Adiciona esta linha
              "&&:hover": {
                color: "#343a55",
                borderColor: "#343a55",
              },
              "&&:focus": {
                color: "#343a55",
                borderColor: "#343a55",
              },
            }}
          >
            Adquira o nosso selo
          </Button>
        </Box>
      </BoxText>
      ))}
      <CarrousselBox>
        <Carroussel />
      </CarrousselBox>
    </CustomBox>
  );
};

export default Header;
