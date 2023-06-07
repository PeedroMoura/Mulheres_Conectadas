import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { Box, Grid, styled, Typography } from '@mui/material';
import Title from './Title';
import AdminPanel from './AdminPanel';

const GetStarted = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'cursos'));
        const coursesData = [];
        querySnapshot.forEach((doc) => {
          coursesData.push({ id: doc.id, ...doc.data() });
        });
        setCourses(coursesData);
      } catch (error) {
        console.error('Erro ao buscar os cursos: ', error);
      }
    };

    fetchCourses();
  }, []);

  const CustomGridItem = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  });

  const CustomTypography = styled(Typography)({
    fontSize: '1.1rem',
    textAlign: 'start',
    lineHeight: '1.5',
    color: '#515151',
    marginTop: '1.5rem',
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
    >
      {courses.map((course) => (
        <CustomGridItem item xs={12} sm={8} md={6} component="section" key={course.id}>
          <Box component="article" sx={{ px: 4 }}>
            <Title text={course.title} textAlign="start" />
            <CustomTypography>{course.description}</CustomTypography>
          </Box>
        </CustomGridItem>
      ))}
    </Grid>
  );
};

export default GetStarted;


