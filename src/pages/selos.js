import React from "react";

import { Box, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../config/firebase";
import { useEffect } from "react";
import { useState } from "react";
import { purple } from "@mui/material/colors";

const Selos = () => {
  const navigate = useNavigate();
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "40vh",
    display: "flex",
    justifyContent: "center",
    // tamanhos
    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),
    // cor de fundo
    backgroundColor: "#990099",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    marginBottom: 90,
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

  const [textoList, setTextoList] = useState([]);

  useEffect(() => {
    getFirestoreData();
  }, []);

  const getFirestoreData = async () => {
    try {
      //é aqui ne? beleza!
      const querySnapshot = await getDocs(collection(db, "telaSelo"));
      const retorno = [];
      console.log()
      querySnapshot.forEach((item) => {
        const dados = { ...item.data(), id: item.id };
        console.log(dados);
        retorno.push(dados);
      });
      setTextoList(retorno);
    } catch (erro) {
      alert(erro);
    }
  };


  return (
    <>
    {textoList.map((texto) => (
    <CustomBox component="header">
      <BoxText component="section">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#fff",
          }}
        >
          {texto.tituloseloesquerdo}
        </Typography>

        <Typography
          variant="p"
          component="p"
          sx={{
            width: 700,
            py: 3,
            lineHeight: 2,
            color: "#fff",
            textAlign:'justify'
          }}
        >
          {texto.subtituloseloesquerdo}
        </Typography>
      </BoxText>
      <Box
        sx={{
          display: "-moz-initial",
          flex: 1,
          justifyContent: "center",
          gap: "10px",
          marginRight: 10,
          marginTop: 5,
        }}
        component="section"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginLeft: "auto",
            flexDirection: "column",
          }}
          component="section"
        >
          <img
            onClick={()=>navigate("/formulario")}
            src={texto.seloimg}
            alt={texto.seloimg}
            style={{ maxHeight: 300, maxWidth: 300, cursor:'pointer', marginBottom:100, }}
            ></img>
          <Typography variant="h5" sx={{ fontWeight: 200, color: "#fff" }}>
            {texto.subtituloselo}
          </Typography>  
        </Box>

        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginLeft: "auto",
            flexDirection: "column",
          }}
          component="section"
        >
          <img
            src="https://gifs.eco.br/wp-content/uploads/2023/06/imagens-de-selo-png-0.png"
            alt="selo"
            style={{ maxHeight: 200, maxWidth: 200 }}
          ></img>
          <Typography variant="h5" sx={{ fontWeight: 200, color: "#fff" }}>
            Selo 2
          </Typography>
        </Box> */}
      </Box>
    </CustomBox>
    ))}
    </>
  );
};

export default Selos;
