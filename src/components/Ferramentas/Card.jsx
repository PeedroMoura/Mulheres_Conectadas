import React from "react";
import { Typography } from "@mui/material";

const ToolCard = ({ image, title, description, onClick }) => {
  return (
    <div style={styles.caixaFerramenta} onClick={onClick}>
      <img src={image} alt={title} style={styles.imgCaixaFerramenta} />
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