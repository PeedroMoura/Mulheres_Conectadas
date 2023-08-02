import { Typography } from "@mui/material";
import { useEffect } from "react";

export default function Solucao() {
  useEffect(() => {
    window.location.href =
      "https://www.mulheresconnectadas.com.br/category/solucao/";
  }, []);
  return (
    <>
      <Typography
        variant="h4"
        component="h3"
        sx={{
          fontWeight: "700",
          textAlign: "center",
          marginTop: 40,
          marginBottom: 40,
          fontFamily: "-moz-initial",
        }}
      >
        Redirecionando...
      </Typography>
    </>
  );
}
