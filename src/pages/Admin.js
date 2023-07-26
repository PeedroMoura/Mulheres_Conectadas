import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import {
  getFirestore,
  setDoc,
  setIndexConfiguration,
  doc,
  updateDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import db from "../config/firebase";

import inputAdmPanel from "../components/AdminPanel/inputAdmPanel";
import Tst from "../components/AdminPanel/AdminPanel";
import Teste from "../components/AdminPanel/Adminpanelp";
import Teste2 from "../components/AdminPanel/getintouchadmin";
import ReactDOM from "react-dom";
import { AlignHorizontalCenter } from "@mui/icons-material";

const Admin = () => {
  const [nmrTrilha, setNmrTrilha] = useState("");
  const [linkpdf, setLinkPdf] = useState("");
  const [nmrAula, setNmrAula] = useState("");
  const [titulo, setTitulo] = useState("");
  const [resumoAula, setResumoAula] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const docCursos = doc( db, "trilhas", "trilha"+nmrTrilha);
      //Caso a trilha ja esteja cadastrada uma aula será adicionada
      try{
        await updateDoc(docCursos, {
          id: "trilha"+nmrTrilha,
          [nmrAula]:{
          linkpdf,
          nmrAula: "aula"+nmrAula,
          titulo,
          videoUrl,
          resumoAula,
        }
        });
      //Se a trilha não estiver cadastrada ela será criada
      }catch(e){
        await setDoc(docCursos, {
          id: "trilha"+nmrTrilha,
          [nmrAula]:{
          linkpdf,
          nmrAula: "aula"+nmrAula,
          titulo,
          videoUrl,
          resumoAula,
        }
        });
      }
      
      setNmrTrilha('');
      setNmrAula('');
      setLinkPdf('');
      setVideoUrl('');
      setTitulo('');
      setResumoAula('');

    }catch(erro){
      alert(erro)
    }
  }

    return (
      <>
        <h2 style={{ marginTop: "20px", textAlign: "center", color: "purple" }}>
          Área do administrador
        </h2>

        <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
          <Card sx={{ p: 2, mt: 2 }}>
            <CardContent>
            <Typography>Adicionar o numero da trilha</Typography>
            <TextField
                  label="Numero da trilha"
                  variant="outlined"
                  value={nmrTrilha}
                  onChange={(e) => setNmrTrilha(e.target.value)}
                  fullWidth
                  margin="normal"
                />
              <Typography>Adicionar numero da aula</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Insira o numero da aula"
                  variant="outlined"
                  value={nmrAula}
                  onChange={(e) => {
                    if(
                        //impede que o usuario digite qualquer valor que seja dierente de numeros
                        e.target.value == "" ||
                        e.target.value[e.target.value.length-1].includes("0") ||
                        e.target.value[e.target.value.length-1].includes("1") || 
                        e.target.value[e.target.value.length-1].includes("2") ||
                        e.target.value[e.target.value.length-1].includes("3") ||
                        e.target.value[e.target.value.length-1].includes("4") ||
                        e.target.value[e.target.value.length-1].includes("5") ||
                        e.target.value[e.target.value.length-1].includes("6") || 
                        e.target.value[e.target.value.length-1].includes("7") ||
                        e.target.value[e.target.value.length-1].includes("8") ||
                        e.target.value[e.target.value.length-1].includes("9")
                        
                      ){
                        setNmrAula(e.target.value)
                      }
                    }
                  }
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
                  type="submit"
                  style={{ backgroundColor: "purple" }}
                >
                  Inserir
                </Button>
              </form>
            </CardContent>
          </Card>
        </Box>

        {/* <Tst />
    <Teste />
    <Teste2 />
    <Teste3 />
    <Teste4 /> */}
      </>
    );
  };


export default Admin;
