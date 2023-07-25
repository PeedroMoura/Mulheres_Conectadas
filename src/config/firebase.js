import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Configurar o Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyAC_T-k6r-1LQCqroyaSXAy2bMwYL_LxQI',
    authDomain: 'mulheres-conectadas-4da2a.firebaseapp.com',
    projectId: 'mulheres-conectadas-4da2a',
    // ...
  };
  // Inicializar o app do Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;