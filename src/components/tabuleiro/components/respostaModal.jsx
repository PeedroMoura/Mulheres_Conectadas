import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const RespostaModal = ({ card, respostaCorreta, showModalResult, onClose }) => {
  const modalContent = respostaCorreta ? (
    <>
      <Typography
        variant="h5"
        gutterBottom
        style={{
          textAlign: "center",
          color: "white",
          padding: 5,
          borderRadius: "8px",
          backgroundColor:"#AC63A9",
          boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.2)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Resposta correta!
      </Typography>
      {card && (
        <img
          src={`/static/tabuleiro/${card.url}`}
          height="550"
          alt={card.titulo}
        />
      )}
    </>
  ) : (
    <>
      <Typography
        variant="h5"
        gutterBottom
        style={{
          textAlign: "center",
          color: "white",
          padding: 5,
          fontFamily: "Arial, sans-serif",
          backgroundColor:"#AC63A9",
        }}
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
          maxWidth: "500px",
          borderRadius: "16px",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.2)"
        }}
      >
        {modalContent}
      </Box>
    </Modal>
  );
};

export default RespostaModal;
