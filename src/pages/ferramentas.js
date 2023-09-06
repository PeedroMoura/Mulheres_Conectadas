import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import imgQrCode from "./../assets/ferramentas_qrcode.png";
import imgQuiz from "./../assets/imgquiz.jpg";
import imgTabuleiro from "./../assets/tabuleiro.jpg";
import ToolCard from "../components/Ferramentas/Card";

const Ferramentas = () => {
  
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
          variant="h2"
          component="h1"
          sx={{ fontWeight: 700, color: "#fff" }}
        >
          Ferramentas
        </Typography>
        <div
          style={{ backgroundColor: "whitesmoke", height: 1.5, width: 345 }}
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
        <ToolCard
          image={imgQrCode}
          title={"Habilidades em programação tecnológica"}
          description={
            "Capacitação em Programação para Iniciantes explorando conceitos" +
            "essenciais, criando suas primeiras linhas de código de forma" +
            "acessível."
          }
          onClick={() => {
            window.location.href = "https://mulheresconectadasgame.web.app/";
          }}
        />
        <ToolCard
          image={imgQuiz}
          title={"Quiz"}
          description={
            "Um quiz que irá alfabetizar as mulheres, com perguntas que tem como conteúdo" +
            "principal a programação."
          }
          // onClick={() => {
          //   window.location.href = "https://mulheresconectadasgame.web.app/";
          // }}
        />
        <ToolCard
          image={imgTabuleiro}
          title={"Tabuleiro Digital"}
          description={
            "Um jogo de tabuleiro interativo que irá explorar diversos conceitos do mundo da tecnologia."
          }
          onClick={() => {
            navigate("/tabuleiro");
          }}
        />
      </div>
    </div>
  );
};
export default Ferramentas;
