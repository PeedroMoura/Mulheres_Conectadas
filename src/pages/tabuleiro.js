import React from "react";

const Tabuleiro = () => {
    return (
      <div style={{ backgroundColor: '#990099', maxWidth: '100%', height: 800, display: 'flex', padding: 30, marginBottom:0 }}>
  
        <div style={{ backgroundColor: '#990099', flex: 2.5, padding: 50, display: 'flex' }}>
          <div style={{ backgroundColor: 'black', flex: 8}}>
  
          </div>
        </div>
  
        <div style={{ backgroundColor: '#990099', flex: 1, display:'flex', flexDirection:'column', padding: 20 }}>
  
            <div style={{backgroundColor: 'red', flex:1, marginBottom:10}}>

            </div>

            <div style={{backgroundColor: 'greenyellow', flex: 3}}>

            </div>

        </div>
  
      </div>
    );
  }
export default Tabuleiro;