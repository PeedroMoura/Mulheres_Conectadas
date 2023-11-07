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
      { card && <img src={`/static/tabuleiro/cardsJornadaStart/${card.url}`} height="300" alt={card.titulo} />}
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
