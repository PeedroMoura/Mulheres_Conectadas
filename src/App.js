import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Quiz from './pages/quiz';
import Progresso from './pages/progresso';
import Forgot from './pages/forgot';
import Admin from './pages/Admin';
import Cadastro from './pages/cadastro';
import Mensagem from './pages/mensagem';
import Sobre from './pages/sobre';
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import { ButtonColorProvider } from './components/buttoncolorcontext';
function App() {
  return (
    <>
       
      <BrowserRouter basename={process.env.PUBLIC_URL} > 
      <ButtonColorProvider>
        <Navbar />
        <Routes>
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/progresso' element={<Progresso />} />
          <Route path='/adminpanel' element={<Admin />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/mensagem' element={<Mensagem />} />
          <Route path='/sobre' element={<Sobre />} />
          
          
        </Routes>
        </ButtonColorProvider>
        
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;