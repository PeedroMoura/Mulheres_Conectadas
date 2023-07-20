import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, onSnapshot } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { Typography } from '@mui/material';

const ContentText = () => {
  const [sobreData, setSobreData] = useState([]);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyAC_T-k6r-1LQCqroyaSXAy2bMwYL_LxQI',
      authDomain: 'mulheres-conectadas-4da2a.firebaseapp.com',
      projectId: 'mulheres-conectadas-4da2a',
      // ...
    };

    const app = firebase.initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const messagesCollection = collection(db, 'sobre');
    const q = query(messagesCollection);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setSobreData(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {sobreData.map((item) => (
        <div key={item.id} style={{ textAlign: 'center', color: 'purple', marginBottom:'40px' }}>
          <Typography variant="h6">{item.titulo}</Typography>
          <Typography>{item.sobre}</Typography>
        </div>
      ))}
    </div>
  );
};

export default ContentText;


