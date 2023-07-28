import React, { useState } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import primeira from '../assets/primeira.png';
import segunda from '../assets/segunda.png';
import terceira from '../assets/terceira.png';
import ultima from '../assets/ultima.png';

const Carroussel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageData = [
    {
      alt: 'image1',
      src: primeira,
    },
    {
      alt: 'image2',
      src: segunda,
    },
    {
      alt: 'image3',
      src: terceira,
    },
    {
        alt: 'image4',
        src: ultima,
    }
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
            color: 'white',
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

export default Carroussel;