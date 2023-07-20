import React, { useState } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Title from '../Title';
import Paragraph from '../Paragraph';
import im1 from '../../assets/imagem1.PNG';
import im2 from '../../assets/imagem2.PNG';
import im3 from '../../assets/imagem3.PNG';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageData = [
    {
      alt: 'image1',
      src: im3,
    },
    {
      alt: 'image2',
      src: im2,
    },
    {
      alt: 'image3',
      src: im1,
    },
  ];

  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.src} alt={image.alt} />
    </div>
  ));

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 8,
        px: 2,
        display: { xs: 'flex' },
      }}
    >
      <Box
        component="section"
        sx={{
          paddingBottom: 3,
        }}
      >
        
        <Typography
          variant="h4"
          component="h3"
          sx={{
            fontWeight: '700',
            textAlign: 'center',
            color: '#ab4f9d',
            marginTop: 3,
          }}
        >
          Conheça as nossas soluções!
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 700, width: '100%' }}>
        <Carousel
          centerSlidePercentage={0}
          thumbWidth={200}
          dynamicHeight={false}
          centerMode={false}
          showArrows={false}
          autoPlay={false}
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
        >
          {renderSlides}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default Gallery;
