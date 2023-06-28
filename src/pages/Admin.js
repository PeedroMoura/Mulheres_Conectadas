import React from 'react'
import Tst from '../components/AdminPanel';
import Teste from '../components/Adminpanelp';
import Teste2 from '../components/getintouchadmin';
import Teste3  from '../components/adicionaatrilha';
import Teste4 from '../components/adicionaaula';
import ReactDOM from 'react-dom';
import { AlignHorizontalCenter } from '@mui/icons-material';



const Admin = () => {
  return (
    <>
    <h2 style={{marginTop:'20px', textAlign:'center', color:'purple'}}>Área do administrador</h2>
    <Tst />
    <Teste />
    <Teste2 />
    <Teste3 />
    <Teste4 />
    
    
    </>

  )
}

export default Admin;