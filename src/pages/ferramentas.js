import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import imgQrCode from "./../assets/ferramentas_qrcode.png";
import imgQuiz from "./../assets/imgquiz.jpg";

const styles = {
  caixaFerramenta: {
    maxWidth: "100%",
    // height: 410,
    flex: 5,
    backgroundColor: "whitesmoke",
    margin: 10,
    padding: 15,
    borderRadius: 5,
    borderWdith: 1,
    borderStyle: "solid",
    borderColor: "#bbb",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: 400,
  },

  imgCaixaFerramenta: {
    width: "100%",
    height: 200,
    minHeight: 200,
    resizeMode: "countain",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    cursor: "pointer",
  },

  textoTituloCaixaFerramenta: {
    fontSize: 25,
    color: "black",
    marginTop: 2,
    textAlign: "left",
  },

  textoCaixaFerramenta: {
    fontSize: 18,
    color: "black",
    marginTop: 2,
  },
};

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
        <div
          style={styles.caixaFerramenta}
          onClick={() =>
            (window.location.href = "https://mulheresconectadasgame.web.app/")
          }
        >
          <img
            src={imgQrCode}
            alt="aplicativo de programação com QrCode"
            style={styles.imgCaixaFerramenta}
          ></img>
          <Typography variant="h2" sx={styles.textoTituloCaixaFerramenta}>
            Habilidades em programação tecnológica
          </Typography>
          <Typography variant="h2" sx={styles.textoCaixaFerramenta}>
            Capacitação em Programação para Iniciantes explorando conceitos
            essenciais, criando suas primeiras linhas de código de forma
            acessível.
          </Typography>
        </div>
        <div style={styles.caixaFerramenta}>
          <img
            src={imgQuiz}
            alt="quiz"
            style={styles.imgCaixaFerramenta}
          ></img>
          <Typography variant="h2" sx={styles.textoTituloCaixaFerramenta}>
            Quiz
          </Typography>
          <Typography variant="h2" sx={styles.textoCaixaFerramenta}>
            Um quiz que irá alfabetizar as mulheres, com perguntas que tem como conteúdo
            principal a programação.
          </Typography>
        </div>
        <div
          style={styles.caixaFerramenta}
          onClick={() => navigate("/tabuleiro")}
        >
          <img
            src="https://i.imgur.com/mVYDkjQ.png"
            alt="https://i.imgur.com/mVYDkjQ.png"
            style={styles.imgCaixaFerramenta}
          ></img>
          <Typography variant="h2" sx={styles.textoTituloCaixaFerramenta}>
            Tabuleiro Digital
          </Typography>
          <Typography variant="h2" sx={styles.textoCaixaFerramenta}>
            Um jogo de tabuleiro interativo que irá explorar diversos conceitos do mundo da tecnologia.
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Ferramentas;
