import React from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';

const TrueFalseModal = ({ card, showModal, trocarImgCard, onClose }) => {

  const responder = (resposta) => {
    if(card.resposta === resposta){
        // Se resposta correta
    }else{
        // Se resposta incorreta
    }

    trocarImgCard(card);
  }

  return (
    <Modal open={showModal} onClose={onClose}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: 300, // Largura desejada
          mx: 'auto', // Centralizar horizontalmente
          my: 'auto', // Centralizar verticalmente
          bgcolor: 'white', // Cor de fundo
          p: 2, // Espaçamento interno
        }}
      >
        <Typography variant="h5" gutterBottom>
          Pergunta
        </Typography>
        <Typography paragraph>
          {card !== null && card.pergunta}
        </Typography>
        <Button variant="contained" onClick={() => responder(true)}>
          Verdadeiro
        </Button>
        <Button variant="contained" onClick={() => responder(false)}>
          Falso
        </Button>
      </Box>
    </Modal>
  );
};

export default TrueFalseModal;
