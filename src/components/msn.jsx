import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Snackbar } from '@mui/material';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Configurar o Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAC_T-k6r-1LQCqroyaSXAy2bMwYL_LxQI',
  authDomain: 'mulheres-conectadas-4da2a.firebaseapp.com',
  projectId: 'mulheres-conectadas-4da2a',
  // ...
};
// Inicializar o app do Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ContatoForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Enviar o formulário para o Firebase Firestore
      const docRef = await addDoc(collection(db, 'mensagens'), {
        email,
        message,
      });

      console.log('Mensagem enviada com sucesso. ID do documento:', docRef.id);

      // Exibir mensagem de sucesso
      setShowSuccessMessage(true);
      // Limpar os campos do formulário
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
    }
  };

  const handleSnackbarClose = () => {
    setShowSuccessMessage(false);
  };

  return (
    
    <Stack
    
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        px: 2,
      }}
    >
        <h2 style={{color: 'purple'}}>Deixe aqui sua mensagem :D</h2>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          mt: 1,
          py: 2,
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="E-mail"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="message"
          label="Mensagem"
          name="message"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          type="submit"
          size="medium"
          sx={{
            fontSize: '0.9rem',
            textTransform: 'capitalize',
            py: 2,
            mt: 3,
            mb: 2,
            borderRadius: 0,
            backgroundColor: 'purple',
            '&:hover': {
              backgroundColor: '#746c84',
            },
          }}
        >
          Enviar
        </Button>

        {/* Mensagem de sucesso */}
        <Snackbar
          open={showSuccessMessage}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message="Mensagem enviada com sucesso!"
        />
      </Box>
    </Stack>
  );
};

export default ContatoForm;
