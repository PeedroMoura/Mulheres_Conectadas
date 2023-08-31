import React from "react";
import imagemCarta from "./../assets/Frame 790.png";
import { Typography } from "@mui/material";
import { useState } from "react";

const Tabuleiro = () => {

  const [diceValue, setDiceValue] = useState(null);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
  };

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
        marginBottom:'10%'
      }}
    >
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
        <img
          src="https://i.imgur.com/41V4ILb.png"
          alt="https://i.imgur.com/41V4ILb.png"
          style={{ height: "90%", borderRadius: 10 }}
        ></img>
      </div>

      <div
        style={{
          backgroundColor: "#990099",
          display: "flex",
          flexDirection: "column",
          width: "15vw",
          height: "100%",
        }}
      >
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
          <button
            onClick={rollDice}
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Seu resultado foi:
            </Typography>
            <Typography variant="h4">{diceValue !== null ? diceValue : "-"}</Typography>
          </div>
        </div>

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
          <img
            src={imagemCarta}
            alt={imagemCarta}
            style={{ height: "97%", width: "96%", marginTop: -2 }}
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Tabuleiro;
