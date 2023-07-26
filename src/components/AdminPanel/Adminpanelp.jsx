import React, { useEffect, useState, useContext } from 'react';
import firebase from 'firebase/compat/app';
import { Box, Button, Card, TextField, Snackbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { initializeApp } from 'firebase/app';
import ButtonColorContext from '../buttoncolorcontext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const AdminPanelP = () => {
  const [descricao, setDescricao] = useState('');
  const [img, setImg] = useState('');
  const [titulo, setTitulo] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const firebaseConfig = {
    apiKey: 'AIzaSyAC_T-k6r-1LQCqroyaSXAy2bMwYL_LxQI',
    authDomain: 'mulheres-conectadas-4da2a.firebaseapp.com',
    projectId: 'mulheres-conectadas-4da2a',
    // ...
  };

  const handleSnackbarClose = () => {
    setShowSuccessMessage(false);
  };

  // Inicializar o app do Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const messagesCollection = collection(db, 'getstarted');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const docRef = await addDoc(messagesCollection, {
        descricao: descricao,
        img: img,
        titulo: titulo,
      });

      console.log('Mensagem enviada com sucesso. ID do documento:', docRef.id);
      setShowSuccessMessage(true);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }

    setDescricao('');
    setTitulo('');
    setImg('');
  };

  // Estilo personalizado para diminuir o tamanho do título
  const CustomTypography = styled(Typography)({
    fontSize: '1.2rem',
  });

  return (
    <Box component="div" sx={{ width: '600px', margin: '0 auto' }}>
      <CustomTypography variant="h2">Inserir conteúdo na landing page</CustomTypography>

      <Card sx={{ p: 2, mt: 2 }}>
        <form onSubmit={handleSubmit}>

          <TextField
            label="Título"
            variant="outlined"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            margin="normal"
            fullWidth
            required
          />

          <TextField
            label="Descrição"
            variant="outlined"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            margin="normal"
            fullWidth
            required
          />

          <TextField
            label="URL da imagem"
            variant="outlined"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            margin="normal"
            fullWidth
            required
          />

          <div>
            <Button variant="contained" type="submit" style={{ backgroundColor: 'purple' }}>
              Inserir
            </Button>
            <Snackbar
              open={showSuccessMessage}
              autoHideDuration={3000}
              onClose={handleSnackbarClose}
              message="Mensagem enviada com sucesso!"
            />
          </div>
        </form>
      </Card>
    </Box>
  );
};

export default AdminPanelP;

