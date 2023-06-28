import React from 'react'
import ReactDOM from 'react-dom';
import Posts from '../components/posts'
import List from '../components/listarpost'


const adminpanel = () => {
  return (
    <>
    <h2 style={{marginTop:'20px'}}>Área do administrador</h2>
    <Posts />
    <List />
    
    
    </>

  )
}

export default adminpanel;