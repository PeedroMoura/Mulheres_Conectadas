import React from "react";
import imagemCarta from "./../assets/Frame 790.png"

const Tabuleiro = () => {
    return (
      // <div style={{display: "flex", flexDirection: "row", width: "100%", height: "80vh"}}>
      //   <div style={{width: "80%", height: "100%", justifyContent: "center", alignItems: "center", display: "flex"}}>
      //     <img src="https://i.imgur.com/41V4ILb.png" alt="Tabuleiro" style={{ height: "90%", borderRadius: 10}} />
      //   </div>

      //   <div style={{display: "flex", flexDirection: "column", width: "30%", height: "100%"}}>
      //     <div style={{backgroundColor: "green", height: "40%"}}>

      //     </div>

      //     <div style={{backgroundColor: "yellow", height: "60%"}}>

      //     </div>
      //   </div>
      // </div>
      <div style={{ backgroundColor: '#990099', display: "flex", flexDirection: "row", width: "100%", height: "80vh", justifyContent: "center", alignItems: "center" }}>
  
        <div style={{ backgroundColor: '#990099', width: "50vw", height: "100%", justifyContent: "flex-end", marginRight: "1%", alignItems: "center", display: "flex" }}>
         <img src="https://i.imgur.com/41V4ILb.png" alt="https://i.imgur.com/41V4ILb.png" style={{ height: "90%", borderRadius: 10}}></img>
        </div>
  
        <div style={{ backgroundColor: '#990099', display: "flex", flexDirection: "column", width: "15vw", height: "100%" }}>
  
            <div style={{backgroundColor: '#CCFFFF', height: "22.9%", marginTop: "12.4%", marginBottom: "1.9%", borderRadius: 10}}>

            </div>

            <div style={{backgroundColor: '#CCFFFF', height: "65.5%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "6.3%", marginTop: "2%", borderRadius: 10}}>
                <img src={imagemCarta} alt={imagemCarta} style={{height:"97%", width: "96%", marginTop: -2}}></img>
            </div>

        </div>
  
      </div>
    );
  }
export default Tabuleiro;