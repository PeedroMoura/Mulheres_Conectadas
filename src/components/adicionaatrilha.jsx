import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { TextField, Button, Box, Typography, Card } from '@mui/material';

const AdicionaTrilha = () => {
  const [nome, setNome] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const firebaseConfig = {
      apiKey: 'AIzaSyAC_T-k6r-1LQCqroyaSXAy2bMwYL_LxQI',
      authDomain: 'mulheres-conectadas-4da2a.firebaseapp.com',
      projectId: 'mulheres-conectadas-4da2a',
      // ...
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const trilhaCollection = collection(db, 'trilha');

    try {
      await addDoc(trilhaCollection, {
        nome: nome,
      });

      console.log('Dados enviados com sucesso!');
      setNome('');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    < Box component="div" sx={{ width: '600px', margin: '0 auto' }}>
    <Card sx={{ p: 2, mt: 2 }}>
      <Typography>Adicionar nome da trilha</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          variant="outlined"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth
          margin="normal"
        />
         <Button variant="contained" type="submit" style={{ backgroundColor: 'purple' }}>
              Inserir
            </Button>
            
      </form>
      </Card>
    </Box>
  );
};

export default AdicionaTrilha;


