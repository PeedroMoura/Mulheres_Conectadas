import React, { useEffect, useState, useContext } from 'react';
import firebase from 'firebase/compat/app';
import { Box, Button, Card, TextField, Snackbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ButtonColorContext from '../buttoncolorcontext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const AdminPanel = ({ setFormularioData }) => {
  const { updateButtonColor } = useContext(ButtonColorContext);
  const [sobre, setSobre] = useState('');
  const [titulo, setTitulo] = useState('');

 
    const firebaseConfig = {
      apiKey: 'AIzaSyAC_T-k6r-1LQCqroyaSXAy2bMwYL_LxQI',
      authDomain: 'mulheres-conectadas-4da2a.firebaseapp.com',
      projectId: 'mulheres-conectadas-4da2a',
      // ...
    };
    const handleSnackbarClose = () => {
      setShowSuccessMessage(false);
    };
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    // Inicializar o app do Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const messagesCollection = collection(db, 'sobre');

   

  const handleSubmit1 = async (event) => {
    event.preventDefault();

    try {
      const docRef = await addDoc(messagesCollection, {
        sobre: sobre,
        titulo: titulo,
      });

      console.log('Mensagem enviada com sucesso. ID do documento:', docRef.id);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }

    setSobre('');
    setTitulo('');
  };

  // Estilo personalizado para diminuir o tamanho do título
  const CustomTypography = styled(Typography)({
    fontSize: '1.2rem',
  });

  return (
    <Box component="div" sx={{ width: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'right', color: 'purple' }}>Cadastre aqui o que você quer exibir para o seu usuário!</h2>

      <CustomTypography variant="h2">Alterar conteúdo da página sobre</CustomTypography>

      <Card sx={{ p: 2, mt: 2 }}>
        <form onSubmit={handleSubmit1}>
          <TextField
            label="Sobre"
            variant="outlined"
            value={sobre}
            onChange={(e) => setSobre(e.target.value)}
            margin="normal"
            fullWidth
            required
          />

          <TextField
            label="Título"
            variant="outlined"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            margin="normal"
            fullWidth
            required
          />

          <div>
            <Button variant="contained" type="submit" style={{ backgroundColor: 'purple' }}>
              Alterar
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

export default AdminPanel;
