import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography} from '@mui/material';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';


const AdicionaAula = () => {
  const [linkDownload, setLinkDownload] = useState('');
  const [linkPDF, setLinkPDF] = useState('');
  const [sub, setSub] = useState('');
  const [texto, setTexto] = useState('');
  const [titulo, setTitulo] = useState('');
  const [urlVideo, setUrlVideo] = useState('');

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
    const aulaCollection = collection(db, 'aula');

    try {
      await addDoc(aulaCollection, {
        linkDownload: linkDownload,
        linkPDF: linkPDF,
        sub: sub,
        texto: texto,
        titulo: titulo,
        urlVideo: urlVideo,
      });

      console.log('Dados enviados com sucesso!');
      setLinkDownload('');
      setLinkPDF('');
      setSub('');
      setTexto('');
      setTitulo('');
      setUrlVideo('');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
      <Card sx={{ p: 2, mt: 2 }}>
        <CardContent>
          <Typography>Adicionar aula</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Link de Download"
              variant="outlined"
              value={linkDownload}
              onChange={(e) => setLinkDownload(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Link do PDF"
              variant="outlined"
              value={linkPDF}
              onChange={(e) => setLinkPDF(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Sub"
              variant="outlined"
              value={sub}
              onChange={(e) => setSub(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Texto"
              variant="outlined"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Título"
              variant="outlined"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="URL do Vídeo"
              variant="outlined"
              value={urlVideo}
              onChange={(e) => setUrlVideo(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" type="submit" style={{ backgroundColor: 'purple' }}>
              Inserir
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdicionaAula;
