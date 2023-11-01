import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const TrueFalseModal = ({ card, showModal, onResponder, onClose }) => {
  const responder = (resposta) => {
    onResponder(card.resposta === resposta);
  };

  return (
    <Modal open={showModal} onClose={onClose}>
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#a352a0",
          borderRadius: "16px",
          padding: "16px",
        }}
      >
        <Typography variant="h5" gutterBottom style={{ textAlign: "center", color: "white" }}>
          Verdadeiro ou Falso?
        </Typography>
        <Typography paragraph style={{ textAlign: "center", color: "white" }}>
          {card !== null && card.pergunta}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            onClick={() => responder(true)}
            style={{
              backgroundColor: "purple",
              borderRadius: "16px",
              flex: 1,
              marginRight: "8px",
              color: "white",
            }}
          >
            Verdadeiro
          </Button>
          <Button
            variant="contained"
            onClick={() => responder(false)}
            style={{
              backgroundColor: "purple",
              borderRadius: "16px",
              flex: 1,
              color: "white",
            }}
          >
            Falso
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default TrueFalseModal;
