import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  caixaFerramenta: {
    maxWidth: "100%",
    height: 410,
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
  },

  imgCaixaFerramenta: {
    width: "100%",
    resizeMode: "countain",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    cursor: "pointer",
  },

  textoTituloCaixaFerramenta: {
    fontSize: 30,
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
        height: 620,
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
        }}
      >
        <div
          style={styles.caixaFerramenta}
          onClick={() =>
            (window.location.href = "https://mulheresconectadasgame.web.app/")
          }
        >
          <img
            src="https://imagens.tiespecialistas.com.br/2013/09/qr-code-malware-300x200.jpg"
            alt="https://imagens.tiespecialistas.com.br/2013/09/qr-code-malware-300x200.jpg"
            style={styles.imgCaixaFerramenta}
          ></img>
          <Typography variant="h2" sx={styles.textoTituloCaixaFerramenta}>
            Programação com QrCode
          </Typography>
          <Typography variant="h2" sx={styles.textoCaixaFerramenta}>
            Um plataforma de programação com QrCode que irá alfabetizar as
            mulheres, tendo como conteudo principalmente a programação.
          </Typography>
        </div>
        <div style={styles.caixaFerramenta}>
          <img
            src="https://img.quizur.com/f/img63c2d4ebed2941.63799570.png?lastEdited=1673712896"
            alt="https://img.quizur.com/f/img63c2d4ebed2941.63799570.png?lastEdited=1673712896"
            style={styles.imgCaixaFerramenta}
          ></img>
          <Typography variant="h2" sx={styles.textoTituloCaixaFerramenta}>
            Quiz
          </Typography>
          <Typography variant="h2" sx={styles.textoCaixaFerramenta}>
            Um quiz que irá alfabetizar as mulheres, tendo como conteudo
            principalmente a programação.
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
            Um jogo de tabuleiro que irá alfabetizar as mulheres, tendo como
            conteudo principalmente a programação.
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Ferramentas;
