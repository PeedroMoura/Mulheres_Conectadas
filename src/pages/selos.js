import React from "react";
import Carroussel from "../components/Sobre/carrousel1";
import Conteudo from "../components/Sobre/contenttext";

import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Carroussel1 from "../components/Sobre/carrousel1";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
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
          Selo Mulheres Conectadas
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
          O Selo Mulheres Connectadas simboliza o compromisso da sua organização
          em adotar práticas alinhadas aos princípios do ESG e os Objetivos de
          Desenvolvimento Sustentável (ODS) da ONU. Ao obter o Selo de
          Reconhecimento de Impacto, sua empresa será amplamente reconhecida
          como uma líder em seu setor de atuação, destacando-se como uma força
          positiva na busca de um futuro mais sustentável e inclusivo,
          demonstrando aos seus clientes, parceiros e stakeholders o seu
          compromisso com valores importantes. O Selo é um testemunho do seu
          engajamento com a responsabilidade social corporativa, a
          sustentabilidade ambiental, a diversidade e inclusão.
        </Typography>
      </BoxText>
      <Box
        sx={{
          display: "flex",
          flex: 2,
          justifyContent: "space-between",
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
            src="https://gifs.eco.br/wp-content/uploads/2023/06/imagens-de-selo-png-0.png"
            alt="selo"
            style={{ maxHeight: 200, maxWidth: 200 }}
          ></img>
          <Typography variant="h5" sx={{ fontWeight: 200, color: "#fff" }}>
            Selo 1
          </Typography>
        </Box>

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
            src="https://gifs.eco.br/wp-content/uploads/2023/06/imagens-de-selo-png-0.png"
            alt="selo"
            style={{ maxHeight: 200, maxWidth: 200 }}
          ></img>
          <Typography variant="h5" sx={{ fontWeight: 200, color: "#fff" }}>
            Selo 2
          </Typography>
        </Box>
      </Box>
    </CustomBox>
    <div>aaa</div>
    </>
  );
};

export default Selos;
