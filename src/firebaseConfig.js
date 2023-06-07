
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC_T-k6r-1LQCqroyaSXAy2bMwYL_LxQI",
  authDomain: "mulheres-conectadas-4da2a.firebaseapp.com",
  projectId: "mulheres-conectadas-4da2a",
  storageBucket: "mulheres-conectadas-4da2a.appspot.com",
  messagingSenderId: "141842665376",
  appId: "1:141842665376:web:582686da1e28303f161ec5",
  measurementId: "G-ZGCDZPRQY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
