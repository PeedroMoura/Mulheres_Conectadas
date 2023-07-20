import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Class,
  List,
  ListItemButton,
  Box,
  ListItemIcon,
  ListItemText,
  Collapse,
  Rating,
  Snackbar,
} from "@mui/material";
// icons
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import ClassIcon from '@mui/icons-material/Class';
import DownloadIcon from '@mui/icons-material/Download';

// components
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';


const About = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [selectedAula, setSelectedAula] = useState(null);
  const [rating, setRating] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleExpand2 = () => {
    setExpanded2(!expanded2);
  };

  const handleAulaClick = (aula) => {
    setSelectedAula(aula);
  };

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleSubmitRating = () => {
    // Logic to submit the rating
    // Replace this logic with your actual implementation

    // Display success message
    setShowSuccessMessage(true);
  };

  const getVideoUrl = (aula) => {
    // Logic to return the video URL based on the selected lesson
    // Replace this logic with your actual implementation
    if (aula === 'Aula 1') {
      return 'https://www.youtube.com/embed/sXPYZeDEutY';
    } else if (aula === 'Aula 2') {
      return 'https://www.youtube.com/embed/zgn6X3XWsEg';
    } else if (aula === 'Aula 3') {
      return 'https://www.youtube.com/embed/oQtWrbmwTTc';
    } else if (aula === 'Aula 4') {
      return 'https://www.youtube.com/embed/ySDH94bExv4';
    } else {
      return '';
    }
  };

  const handleSnackbarClose = () => {
    setShowSuccessMessage(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6}>
        <List component="nav" aria-labelledby="nested-list-subheader">
          <ListItemButton onClick={handleExpand} style={{ display: 'flex' }}>
            <ListItemIcon style={{ color: 'purple' }}>
              <ClassIcon />
            </ListItemIcon>
            Trilha 1
          </ListItemButton>
          <ListItemButton><Link to="/progresso" target="_blank" rel="noopener"> Meu progresso</Link></ListItemButton>
          <Collapse in={expanded}>
            <List component="ul" disablePadding>

              <ListItemButton style={{ display: 'flex' }} onClick={() => handleAulaClick('Aula 1')}>
                <ListItemText primary="Aula 1" />
              </ListItemButton>

              <ListItemButton><Typography variant="h8">Noções comportamentais</Typography></ListItemButton>
              <ListItemButton style={{ display: 'flex' }}>
                <Box>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Download <DownloadIcon />
                  </IconButton>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Pdf da aula <ClassIcon />
                  </IconButton>

                </Box>
              </ListItemButton>
              <ListItemButton style={{ display: 'flex' }} onClick={() => handleAulaClick('Aula 2')}>
                <ListItemText primary="Aula 2" />
              </ListItemButton>
              <ListItemButton><Typography variant="h8">Noções comportamentais</Typography></ListItemButton>
              <ListItemButton style={{ display: 'flex' }}>
                <Box>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Download <DownloadIcon />
                  </IconButton>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Pdf da aula <ClassIcon />
                  </IconButton>

                </Box>
              </ListItemButton>
              <ListItemButton style={{ display: 'flex' }} onClick={() => handleAulaClick('Aula 3')}>
                <ListItemText primary="Aula 3" />
              </ListItemButton>
              <ListItemButton><Typography variant="h8">Noções comportamentais</Typography></ListItemButton>
              <ListItemButton style={{ display: 'flex' }}>
                <Box>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Download <DownloadIcon />
                  </IconButton>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Pdf da aula <ClassIcon />
                  </IconButton>

                </Box>
              </ListItemButton>
              <ListItemButton style={{ display: 'flex' }} onClick={() => handleAulaClick('Aula 4')}>
                <ListItemText primary="Aula 4" />
              </ListItemButton>
              <ListItemButton><Typography variant="h8">Noções comportamentais</Typography></ListItemButton>
              <ListItemButton style={{ display: 'flex' }}>

                <Box>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Download <DownloadIcon />
                  </IconButton>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Pdf da aula <ClassIcon />
                  </IconButton>

                </Box>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <List component="nav" aria-labelledby="nested-list-subheader">
          <ListItemButton onClick={handleExpand2} style={{ display: 'flex' }}>
            <ListItemIcon style={{ color: 'purple' }}>
              <ClassIcon />
            </ListItemIcon>
            Trilha 2
          </ListItemButton>
          <ListItemButton>
            <Link href="https://www.youtube.com/watch?v=9bZkp7q19f0" target="_blank" rel="noopener"> Meu progresso</Link>
          </ListItemButton>
          <Collapse in={expanded2}>
            <List component="ul" disablePadding>
              <ListItemButton style={{ display: 'flex' }} onClick={() => handleAulaClick('Aula 1')}>
                <ListItemText primary="Aula 1" />
              </ListItemButton>
              <ListItemButton><Typography variant="h8">Noções comportamentais</Typography></ListItemButton>
              <ListItemButton style={{ display: 'flex' }}>
                <Box>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Download <DownloadIcon />
                  </IconButton>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Pdf da aula <ClassIcon />
                  </IconButton>

                </Box>
              </ListItemButton>
              <ListItemButton style={{ display: 'flex' }} onClick={() => handleAulaClick('Aula 2')}>
                <ListItemText primary="Aula 2" />
              </ListItemButton>
              <ListItemButton><Typography variant="h8">Noções comportamentais</Typography></ListItemButton>
              <ListItemButton style={{ display: 'flex' }}>
                <Box>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Download <DownloadIcon />
                  </IconButton>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Pdf da aula <ClassIcon />
                  </IconButton>

                </Box>
              </ListItemButton>
              <ListItemButton style={{ display: 'flex' }} onClick={() => handleAulaClick('Aula 3')}>
                <ListItemText primary="Aula 3" />
              </ListItemButton>
              <ListItemButton><Typography variant="h8">Noções comportamentais</Typography></ListItemButton>
              <ListItemButton style={{ display: 'flex' }}>
                <Box>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Download <DownloadIcon />
                  </IconButton>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Pdf da aula <ClassIcon />
                  </IconButton>

                </Box>
              </ListItemButton>
              <ListItemButton style={{ display: 'flex' }} onClick={() => handleAulaClick('Aula 4')}>
                <ListItemText primary="Aula 4" />
              </ListItemButton>
              <ListItemButton><Typography variant="h8">Noções comportamentais</Typography></ListItemButton>
              <ListItemButton style={{ display: 'flex' }}>

                <Box>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Download <DownloadIcon />
                  </IconButton>
                  <IconButton style={{ color: 'purple', fontSize: '15px' }}>
                    Pdf da aula <ClassIcon />
                  </IconButton>

                </Box>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div style={{ marginBottom: '40px', marginTop: '60px' }}>
              {selectedAula && (
                <CardMedia
                  component="iframe"
                  width="100%"
                  height="500"
                  image={getVideoUrl(selectedAula)}
                />
              )}
            </div>
          </Grid>
          <Grid item xs={12}>
            {selectedAula && (
              <div>
                <Typography variant="h5">Resumo da {selectedAula}</Typography>
                <Paragraph text={`"Em um tranquilo jardim de primavera, onde as flores desabrocham com graciosidade, e o perfume doce preenche o ar, dois pássaros dançam no céu azul claro. Suas asas coloridas brilham sob o sol radiante, enquanto eles entoam uma melodia suave. No chão, as formigas trabalham diligentemente para construir seu formigueiro, indo e vindo com minúsculas migalhas de comida. O cenário é pacífico e harmonioso, uma sinfonia da natureza."`} />
              </div>
            )}
          </Grid>
          <Grid item xs={12}>
            {selectedAula && (
              <div>
                <Typography variant="h5">Avalie a aula</Typography>
                <Rating
                  name="rating"
                  value={rating}
                  onChange={handleRatingChange}
                />
                <Button style={{ marginTop: '2'}}variant="outlined" color="secondary" onClick={handleSubmitRating}>
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

export default About;
