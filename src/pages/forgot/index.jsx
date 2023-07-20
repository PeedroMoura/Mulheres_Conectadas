import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import {
  Box,
  Button,
  Stack,
  TextField,
  Collapse
} from '@mui/material';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { purple } from '@mui/material/colors';
import forgotImg from '../../assets/menina.png'
const Forgot = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetSent(true);
      })
      .catch((error) => {
        // Tratar o erro, exibir uma mensagem de erro, etc.
        console.log('Erro ao enviar o email de recuperação de senha:', error);
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
      <img src={forgotImg} alt="Mulheres Conectadas" style={{width: '200px'}} />
      <Title text="Esqueceu a senha?" textAlign="center" style={{color: purple}} />
      <Paragraph text={'Relaxa, já já você recupera'} textAlign="center" /> 

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
          label="Digite seu email"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {resetSent && (
          <Collapse in={resetSent}>
            <Paragraph text="Email de recuperação de senha enviado. Por favor, verifique sua caixa de entrada." />
          </Collapse>
        )}

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
          Encontrar
        </Button>
      </Box>
    </Stack>
  );
};

export default Forgot;
