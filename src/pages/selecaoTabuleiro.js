import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import conectaBanner from "./../assets/bannersTabuleiro/jornadabanner.jpg";
import startBanner from "./../assets/bannersTabuleiro/startbanner.jpg";
import alfabetizacaoBanner from "./../assets/bannersTabuleiro/alfabetizacaobanner.jpg";
import ToolCard from "../components/Ferramentas/Card";

const SelecaoTabuleiro = () => {
  
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#990099",
        maxWidth: "100%",
        minHeight: 610,
        padding: 30,
        marginBottom: 100,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ marginBottom: 30 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: 700, color: "#fff" }}
        >
          Tabuleiros Digitais 
        </Typography>
        <div
          style={{ backgroundColor: "whitesmoke", height: 1.5, width: 425, marginTop: 10 }}
        ></div>
      </div>

      <div
        style={{
          width: "80%",
          backgroundColor: "white",
          alignItems: "center",
          display: "flex",
          alignSelf: "center",
          padding: 10,
          borderRadius: 10,
          minHeight: 400,
        }}
      >

{/* // ====================================================================================================== */}

        <ToolCard
          image={startBanner}
          // title={"Jornada Start"}
          description={
            "É hora de decolar! Na Jornada Start, você se encontrará no caminho para se tornar uma líder inspiradora. Através de nossos cursos dinâmicos e  você desenvolverá habilidades de liderança essenciais, aprenderá a se destacar."
          }
          onClick={() => {
            navigate("/tabuleiro");
          }}
        />

{/* // ====================================================================================================== */}

        <ToolCard
          image={conectaBanner}
          // title={"Jornada Conecta"}
          description={
            "Preparada para empreender? A Jornada Conecta é a sua passagem para o mundo do empreendedorismo. Descubra como transformar suas ideias em negócios com orientação especializada e recursos que o ajudarão a trilhar o caminho ."
          }
          onClick={() => {
            navigate("/tabuleiro2");
          }}
        />

{/* // ====================================================================================================== */}

        <ToolCard
          image={alfabetizacaoBanner}
          // title={"Alfabetização Digital"}
          description={
            "No mundo digital de hoje, a alfabetização digital é essencial. Nossa jornada de Alfabetização Digital oferece atividades práticas para fortalecer suas habilidades tecnológicas essenciais para o mercado de trabalho."
          }
          onClick={() => {
            navigate("/tabuleiro3");
          }}
        />

{/* // ====================================================================================================== */}

        {/* <ToolCard
          image={imgTabuleiro}
          title={"Conteúdo diverso - Tecnologia"}
          description={
            "Tabuleiro com conteúdos diversos para testar seu conhecimento geral " +
            "sobre tipos de tecnologias."
          }
        //   onClick={() => {
        //     window.location.href = "https://mulheresconectadasgame.web.app/";
        //   }}
        /> */}

{/* // ====================================================================================================== */}
      </div>
    </div>

    
  );
};
export default SelecaoTabuleiro;
