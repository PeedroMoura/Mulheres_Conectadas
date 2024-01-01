import React, { useState } from "react";
import './style.css'
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

import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import db from "../../config/firebase";

// icons
import ClassIcon from "@mui/icons-material/Class";

// components
import Paragraph from "../../components/Paragraph";
import { useEffect } from "react";
import styled from "styled-components";
import { getAuth } from "firebase/auth";
//import { set } from "admin-bro/types/src/utils/flat/set";

const Cursos = () => {
  const [expanded, setExpanded] = useState(false);
  const [infoAulas, setInfoAulas] = useState();
  const [rating, setRating] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [trilhaList, setTrilhaList] = useState([]);
  const [trilhaId, setTrilhaId] = useState('');
  const auth = getAuth();

  const clickLink = (link, trilhaID, aulaID) => {

    //Caso haja trilha e usuário conectado, salva vídeo como assistido
    console.log('Trilha ID', trilhaID);
    console.log('Aula ID', aulaID);
    console.log('Usuário ID', auth.currentUser);
    if (trilhaID && aulaID && auth.currentUser) {
      const docAssistiu = doc(db, "trilhas", trilhaID, "usuarios", auth.currentUser.uid);
      let dados = {}
      dados[aulaID] = true;
      setDoc(docAssistiu, dados, { merge: true });;
    }

    window.open(link);
  }

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    with: "100%",
    gap: "15px",
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "50px",
  };

  const detailsBox = {
    width: '70%',
  }

  const boxStyle = {
    width: '80%',
    height: '50%',
    backgroundColor: 'White',
    border: '1px solid #000',
    padding: '5px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '10px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'blue',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '10px',
    marginRight: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
  };
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
    console.log('AAAAA');
    try {
      const querySnapshot = await getDocs(collection(db, "trilhas"));
      
      const retorno = querySnapshot.docs.map(async (item) => {
        const dados = { ...item.data(), id: item.id };

        if (auth.currentUser) {
          const docAssistiu = doc(db, "trilhas", item.id, "usuarios", auth.currentUser.uid);
          const docAssistiuSnapshot = await getDoc(docAssistiu);
          dados['aulas_assistidas'] = docAssistiuSnapshot.data();
        }
        console.log(dados);
        return dados;
      });
      
      Promise.all(retorno).then((values) => {
        console.log(values);
        
        setTrilhaList(values);
      });
      
    } catch (erro) {
      alert(erro);
    }
  };

  // ======================================================================================================

  const handleSnackbarClose = () => {
    setShowSuccessMessage(false);
  };


  // ======================================================================================================

  const assistiuAula  = (trilha, numeroAula) => {
    
    if (auth.currentUser && trilha.aulas_assistidas) {
      return trilha.aulas_assistidas[numeroAula] === true;
    }

  }

  // ======================================================================================================

  return (
 <div style={containerStyle}>
      {trilhaList.map((trilha) => (
        <>
          <h1>Jornada {trilha.id}</h1>
          {trilha.aulas && Object.values(trilha.aulas).map((aula) => {
                    return <div className="hover-box" style={boxStyle}>
                      {/* <h1>{trilha}</h1> */}
                    <img style={{ width: '18%' }} src={aula.imgAula} alt={aula.imgAula} />
                    <div style={detailsBox}>
                      <h1>{aula.titulo} - {aula.nmrAula}</h1>
                      <p>{aula.resumoAula}</p>
                    </div>
                    <div style={{display:"flex", flexDirection:'column', gap:5}}>
                    
                    <button style={Object.assign({}, buttonStyle, assistiuAula(trilha, aula.nmrAula) ? {backgroundColor: 'lightgray'} : {})} onClick={() => clickLink(aula.videoUrl, trilha.id, aula.nmrAula)}>{assistiuAula(trilha, aula.nmrAula) ? 'Assistiu' : 'Assistir'}</button>
                    <button style={buttonStyle} onClick={() => clickLink(aula.linkpdf)} >Pdf</button>
                    <Typography variant="h6" sx={{fontSize:16}}>Avalie a aula</Typography>
                    <Rating
                      name="rating"
                      value={rating}
                      onChange={handleRatingChange}
                    />
                    </div>
                  </div>
          })}
        </>
      ))}
  </div>
    // <Grid container spacing={2}>
    //   <Grid item xs={12} sm={6} md={6}>
    //     {trilhaList.map((trilha) => (
    //       <List component="nav" aria-labelledby="nested-list-subheader">
    //         <ListItemButton onClick={handleExpand} style={{ display: "flex" }}>
    //           <ListItemIcon style={{ color: "purple" }}>
    //             <ClassIcon />
    //           </ListItemIcon >
    //           {"Jornada " + trilha.id}
    //         </ListItemButton>
    //         <Collapse in={expanded}>
    //           <List component="ul" disablePadding>
    //             {trilha.aulas && Object.values(trilha.aulas).map((aula) => (
    //             <>
    //               <ListItemButton
    //                 style={{ display: "flex" }}
    //                 onClick={() => handleAulaClick(aula)}
    //               >
    //                 <ListItemText primary={"Aula " + aula.nmrAula} />
    //               </ListItemButton>
    //                 <ListItemButton>
    //                 <Typography variant="h8">{aula.titulo}</Typography>
    //                 </ListItemButton>
    //                 <ListItemButton>
    //                   <Button onClick={()=>window.open(aula.linkpdf)} style={{backgroundColor:'purple', borderRadius:10, color:'whitesmoke'}}>PDF</Button>
    //                 </ListItemButton>
    //             </>
    //             ))}
    //           </List>
    //         </Collapse>
    //       </List>
    //     ))}
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={6}>
    //     <Grid container spacing={2}>
    //       <Grid item xs={12}>
    //         <div style={{ marginBottom: "40px", marginTop: "60px" }}>
    //           {infoAulas?.nmrAula && (
    //             <CardMedia
    //               component="iframe"
    //               width="100%"
    //               height="500"
    //               image={infoAulas?.videoUrl}
    //             />
    //           )}
    //         </div>
    //       </Grid>
    //       <Grid item xs={12}>
    //         {infoAulas?.nmrAula && (
    //           <div>
    //             <Typography variant="h5">Resumo da Aula {infoAulas.nmrAula}</Typography>
    //             <Paragraph
    //               text={infoAulas?.resumoAula}
    //             />
    //           </div>
    //         )}
    //       </Grid>
    //       <Grid item xs={12}>
    //         {infoAulas?.nmrAula && (
    //           <div>
    //             <Typography variant="h5">Avalie a aula</Typography>
    //             <Rating
    //               name="rating"
    //               value={rating}
    //               onChange={handleRatingChange}
    //             />
    //             <Button
    //               style={{ marginTop: "2" }}
    //               variant="outlined"
    //               color="secondary"
    //               onClick={handleSubmitRating}
    //             >
    //               Enviar Avaliação
    //             </Button>
    //             <Snackbar
    //               open={showSuccessMessage}
    //               autoHideDuration={3000}
    //               onClose={handleSnackbarClose}
    //               message="Avaliação enviada com sucesso!"
    //             />
    //           </div>
    //         )}
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
};

export default Cursos;
