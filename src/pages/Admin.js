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
  setDoc,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import db from "../config/firebase";

const Admin = () => {
  const [nmrTrilha, setNmrTrilha] = useState("");
  const [linkpdf, setLinkPdf] = useState("");
  const [nmrAula, setNmrAula] = useState("");
  const [titulo, setTitulo] = useState("");
  const [resumoAula, setResumoAula] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  //Criando uma trilha e salvando um objeto "aulas" com os valores inseridos
  const createTrilha = async (docCursos, nmrAula, linkpdf, titulo, videoUrl, resumoAula) => {
    await setDoc(docCursos, {
      id: nmrTrilha,
      aulas: {
        [nmrAula]: {
          linkpdf,
          nmrAula: nmrAula,
          titulo,
          videoUrl,
          resumoAula,
        }
      }
    });
  }
  //Fazendo upload e adicionando novas trilhas/aulas
  const updateTrilha = async (docCursos, nmrAula, linkpdf, titulo, videoUrl, resumoAula) => {
    await updateDoc(docCursos, {
      [`aulas.${nmrAula}`]: {
        linkpdf,
        nmrAula: nmrAula,
        titulo,
        videoUrl,
        resumoAula,
      }
    });
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const docCursos = doc(db, "trilhas", nmrTrilha);
    const docSnapshot = await getDoc(docCursos);
    
    try{
      if (docSnapshot.exists()) {
        await updateTrilha(docCursos, nmrAula, linkpdf, titulo, videoUrl, resumoAula);
      } else {
        await createTrilha(docCursos, nmrAula, linkpdf, titulo, videoUrl, resumoAula);
      }
      
      setNmrTrilha('');
      setNmrAula('');
      setLinkPdf('');
      setVideoUrl('');
      setTitulo('');
      setResumoAula('');
  
    }catch(erro){
      console.error("Error updating/creating document: ", erro);
      alert(erro);
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
            <Typography variant="h6">Insira abaixo o numero da trilha que será adicionada ou alterada:</Typography>
            <TextField
                  label="Numero da trilha"
                  variant="outlined"
                  value={nmrTrilha}
                  onChange={(e) => {
                    if(
                        //impede que o usuario digite qualquer valor que seja dierente de numeros
                        e.target.value === "" ||
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
                        setNmrTrilha(e.target.value)
                      }
                    }
                  }
                  fullWidth
                  margin="normal"
                />
              <Typography variant="h6">Insira abaixo o número da aula que será adicionada ou alterada:</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Insira o numero da aula"
                  variant="outlined"
                  value={nmrAula}
                  onChange={(e) => {
                    if(
                        //impede que o usuario digite qualquer valor que seja dierente de numeros
                        e.target.value === "" ||
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
      </>
    );
  };


export default Admin;
