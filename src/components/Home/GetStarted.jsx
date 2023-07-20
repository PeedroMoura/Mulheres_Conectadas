import React, { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { Box, Typography } from '@mui/material';

const GetStarted = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyAC_T-k6r-1LQCqroyaSXAy2bMwYL_LxQI',
      authDomain: 'mulheres-conectadas-4da2a.firebaseapp.com',
      projectId: 'mulheres-conectadas-4da2a',
      // ...
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const messagesCollection = collection(db, 'getstarted');

    const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setData(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Box>
      {data.map((item) => (
        <Box key={item.id} sx={{ mt: 4 }}>
          <Typography variant="h2" sx={{ color: 'purple', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.titulo}</Typography>
          <Typography variant="body1" sx={{ color: 'purple', fontSize: '1rem', marginBottom: '1.5rem' }}>{item.descricao}</Typography>
          <Box sx={{ marginBottom: '2rem' }}>
            <img src={item.img} alt={item.titulo} style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default GetStarted;
