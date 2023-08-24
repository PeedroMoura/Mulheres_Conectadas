
import { Title } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

const styles = {
    caixaFerramenta: {
        maxWidth:"100%",
        height:500,
        flex:5,
        backgroundColor:"whitesmoke",
        margin: 10
    }
};

const Ferramentas = () => {
    return (
      <div style={{ backgroundColor: '#990099', maxWidth: '100%', height: 800, padding: 30, marginBottom:100, display:'flex', flexDirection:'column'}}>

      <div style={{padding: 50}}>
        <Typography variant="title" sx={{fontSize:70, color:"whitesmoke"}}>Ferramentas</Typography>
        <div style={{backgroundColor:"whitesmoke", height:1.5, width:345}}></div>
      </div>

        <div style={{flex:1, backgroundColor:"black", alignItems:'center', display: "flex"}}>
            {/* <div style={{maxWidth:"100%", height:500, flex:5, backgroundColor:"whitesmoke"}}> */}
             <div style={styles.caixaFerramenta}>
                <img src="http://lorempixel.com.br/500/400/?1" alt="http://lorempixel.com.br/500/400/?1"></img>
                <Typography variant="h2" sx={{fontSize:30, color:"black"}}>Quiz</Typography>
             </div>
             <div style={styles.caixaFerramenta}></div>
             <div style={styles.caixaFerramenta}></div>
            {/* </div> */}
        </div>
    
      </div>
    );
  }
export default Ferramentas;