import React from "react";

const Tabuleiro = () => {
    return (
      <div style={{ backgroundColor: '#990099', maxWidth: '100%', display: 'flex', padding: 30, marginBottom:0 }}>
  
        <div style={{ backgroundColor: '#990099', flex: 2.5, padding: 20, display: 'flex' }}>
         <img src="https://i.imgur.com/41V4ILb.png" alt="https://i.imgur.com/41V4ILb.png" style={{width:"100%", height:"70vh", borderRadius:10}}></img>
        </div>
  
        <div style={{ backgroundColor: '#990099', flex: 1, display:'flex', flexDirection:'column', padding: 20, height:"70vh" }}>
  
            <div style={{backgroundColor: '#CCFFFF', flex:1, marginBottom:10, borderRadius:10}}>

            </div>

            <div style={{backgroundColor: '#CCFFFF', flex: 3,borderRadius:10}}>

            </div>

        </div>
  
      </div>
    );
  }
export default Tabuleiro;