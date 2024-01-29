import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import {
  Alert,
  Box,
  Button,
  Stack,
  Snackbar,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Title from "../../components/Title";
import { setDoc, doc } from "firebase/firestore";
import db from "../../config/firebase";

const Cadastro = () => {
  const [name, setName] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [etnia, setEtnia] = useState("");
  const [genero, setGenero] = useState("");
  const [idade, setIdade] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [orientacaoSexual, setOrientacaoSexual] = useState("");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const auth = getAuth();

    try {
      //Cria o usuário
      await createUserWithEmailAndPassword(auth, email, password);
      // console.log('Usuário cadastrado:', userCredential.user);
      setShowSuccessMessage(true);
      setName("");
      setEmpresa("");
      setEmail("");
      setPassword("");
      setEtnia("");
      setGenero("");
      setIdade("");
      setEstadoCivil("");
      setOrientacaoSexual("");

      const user = getAuth().currentUser;

      //Envia o e-mail de verificação
      sendEmailVerification(user)
        .then(() => {
          <Alert severity="success">
            Email de verificação enviado com sucesso!
          </Alert>;
        })
        .catch((error) => {
          <Alert severity="error">
            Falha ao enviar o email de verificação!
          </Alert>;
        });
      setShowSuccessMessage(true);

      // Cadastra o restante dos dados do usuário no firestore
      const docUsuarios = doc(db, "usuarios", user.uid);
      await setDoc(docUsuarios, {
        name,
        empresa,
        email,
        password,
        genero,
        etnia,
        orientacaoSexual,
        idade,
        estadoCivil,
        id: user.uid,
      });
    } catch (erro) {
      alert(erro);
    }
  };
  const handleSnackbarClose = () => {
    setShowSuccessMessage(false);
  };

  return (
    //Stack organiza os objetos na horizontal ou vertical
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
          py: 2,
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
          id="empresa"
          label="Empresa"
          name="empresa"
          autoComplete="empresa"
          autoFocus
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
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
          <InputLabel id="idade-label">Idade</InputLabel>
          <Select
            labelId="idade-label"
            id="idade-select"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          >
            <MenuItem value="18-22">18 - 22</MenuItem>
            <MenuItem value="23-30">23 - 30</MenuItem>
            <MenuItem value="31-40">31 - 40</MenuItem>
            <MenuItem value="41+">41+</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="estado-civil">Estado Civil</InputLabel>
          <Select
            labelId="estado-civil"
            id="estado-civil"
            value={estadoCivil}
            onChange={(e) => setEstadoCivil(e.target.value)}
          >
            <MenuItem value="Solteiro">Solteiro</MenuItem>
            <MenuItem value="Casado">Casado</MenuItem>
            <MenuItem value="Divorciado">Divorciado</MenuItem>
            <MenuItem value="Viuvo">Viúvo</MenuItem>
          </Select>
        </FormControl>

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
          <InputLabel id="orientacao-label">Orientação Sexual</InputLabel>
          <Select
            labelId="orientacao-label"
            id="orientacao-label"
            value={orientacaoSexual}
            onChange={(e) => setOrientacaoSexual(e.target.value)}
          >
            <MenuItem value="Heterossexual">Heterossexual</MenuItem>
            <MenuItem value="Homossexual">Homossexual</MenuItem>
            <MenuItem value="Bissexual">Bissexual</MenuItem>
            <MenuItem value="Outros">Outros</MenuItem>
            <MenuItem value="Prefiro não responder">Prefiro não responder</MenuItem>
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
            fontSize: "0.9rem",
            textTransform: "capitalize",
            py: 2,
            mt: 3,
            mb: 2,
            borderRadius: 0,
            backgroundColor: "purple",
            "&:hover": {
              backgroundColor: "#746c84",
            },
          }}
        >
          Cadastrar
        </Button>

        <Snackbar
          open={showSuccessMessage}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message="Cadastro feito com sucesso"
        />
      </Box>
    </Stack>
  );
};

export default Cadastro;
