import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { setDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import db from "../config/firebase";
import { getAuth } from "@firebase/auth";

const Admin = () => {
  //Variavéis das trilhas e das aulas
  const [nmrTrilha, setNmrTrilha] = useState("");
  const [linkpdf, setLinkPdf] = useState("");
  const [nmrAula, setNmrAula] = useState("");
  const [titulo, setTitulo] = useState("");
  const [resumoAula, setResumoAula] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  //Variaveis da tela de inicio
  const [tituloEsquerdo, setTituloEsquerdo] = useState("");
  const [subtituloEsquerdo, setSubtituloEsquerdo] = useState("");
  const [tituloDireito, setTituloDireito] = useState("");
  const [imagemCarrosel, setImagemCarrosel] = useState("");

  //Criando uma trilha e salvando um objeto "aulas" com os valores inseridos
  const createTrilha = async (
    docCursos,
    nmrAula,
    linkpdf,
    titulo,
    videoUrl,
    resumoAula
  ) => {
    await setDoc(docCursos, {
      id: nmrTrilha,  
      aulas: {
        [nmrAula]: {
          linkpdf,
          nmrAula: nmrAula,
          titulo,
          videoUrl,
          resumoAula,
        },
      },
    });
  };
  //Fazendo upload e adicionando novas trilhas/aulas
  const updateTrilha = async (
    docCursos,
    nmrAula,
    linkpdf,
    titulo,
    videoUrl,
    resumoAula
  ) => {
    await updateDoc(docCursos, {
      [`aulas.${nmrAula}`]: {
        linkpdf,
        nmrAula: nmrAula,
        titulo,
        videoUrl,
        resumoAula,
      },
    });
  };

  const updateTelaInicial = async () => {
    const user = getAuth().currentUser; 

    const docTelaInicial = doc(db, "telainical", user.uid)
    
    try{
      await updateDoc(docTelaInicial, {
        tituloesquerdo: tituloEsquerdo,
        subtituloesquerdo:  subtituloEsquerdo,
        titulodireito: tituloDireito,
        [Date.now()]: {
          id: Date.now(),
          url: imagemCarrosel,
        },
      });
    }catch(e){
      await setDoc(docTelaInicial, {
        tituloesquerdo: tituloEsquerdo,
        subtituloesquerdo:  subtituloEsquerdo,
        titulodireito: tituloDireito,
        [Date.now()]: {
          id: Date.now(),
          url: imagemCarrosel,
        },
      });
    }finally{  
      setTituloEsquerdo('');
      setTituloDireito('');
      setSubtituloEsquerdo('');
      setImagemCarrosel('');
    }
  };

  const handleSubmitTrilha = async () => {
    // event.preventDefault();

    if (
      nmrTrilha === "" ||
      nmrAula === "" ||
      linkpdf === "" ||
      titulo === "" ||
      resumoAula === "" ||
      videoUrl === ""
    ) {
      alert("Preencha todos os dados para adicionar ou alterar uma trila!");
    }

    const docCursos = doc(db, "trilhas", nmrTrilha);
    const docSnapshot = await getDoc(docCursos);

    try {
      if (docSnapshot.exists()) {
        await updateTrilha(
          docCursos,
          nmrAula,
          linkpdf,
          titulo,
          videoUrl,
          resumoAula
        );
      } else {
        await createTrilha(
          docCursos,
          nmrAula,
          linkpdf,
          titulo,
          videoUrl,
          resumoAula
        );
      }

      setNmrTrilha("");
      setNmrAula("");
      setLinkPdf("");
      setVideoUrl("");
      setTitulo("");
      setResumoAula("");
    } catch (erro) {
      console.error("Error updating/creating document: ", erro);
      alert(erro);
    }
  };

  return (
    <>
      <h1
        style={{
          marginTop: 20,
          marginBottom: 20,
          textAlign: "center",
          color: "purple",
          fontSize: 35,
        }}
      >
        Área do administrador
      </h1>

      <h2 style={{ marginTop: 50, textAlign: "center", color: "purple" }}>
        Trilhas/Aulas
      </h2>

      <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
        <Card sx={{ p: 2, mt: 2 }}>
          <CardContent>
            <Typography variant="h6">
              Insira abaixo o numero da trilha que será adicionada ou alterada:
            </Typography>
            <TextField
              label="Numero da trilha"
              variant="outlined"
              value={nmrTrilha}
              onChange={(e) => {
                if (
                  //impede que o usuario digite qualquer valor que seja dierente de numeros
                  e.target.value === "" ||
                  e.target.value[e.target.value.length - 1].includes("0") ||
                  e.target.value[e.target.value.length - 1].includes("1") ||
                  e.target.value[e.target.value.length - 1].includes("2") ||
                  e.target.value[e.target.value.length - 1].includes("3") ||
                  e.target.value[e.target.value.length - 1].includes("4") ||
                  e.target.value[e.target.value.length - 1].includes("5") ||
                  e.target.value[e.target.value.length - 1].includes("6") ||
                  e.target.value[e.target.value.length - 1].includes("7") ||
                  e.target.value[e.target.value.length - 1].includes("8") ||
                  e.target.value[e.target.value.length - 1].includes("9")
                ) {
                  setNmrTrilha(e.target.value);
                }
              }}
              fullWidth
              margin="normal"
            />
            <Typography variant="h6">
              Insira abaixo o número da aula que será adicionada ou alterada:
            </Typography>
            <TextField
              label="Insira o numero da aula"
              variant="outlined"
              value={nmrAula}
              onChange={(e) => {
                if (
                  //impede que o usuario digite qualquer valor que seja dierente de numeros
                  e.target.value === "" ||
                  e.target.value[e.target.value.length - 1].includes("0") ||
                  e.target.value[e.target.value.length - 1].includes("1") ||
                  e.target.value[e.target.value.length - 1].includes("2") ||
                  e.target.value[e.target.value.length - 1].includes("3") ||
                  e.target.value[e.target.value.length - 1].includes("4") ||
                  e.target.value[e.target.value.length - 1].includes("5") ||
                  e.target.value[e.target.value.length - 1].includes("6") ||
                  e.target.value[e.target.value.length - 1].includes("7") ||
                  e.target.value[e.target.value.length - 1].includes("8") ||
                  e.target.value[e.target.value.length - 1].includes("9")
                ) {
                  setNmrAula(e.target.value);
                }
              }}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Link do PDF"
              variant="outlined"
              value={linkpdf}
              onChange={(e) => setLinkPdf(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="URL do Vídeo"
              variant="outlined"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Título do vídeo"
              variant="outlined"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Insira o resumo da aula"
              variant="outlined"
              value={resumoAula}
              onChange={(e) => setResumoAula(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "purple" }}
              onClick={() => handleSubmitTrilha()}
            >
              Inserir
            </Button>
          </CardContent>
        </Card>
      </Box>

      <h2 style={{ marginTop: 50, textAlign: "center", color: "purple" }}>
        Tela de início
      </h2>

      <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
        <Card sx={{ p: 2, mt: 2 }}>
          <CardContent>
            <Typography variant="h6">
              Alterar o lado esquerdo:
            </Typography>
            <TextField
              label="Título"
              variant="outlined"
              value={tituloEsquerdo}
              onChange={(e) => setTituloEsquerdo(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Sub-Título"
              variant="outlined"
              value={subtituloEsquerdo}
              onChange={(e) => setSubtituloEsquerdo(e.target.value)}
              fullWidth
              style={{height:100}}
              margin="normal"
            />
            <Typography variant="h6">
              Altererar o lado direito:
            </Typography>
            <TextField
              label="Título"
              variant="outlined"
              value={tituloDireito}
              onChange={(e) => setTituloDireito(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Link da imagem que será adicionada"
              variant="outlined"
              value={imagemCarrosel}
              onChange={(e) => setImagemCarrosel(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              type="submit"
              style={{ backgroundColor: "purple" }}
              onClick={() => updateTelaInicial()}
            >
              Inserir
            </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Admin;
