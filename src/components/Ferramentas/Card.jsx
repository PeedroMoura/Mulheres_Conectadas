import React from "react";
import { Typography } from "@mui/material";
import imgQrCode from "./../../assets/ferramentas_qrcode.jpg";
import "./styles.css";

const styles = {
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

const ToolCard = ({ image, title, description, onClick }) => {
  return (
    <div
    className="caixaFerramenta"
    onClick={onClick}
  >
    <img
      src={image}
      alt="Imagem"
      className="imgCaixaFerramenta"
    ></img>
    <Typography variant="h2" sx={styles.textoTituloCaixaFerramenta}>
      {title}
    </Typography>
    <Typography variant="h2" sx={styles.textoCaixaFerramenta}>
      {description}
    </Typography>
  </div>
  );
};

export default ToolCard;