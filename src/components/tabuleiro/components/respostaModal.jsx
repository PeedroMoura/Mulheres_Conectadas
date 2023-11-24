import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const RespostaModal = ({
  card,
  respostaCorreta,
  showModalResult,
  onClose,
}) => {
    
    console.log('AAAAAAA')
  const modalContent = respostaCorreta ? (
    <>
      <Typography
        variant="h5"
        gutterBottom
        style={{ textAlign: "center", color: "white" }}
      >
        Resposta correta!
      </Typography>
<<<<<<< HEAD
      { card && <img src={`/static/tabuleiro/${card.url}`} height="550" alt={card.titulo} />}
=======
      { card && <img src={`/static/tabuleiro/cardsJornadaStart/${card.url}`} height="550" alt={card.titulo} />}
      { card && <img src={`/static/tabuleiro/cardsJornadaConecta/${card.url}`} height="550" alt={card.titulo} />}
      { card && <img src={`/static/tabuleiro/cardsJornadaAlfabetizacaoDigital/${card.url}`} height="550" alt={card.titulo} />}
>>>>>>> 296b508737b3f0e8d8996095c226ca5f8ddf7294
    </>
  ) : (
    <>
      <Typography
        variant="h5"
        gutterBottom
        style={{ textAlign: "center", color: "white" }}
      >
        Resposta incorreta, volte algumas casas!
      </Typography>
    </>
  );
  return (
    <Modal open={showModalResult} onClose={onClose}>
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#a352a0",
          maxWidth: "400px",
          borderRadius: "16px",
          padding: "16px",
        }}
      >
        {modalContent}
      </Box>
    </Modal>
  );
};

export default RespostaModal;
