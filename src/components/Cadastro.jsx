
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  Box,
  Button,
  Stack,
  TextField,
  Snackbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import Title from './Title';
import Paragraph from './Paragraph';

// Configurar o Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAC_T-k6r-1LQCqroyaSXAy2bMwYL_LxQI',
  authDomain: 'mulheres-conectadas-4da2a.firebaseapp.com',
  projectId: 'mulheres-conectadas-4da2a',
  // ...
};
// Inicializar o app do Firebase
const app = initializeApp(firebaseConfig);

const Cadastro = () => {
  const [name, setName] = useState('');
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [etnia, setEtnia] = useState('');
  const [genero, setGenero] = useState('');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Cadastro bem-sucedido, você pode redirecionar ou executar outras ações aqui
        console.log('Usuário cadastrado:', userCredential.user);
        setShowSuccessMessage(true); // Exibe a mensagem de sucesso
        navigate('/'); // Redirecionar para a página inicial após o cadastro
      })
      .catch((error) => {
        // Ocorreu um erro durante o cadastro
        console.log('Erro de cadastro:', error);
      });
  };

  const handleSnackbarClose = () => {
    setShowSuccessMessage(false); // Fecha a mensagem de sucesso
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
      <Title text="Cadastro de usuário" textAlign="center" />

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          mt: 1,
          py: 2
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="nome"
          label="Nome"
          name="nome"
          autoComplete="nome"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          id="matricula"
          label="Matrícula"
          name="matricula"
          autoComplete="matricula"
          autoFocus
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
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
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="etnia-label">Etnia</InputLabel>
          <Select
            labelId="etnia-label"
            id="etnia-select"
            value={etnia}
            onChange={(e) => setEtnia(e.target.value)}
          >
            <MenuItem value="branco">Branco</MenuItem>
            <MenuItem value="preto">Preto</MenuItem>
            <MenuItem value="pardo">Pardo</MenuItem>
            <MenuItem value="amarelo">Amarelo</MenuItem>
            <MenuItem value="indigena">Indígena</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="genero-label">Gênero</InputLabel>
          <Select
            labelId="genero-label"
            id="genero-select"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <MenuItem value="masculino">Masculino</MenuItem>
            <MenuItem value="feminino">Feminino</MenuItem>
            <MenuItem value="outro">Outro</MenuItem>
          </Select>
        </FormControl>

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
            "&:hover": {
              backgroundColor: '#746c84',
            }
          }}
        >
          Cadastrar
        </Button>

        {/* Mensagem de sucesso */}
        <Snackbar
          open={showSuccessMessage}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message="Cadastro realizado com sucesso!"
        />
      </Box>
    </Stack>
  );
};

export default Cadastro;
