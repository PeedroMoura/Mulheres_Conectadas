import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Carroussel from "../carrousel";
//img
import headerImg from "../../assets/mulheres.png";
import testImg from "../../assets/oook.jpg";

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

  return (
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
          Conheça os nossos cases de sucesso!
        </Typography>

        <Typography
          variant="p"
          component="p"
          sx={{
            py: 3,
            lineHeight: 1.6,
            color: "#fff",
            textAlign:'justify'
          }}
        >
          A Mulheres Connectadas, uma startup de tecnologia social genuinamente
          alagoana, tem como compromisso primordial promover a igualdade de
          gênero e capacitar mulheres para assumirem posições de liderança,
          contribuindo para a construção de um mundo mais diversos e inclusivo.
          Nossa abordagem única é baseada em uma metodologia própria,
          cuidadosamente desenvolvida para estar em sintonia com os princípios
          do ESG (Ambiental, Social e Governança) e agenda 2030 da ONU.
        </Typography>

        <Box>
          <Button
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
          </Button>
          <Button
            component={Link}
            to={"/about"}
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
      <CarrousselBox>
        <Carroussel />
      </CarrousselBox>
    </CustomBox>
  );
};

export default Header;
