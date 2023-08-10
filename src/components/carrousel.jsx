import React, { useEffect, useState } from "react";
import { Typography, Box, Stack } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import primeira from "../assets/primeira.png";
import segunda from "../assets/segunda.png";
import terceira from "../assets/terceira.png";
import ultima from "../assets/ultima.png";
import { collection, getDocs } from "firebase/firestore";
import db from "../config/firebase";

const Carroussel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [texts, setTexts] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    getFirestoreData();
  }, []);

  const getFirestoreData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "telainicial"));
      const retorno = [];
      querySnapshot.forEach((item) => {
        const dados = { ...item.data(), id: item.id };
        
        retorno.push(dados);
      });
      // alert(retorno);
      setImages(Object.values(retorno[0].imgs) || []);
      setTexts(retorno[0]);
    } catch (erro) {
      alert(erro);
    }
  };

  const imageData = [
    {
      alt: "image1",
      src: primeira,
    },
    {
      alt: "image2",
      src: segunda,
    },
    {
      alt: "image3",
      src: terceira,
    },
    {
      alt: "image4",
      src: ultima,
    },
  ];

  // const renderSlides = imgList.map((item) => (
  //   <div key={item.id}>
  //     <img src={item.url} alt={item.url} />
  //   </div>
  // ));

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
        display: { xs: "flex" },
      }}
    >
      {texts !== undefined && 
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
            fontWeight: "700",
            textAlign: "center",
            color: "white",
            marginTop: 3,
          }}
        >
          {texts.titulodireito}
        </Typography>
      </Box>      
      }

      <Box sx={{ maxWidth: 700, width: "100%" }}>
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
           {images.map((img, index) => (
              <div key={img.id}>
                <img src={img.url} alt={img.url} />
                {/* <p className="legend">Foto {index+1}</p> */}
              </div>
           ))
          }


        </Carousel>
      </Box>
    </Stack>
  );
};

export default Carroussel;
