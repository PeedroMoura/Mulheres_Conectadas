import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import Home from './pages/Home';
import Quiz from './pages/quiz';
import Admin from './pages/Admin';

//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import { ButtonColorProvider } from './components/buttoncolorcontext';
import Cadastro from './pages/cadastro';
import Cursos from './pages/cursos'
import Contact from './pages/contact'
import Mensagem from './pages/mensagem'
import Progresso from './pages/progresso'
import Forgot from './pages/forgot'
import Selos from './pages/selos';
import Formulario from './pages/Formulario';

function App() {
  
  return (
    <> 
      {/* <BrowserRouter basename={"process.env.PUBLIC_URL"} >  */}
      <BrowserRouter basename={""} > 
      <ButtonColorProvider>
        <Navbar/>
        <Routes>
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
          <Route path='/cursos' element={<Cursos />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/progresso' element={<Progresso />} />
          <Route path='/adminpanel' element={<Admin />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/mensagem' element={<Mensagem />} />
          <Route path='/selos' element={<Selos />} />
          <Route path='/Formulario' element={<Formulario />} />
          {/* <Route path='/sobre' element={<Sobre />} /> */}
          {/* <Route path='/lgpd' element={<Lgpd />} /> */}
        </Routes>
        </ButtonColorProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;