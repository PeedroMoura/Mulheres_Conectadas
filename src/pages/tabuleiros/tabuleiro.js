import React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Tabuleiro1 } from "../../components/tabuleiro/components/matrizTabuleiro";
import dice1 from './../../assets/dice/dice1.png'
import dice2 from './../../assets/dice/dice2.png'
import dice3 from './../../assets/dice/dice3.png'
import dice4 from './../../assets/dice/dice4.png'
import dice5 from './../../assets/dice/dice5.png'
import dice6 from './../../assets/dice/dice6.png'
import diceroll from './../../assets/dice/diceroll.gif'
import Lottie from "lottie-react";

const TabuleiroTela = () => {
  const [diceValue, setDiceValue] = useState(null);
  const [position, setPosition] = useState(0);
  const [imgCard, setImgCard] = useState(null);
  const [buttonCard, setButtonCard] = useState(false);
  const [pinoMovendo, setPinoMovendo] = useState(false);

  const [confetti, setConfetti] = useState(false);

  const [rolling, setRolling] = useState(false);
  const [dice, setDice] = useState("dice6.png");

  // ====================================================================================================

  // const rollDice = () => {
  //   const newValue = Math.floor(Math.random() * 6) + 1;
  //   setPosition(position + newValue);
  //   setDiceValue(newValue);
  //   if(position + newValue >= 34){
  //     finalizar()
  //   }
  // };

  const rollTheDice = () => {
    if (rolling) return;

    setRolling(true);

    setDice("diceroll.gif");

    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      
      setPosition(position + newValue);

      setDiceValue(newValue);

      setDice(`dice${newValue}.png`);

      setRolling(false);
      
      if(position + newValue >= 34){
        finalizar()
      }

    }, 2500);
  }

  const finalizar = async()=>{
    await new Promise((resolve)=>setTimeout(resolve, 1500));
    setConfetti(true)
    await new Promise((resolve)=>setTimeout(resolve, 4000));
    setConfetti(false)
  }

  // ====================================================================================================

  return (
    <div
      style={{
        backgroundColor: "#990099",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10%",
      }}
    >
      {confetti == true &&
        <Lottie style={{position: "absolute", zIndex: 999, width: "80%"}} onAnimationEnd={()=>alert("final")}
         loop={false} animationData={require("../../assets/Animation - 1696450388299.json")}/>
      }
      
      {/* // ======================================================================================================       */}

      <div
        style={{
          backgroundColor: "#990099",
          width: "50vw",
          height: "100%",
          justifyContent: "flex-end",
          marginRight: "1%",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Tabuleiro1
          posicao={position}
          onPinoMovendo={(movendo) => setPinoMovendo(movendo)}
          trocarCard={(card) => {
            setImgCard(card.img);
            setButtonCard(card.button);
          }}
        />

      </div>

      {/* // ======================================================================================================  */}

      <div
        style={{
          backgroundColor: "#990099",
          display: "flex",
          flexDirection: "column",
          width: "15vw",
          height: "100%",
        }}
      >
        {/* // ======================================================================================================  */}

        <div
          style={{
            backgroundColor: "#cff8f3",
            height: "22.9%",
            marginTop: "12.4%",
            marginBottom: "1.9%",
            borderRadius: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!pinoMovendo && (
            <button
              onClick={rollTheDice}
              style={{
                backgroundColor: "#990099",
                color: "white",
                marginTop: "5%",
                height: "30%",
                width: "60%",
                border: "none",
                borderRadius: "25px",
                fontSize: "15px",
                fontWeight: "bold",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                transition: "background-color 0.3s, transform 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#660066")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#990099")}
            >
              Jogar Dados!
            </button>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2%",
            }}
          >

          {rolling ? ( // Se 'rolling' é verdadeiro
              <img style={{ maxWidth: '130%', marginBottom: 5 }} src={diceroll} alt="diceroll" />
            ) : ( // Caso contrário
              <>
                {diceValue === 1 && <img style={{ maxWidth: '60%', marginBottom: 5 }} src={dice1} alt="dice1" />}
                {diceValue === 2 && <img style={{ maxWidth: '60%', marginBottom: 5 }} src={dice2} alt="dice2" />}
                {diceValue === 3 && <img style={{ maxWidth: '60%', marginBottom: 5 }} src={dice3} alt="dice3" />}
                {diceValue === 4 && <img style={{ maxWidth: '60%', marginBottom: 5 }} src={dice4} alt="dice4" />}
                {diceValue === 5 && <img style={{ maxWidth: '60%', marginBottom: 5 }} src={dice5} alt="dice5" />}
                {diceValue === 6 && <img style={{ maxWidth: '60%', marginBottom: 5 }} src={dice6} alt="dice6" />}
              </>
            )}
          
            {/* <Typography variant="h6" gutterBottom>
              Seu resultado foi:
            </Typography>
            <Typography variant="h4">
              {diceValue !== null ? diceValue : "-"}
            </Typography> */}
            
          </div>
        </div>

        {/* // ======================================================================================================  */}

        <div
          style={{
            backgroundColor: "#cff8f3",
            height: "65.5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "6.3%",
            marginTop: "2%",
            borderRadius: 10,
          }}
        >
          {imgCard && (
            <img
              src={`/static/tabuleiro/cards1/${imgCard}`}
              alt={`/static/tabuleiro/cards1/${imgCard}`}
              style={{ height: "97%", width: "96%", marginTop: -2 }}
            ></img>
          )}

          {/* { buttonCard && <button>AAAAAAAAAAAAAAA</button>} */}
        </div>

        {/* // ======================================================================================================  */}
      </div>
    </div>
  );
};
export default TabuleiroTela;
