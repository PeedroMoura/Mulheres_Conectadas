import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  Box,
  Button,
  Stack,
  TextField
} from '@mui/material';
import Title from '../../components/Title';

// Configurar o Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAC_T-k6r-1LQCqroyaSXAy2bMwYL_LxQI',
  authDomain: 'mulheres-conectadas-4da2a.firebaseapp.com',
  projectId: 'mulheres-conectadas-4da2a',
  // ...
};
// Inicializar o app do Firebase
const app = initializeApp(firebaseConfig);

const Contact = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Autenticação bem-sucedida, você pode redirecionar ou executar outras ações aqui
        console.log('Usuário autenticado:', userCredential.user);
        navigate('/'); // Redirecionar para a página inicial após a autenticação
      })
      .catch((error) => {
        // Ocorreu um erro durante a autenticação
        console.log('Erro de autenticação:', error);
      });
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
      <Title text="Login" textAlign="center" />

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
       <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <Link to="/forgot" style={{ color: 'purple', marginRight: '100px' }}>Esqueci a senha</Link>
          <Link to="/cadastro" style={{ color: 'purple' }}>Não tem acesso ainda? Cadastre-se</Link>
        </div>
       

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
          Entrar
        </Button>
      </Box>
    </Stack>
  );
};

export default Contact;

