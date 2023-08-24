import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Navigate } from "react-router-dom";

const Footer = () => {
  const StackColumn = styled(Stack)(() => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    gap: 8,
    textAlign: "center",
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#990099",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: 30,
    },
  }));

  return (
    <BoxRow
      component="footer"
      sx={{
        py: 4,
        px: 2,
      }}
    >
      <StackColumn style={{ color: "white" }}>
        <FooterTitle style={{ color: "white" }} text={"Nossas soluções"} />
        <FooterLink style={{ color: "white" }} text={"Jornadas Inteligentes"} />
        <FooterLink
          style={{ color: "white" }}
          text={"Empoderamento em Programação"}
        />
        <FooterLink
          style={{ color: "white" }}
          text={"Quiz - Alfabetização Digital"}
        />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={"Selo"} />
        <FooterLink
          onClick={() => Navigate("/formulario")}
          text={"Formulário de Interesse"}
        />
        {/* <FooterLink text={'Entre em contato conosco'} />
        <FooterLink text={'Cadastre-se'} />
        <FooterLink text={'Conheça as ISGs '} /> */}
      </StackColumn>

      <StackColumn>
        <FooterTitle text={"Redes sociais"} style={{ color: "white" }} />
        <Stack
          direction="row"
          width="70px"
          maxWidth="100%"
          justifyContent="space-between"
        >
          <Link
            href="https://www.instagram.com/mulheresconnectadasoficial/?hl=pt-br"
            variant="body2"
            sx={{
              color: "white",
              "&:hover": {
                color: "#1c2859",
              },
            }}
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://www.facebook.com/mulheresconnectadas/"
            variant="body2"
            sx={{
              color: "white",
              "&:hover": {
                color: "#1c2859",
              },
            }}
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mulheres-connectadas-7748b2203/"
            variant="body2"
            sx={{
              color: "white",
              "&:hover": {
                color: "#1c2859",
              },
            }}
          >
            <LinkedInIcon />
          </Link>
        </Stack>
        <Typography variant="caption" component="p" color="white">
          &copy; 2023
        </Typography>
      </StackColumn>
    </BoxRow>
  );
};

export default Footer;
