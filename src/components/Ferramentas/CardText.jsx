import React from "react";
import { Typography } from "@mui/material";

const ToolCardText = ({ title, description }) => {
  return (
    <>
      <Typography variant="h2" sx={styles.textoTituloCaixaFerramenta}>
        {title}
      </Typography>
      <Typography variant="h2" sx={styles.textoCaixaFerramenta}>
        {description}
      </Typography>
    </>
  );
};

export default ToolCardText;