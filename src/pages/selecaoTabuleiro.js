import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import imgTabuleiro from "./../assets/tabuleiro.jpg";
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
          image={imgTabuleiro}
          title={"Aprenda sobre Portugol"}
          description={
            "Um jogo de tabuleiro voltado para aprender Portugol."
          }
          onClick={() => {
            navigate("/tabuleiro2");
          }}
        />

{/* // ====================================================================================================== */}

        <ToolCard
          image={imgTabuleiro}
          title={"Conheça mais sobre Html/Css"}
          description={
            "Aprenda sobre como funciona a criação de sites com Html e Css."
          }
          onClick={() => {
            navigate("/tabuleiro");
          }}
        />

{/* // ====================================================================================================== */}

        <ToolCard
          image={imgTabuleiro}
          title={"Descubra o que são Redes Socias"}
          description={
            "Um jogo que irá te ensinar um pouco sobre as redes sociais."
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
