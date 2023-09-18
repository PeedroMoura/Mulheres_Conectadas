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
import Ferramentas from './pages/ferramentas';
import TabuleiroTela from './pages/tabuleiros/tabuleiro';
import TabuleiroTela2 from './pages/tabuleiros/tabuleiro2';
import TabuleiroTela3 from './pages/tabuleiros/tabuleiro3';
import SelecaoTabuleiro from './pages/selecaoTabuleiro';

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
          <Route path='/formulario' element={<Formulario />} />
          <Route path='/ferramentas' element={<Ferramentas />} />
          <Route path='/tabuleiro' element={<TabuleiroTela />} />
          <Route path='/tabuleiro2' element={<TabuleiroTela2 />} />
          <Route path='/tabuleiro3' element={<TabuleiroTela3 />} />
          <Route path='/selecaoTabuleiro' element={<SelecaoTabuleiro />} />
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