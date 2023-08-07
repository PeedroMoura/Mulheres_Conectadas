import React from "react";
import {
  Box,
  Button,
  Stack,
  Snackbar,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import fotoTopo from "../assets/formularioTop.png";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const Formulario = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  //Dados da organizção
  const [nomeOrganizacao, setNomeOrganizacao] = useState("");
  const [enderecoMatriz, setEnderecoMatriz] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [cep, setCep] = useState("");
  const [emailOrganizacao, setEmailDaOrganizacao] = useState("");
  const [paginaWebOrganizacao, setPaginaWebOrganizacao] = useState("");
  //Dados do representante legal da orgaização
  const [nomeRepresentante, setNomeRepresentante] = useState("");
  const [cargoRepresentante, setCargoRepresentante] = useState("");
  const [foneRepresentante, setFoneRepresentante] = useState("");
  const [emailRepresentante, setEmailRepresentante] = useState("");
  const [paginaWebRepresentante, setPaginaWebRepresentante] = useState("");
  //Dados do contato da organizção
  const [nomeContato, setNomeContato] = useState("");
  const [cargoContato, setCargoContato] = useState("");
  const [foneContato, setFoneContato] = useState("");
  const [emailContato, setEmailContato] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(nomeOrganizacao === '' || enderecoMatriz === '' || cidade === ''  || uf === '' || cep === '' || emailOrganizacao === '' || paginaWebOrganizacao === '' ||
       nomeRepresentante === '' || cargoRepresentante === '' || foneRepresentante === '' || emailRepresentante === '' || paginaWebRepresentante === '' ||
       nomeContato === '' || cargoContato === '' || foneContato === '' || emailContato === ''
    ){
      alert("Preencha todos os campos!")
      return;
    }

    const templateParams = {
      nome_organizacao: nomeOrganizacao,
      endereco_matriz: enderecoMatriz,
      cidade: cidade,
      uf: uf,
      cep: cep,
      email_organizacao: emailOrganizacao,
      paginaweb_organizacao: paginaWebOrganizacao,

      nome_representante: nomeRepresentante,
      cargo_representante: cargoRepresentante,
      fone_representante: foneRepresentante,
      email_representante: emailRepresentante,
      paginaweb_representante: paginaWebRepresentante,

      nome_contato: nomeContato,
      cargo_contato: cargoContato,
      fone_contato: foneContato,
      email_contato: emailContato,
    };

    emailjs.send(
      "service_z8m2j3m",
      "template_8xkx2na",
      templateParams,
      "VUjfigMB1Q4qsb3CF"
    );

    setNomeOrganizacao('');
    setEnderecoMatriz('');
    setCidade('');
    setUf('');
    setCep('');
    setEmailDaOrganizacao('');
    setPaginaWebOrganizacao('');
    setNomeRepresentante('');
    setCargoRepresentante('');
    setFoneRepresentante('');
    setEmailRepresentante('');
    setPaginaWebRepresentante('');
    setNomeContato('');
    setCargoContato('');
    setFoneContato('');
    setEmailContato('');

    // .then((response) => {
    //   alert('Email enviado com sucesso!');
    //   setNomeOrganizacao('');
    //   set
    // }, (erro) => {
    //   alert(erro);
    // })
  };

  const handleSnackbarClose = () => {
    setShowSuccessMessage(false);
  };

  useEffect(() => {
    carregarPagina();
  }, []);
  //Função que joga o scroll para o topo da tela
  const carregarPagina = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <form>
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
        <img src={fotoTopo} alt="a" style={{ width: 1500, height: 250 }}></img>
        <Typography
          variant="h4"
          component="h3"
          sx={{
            fontWeight: "700",
            textAlign: "center",
            marginTop: 3,
            marginBottom: 5,
            fontFamily: "-moz-initial",
          }}
        >
          Formulário de interesse para aquisição do Selo Mulheres Connectadas
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            mt: 1,
            py: 2,
          }}
        >
          <Typography
            variant="h5"
            component="h6"
            sx={{
              fontWeight: "500",
              textAlign: "initial",
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            Dados da Organização
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="nomeDaOrganização"
            label="Nome da Organização"
            name="nome da organização"
            autoComplete="nome da organização"
            onChange={(e) => setNomeOrganizacao(e.target.value)}
            value={nomeOrganizacao}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="ederecoMatriz"
            label="Endereço da matriz/sede social"
            name="ederecoMatriz"
            autoComplete="ederecoMatriz"
            onChange={(e) => setEnderecoMatriz(e.target.value)}
            value={enderecoMatriz}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="cidade"
            label="Cidade"
            name="cidade"
            autoComplete="cidade"
            onChange={(e) => setCidade(e.target.value)}
            value={cidade}
            autoFocus
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="UF-label">
              UF
            </InputLabel>
            <Select labelId="UF" id="uf-select" onChange={(e) => setUf(e.target.value)}value={uf}>
              <MenuItem value="ac">AC</MenuItem>
              <MenuItem value="al">AL</MenuItem>
              <MenuItem value="am">AM</MenuItem>
              <MenuItem value="ap">AP</MenuItem>
              <MenuItem value="ba">BA</MenuItem>
              <MenuItem value="ce">CE</MenuItem>
              <MenuItem value="df">DF</MenuItem>
              <MenuItem value="es">ES</MenuItem>
              <MenuItem value="go">GO</MenuItem>
              <MenuItem value="ma">MA</MenuItem>
              <MenuItem value="mg">MG</MenuItem>
              <MenuItem value="ms">MS</MenuItem>
              <MenuItem value="mt">MT</MenuItem>
              <MenuItem value="pa">PA</MenuItem>
              <MenuItem value="pb">PB</MenuItem>
              <MenuItem value="pe">PE</MenuItem>
              <MenuItem value="pi">PI</MenuItem>
              <MenuItem value="pr">PR</MenuItem>
              <MenuItem value="rj">RJ</MenuItem>
              <MenuItem value="rn">RN</MenuItem>
              <MenuItem value="ro">RO</MenuItem>
              <MenuItem value="rr">RR</MenuItem>
              <MenuItem value="rs">RS</MenuItem>
              <MenuItem value="sc">SC</MenuItem>
              <MenuItem value="se">SE</MenuItem>
              <MenuItem value="sp">SP</MenuItem>
              <MenuItem value="to">TO</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            id="cep"
            label="CEP"
            name="cep"
            autoComplete="cep"
            onChange={(e) => setCep(e.target.value)}
            value={cep}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmailDaOrganizacao(e.target.value)}
            value={emailOrganizacao}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="paginaweb"
            label="Pagina na Web"
            name="paginaweb"
            autoComplete="paginaweb"
            onChange={(e) => setPaginaWebOrganizacao(e.target.value)}
            value={paginaWebOrganizacao}
            autoFocus
          />

          <Typography
            variant="h5"
            component="h6"
            sx={{
              fontWeight: "500",
              textAlign: "initial",
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            Dados da(o) representante legal da Organização
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            id="nomeDoRepresentante"
            label="Nome do representante"
            name="nomeDoRepresentante"
            autoComplete="nomeDoRepresentante"
            onChange={(e) => setNomeRepresentante(e.target.value)}
            value={nomeRepresentante}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="cargo"
            label="Cargo"
            name="cargo"
            autoComplete="cargo"
            onChange={(e) => setCargoRepresentante(e.target.value)}
            value={cargoRepresentante}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="fone"
            label="Fone"
            name="fone"
            autoComplete="fone"
            onChange={(e) => setFoneRepresentante(e.target.value)}
            value={foneRepresentante}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmailRepresentante(e.target.value)}
            value={emailRepresentante}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="paginaweb"
            label="Pagina na Web"
            name="paginaweb"
            autoComplete="paginaweb"
            onChange={(e) => setPaginaWebRepresentante(e.target.value)}
            value={paginaWebRepresentante}
            autoFocus
          />

          <Typography
            variant="h5"
            component="h6"
            sx={{
              fontWeight: "500",
              textAlign: "initial",
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            Dados do contato da Organização
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            id="nomeDoResponsavel"
            label="Nome do Responsavel"
            name="nomeDoResponsavel"
            autoComplete="nomeDoResponsavel"
            onChange={(e) => setNomeContato(e.target.value)}
            value={nomeContato}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="cargo"
            label="Cargo"
            name="cargo"
            autoComplete="cargo"
            onChange={(e) => setCargoContato(e.target.value)}
            value={cargoContato}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="fone"
            label="Fone"
            name="fone"
            autoComplete="fone"
            onChange={(e) => setFoneContato(e.target.value)}
            value={foneContato}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmailContato(e.target.value)}
            value={emailContato}
            autoFocus
          />

          <Button
            variant="contained"
            fullWidth
            type="submit"
            size="medium"
            onClick={handleSubmit}
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
    </form>
  );
};

export default Formulario;
