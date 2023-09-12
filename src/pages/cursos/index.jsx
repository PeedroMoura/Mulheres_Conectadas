import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  CardMedia,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Rating,
  Snackbar,
} from "@mui/material";

import {
  collection,
  getDocs,
} from "firebase/firestore";
import db from "../../config/firebase";

// icons
import ClassIcon from "@mui/icons-material/Class";

// components
import Paragraph from "../../components/Paragraph";
import { useEffect } from "react";

const Cursos = () => {
  const [expanded, setExpanded] = useState(false);
  const [infoAulas, setInfoAulas] = useState()
  const [rating, setRating] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [trilhaList, setTrilhaList] = useState([]);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleAulaClick = (infoAulas) => {
    setInfoAulas(infoAulas);
  };

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleSubmitRating = () => {
    setShowSuccessMessage(true);
  };

  // ======================================================================================================

  useEffect(() => {
    getFirestoreData();
  }, []);

  const getFirestoreData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "trilhas"));
      const retorno = [];
      querySnapshot.forEach((item) => {
        const dados = { ...item.data(), id: item.id };
        retorno.push(dados);
      });
      setTrilhaList(retorno);
    } catch (erro) {
      alert(erro);
    }
  };

    // ======================================================================================================

  const handleSnackbarClose = () => {
    setShowSuccessMessage(false);
  };
  
    // ======================================================================================================

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6}>
        {trilhaList.map((trilha) => (
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleExpand} style={{ display: "flex" }}>
              <ListItemIcon style={{ color: "purple" }}>
                <ClassIcon />
              </ListItemIcon>
              {"Trilha " + trilha.id}
            </ListItemButton>
            <Collapse in={expanded}>
              <List component="ul" disablePadding>
                {trilha.aulas && Object.values(trilha.aulas).map((aula) => (
                <>
                  <ListItemButton
                    style={{ display: "flex" }}
                    onClick={() => handleAulaClick(aula)}
                  >
                    <ListItemText primary={"Aula " + aula.nmrAula} />
                  </ListItemButton>
                    <ListItemButton>
                    <Typography variant="h8">{aula.titulo}</Typography>
                    </ListItemButton>
                    <ListItemButton>
                      <Button onClick={()=>window.open(aula.linkpdf)} style={{backgroundColor:'purple', borderRadius:10, color:'whitesmoke'}}>PDF</Button>
                    </ListItemButton>
                </>
                ))}
              </List>
            </Collapse>
          </List>
        ))}
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div style={{ marginBottom: "40px", marginTop: "60px" }}>
              {infoAulas?.nmrAula && (
                <CardMedia
                  component="iframe"
                  width="100%"
                  height="500"
                  image={infoAulas?.videoUrl}
                />
              )}
            </div>
          </Grid>
          <Grid item xs={12}>
            {infoAulas?.nmrAula && (
              <div>
                <Typography variant="h5">Resumo da Aula {infoAulas.nmrAula}</Typography>
                <Paragraph
                  text={infoAulas?.resumoAula}
                />
              </div>
            )}
          </Grid>
          <Grid item xs={12}>
            {infoAulas?.nmrAula && (
              <div>
                <Typography variant="h5">Avalie a aula</Typography>
                <Rating
                  name="rating"
                  value={rating}
                  onChange={handleRatingChange}
                />
                <Button
                  style={{ marginTop: "2" }}
                  variant="outlined"
                  color="secondary"
                  onClick={handleSubmitRating}
                >
                  Enviar Avaliação
                </Button>
                <Snackbar
                  open={showSuccessMessage}
                  autoHideDuration={3000}
                  onClose={handleSnackbarClose}
                  message="Avaliação enviada com sucesso!"
                />
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cursos;
