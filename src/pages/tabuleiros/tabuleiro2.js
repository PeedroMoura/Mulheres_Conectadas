import React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Tabuleiro2 } from "../../components/tabuleiro/components/matrizTabuleiro2";
import dice1 from "./../../assets/dice/dice1.png";
import dice2 from "./../../assets/dice/dice2.png";
import dice3 from "./../../assets/dice/dice3.png";
import dice4 from "./../../assets/dice/dice4.png";
import dice5 from "./../../assets/dice/dice5.png";
import dice6 from "./../../assets/dice/dice6.png";
import diceroll from "./../../assets/dice/diceroll.gif";
import Lottie from "lottie-react";
import { Modal } from "@mui/material";
import tabuleiroModal from "./../../components/tabuleiro/components/tabuleiroModal";
import TrueFalseModal from "./../../components/tabuleiro/components/tabuleiroModal";
import RespostaModal from "../../components/tabuleiro/components/respostaModal";
import BannerModal from "../../components/tabuleiro/components/bannerModal";

const TabuleiroTela2 = () => {
  const [diceValue, setDiceValue] = useState(null);
  const [position, setPosition] = useState(0);
  const [imgCard, setImgCard] = useState(null);
  const [imgBanner, setImgBanner] = useState(undefined);
  const [errou, setErrou] = useState(false);
  const [pinoMovendo, setPinoMovendo] = useState(false);

  const [confetti, setConfetti] = useState(false);

  const [rolling, setRolling] = useState(false);
  const [dice, setDice] = useState("dice6.png");

  // ====================================================================================================
  //== MODAL PERGUNTA
  const [showModal, setShowModal] = useState(false);
  const [cardModal, setCardModal] = useState(null);
  //== MODAL RESULTADO
  const [showModalResult, setShowModalResult] = useState(false);
  const [isRespostaCorreta, setIsRespostaCorreta] = useState(false);

  // ================
  const abrirModal = (dadosCasaTabuleiro) => {
    if (
      !errou &&
      dadosCasaTabuleiro.card !== null &&
      dadosCasaTabuleiro.card.pergunta !== null
    ) {
      // Se tiver uma pergunta
      setCardModal(dadosCasaTabuleiro.card);
      setShowModal(true);
    } else if (errou == false && dadosCasaTabuleiro.banner !== undefined) {
      // Se não tiver uma pergunta, mas tiver um banner e não tiver errado na última jogada
      setImgBanner(dadosCasaTabuleiro.banner.url);
    } else if (dadosCasaTabuleiro.card !== null) {
      // Se não tiver nada
      setImgCard(dadosCasaTabuleiro.card.url);
    }
  };

  const rollTheDice = () => {
    if (rolling) return;

    setRolling(true);
    setErrou(false);

    setDice("diceroll.gif");

    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;

      setPosition(position + newValue);

      setDiceValue(newValue);

      setDice(`dice${newValue}.png`);

      setRolling(false);

      if (position + newValue >= 34) {
        finalizar();
      }
    }, 2500);
  };

  const finalizar = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setConfetti(true);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    setConfetti(false);
  };

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
      {confetti == true && (
        <Lottie
          style={{ position: "absolute", zIndex: 999, width: "80%" }}
          onAnimationEnd={() => alert("final")}
          loop={false}
          animationData={require("../../assets/Animation - 1696450388299.json")}
        />
      )}

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
        <Tabuleiro2
          posicao={position}
          onPinoMovendo={(movendo) => setPinoMovendo(movendo)}
          abrirModal={(dadosCasaTabuleiro) => abrirModal(dadosCasaTabuleiro)}
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
              <img
                style={{ maxWidth: "130%", marginBottom: 5 }}
                src={diceroll}
                alt="diceroll"
              />
            ) : (
              // Caso contrário
              <>
                {diceValue === 1 && (
                  <img
                    style={{ maxWidth: "60%", marginBottom: 5 }}
                    src={dice1}
                    alt="dice1"
                  />
                )}
                {diceValue === 2 && (
                  <img
                    style={{ maxWidth: "60%", marginBottom: 5 }}
                    src={dice2}
                    alt="dice2"
                  />
                )}
                {diceValue === 3 && (
                  <img
                    style={{ maxWidth: "60%", marginBottom: 5 }}
                    src={dice3}
                    alt="dice3"
                  />
                )}
                {diceValue === 4 && (
                  <img
                    style={{ maxWidth: "60%", marginBottom: 5 }}
                    src={dice4}
                    alt="dice4"
                  />
                )}
                {diceValue === 5 && (
                  <img
                    style={{ maxWidth: "60%", marginBottom: 5 }}
                    src={dice5}
                    alt="dice5"
                  />
                )}
                {diceValue === 6 && (
                  <img
                    style={{ maxWidth: "60%", marginBottom: 5 }}
                    src={dice6}
                    alt="dice6"
                  />
                )}
              </>
            )}

            {/* <Typography variant="h6" gutterBottom>
              Seu resultado foi:
            </Typography>
            <Typography variant="h4">
              {diceValue !== null ? diceValue : "-"}
            </Typography> */}

            <TrueFalseModal
              card={cardModal}
              showModal={showModal}
              onResponder={(resposta) => {
                if (resposta) {
                  setImgCard(cardModal.url);
                } else {
                  setImgCard(null);
                  setErrou(true);
                  setPosition(position - diceValue);
                  setImgCard("cardsJornadaConecta/card0.png");
                }
                setIsRespostaCorreta(resposta);
                setShowModal(false);
                setShowModalResult(true);
              }}
            />

            <RespostaModal
              card={cardModal}
              showModalResult={showModalResult}
              respostaCorreta={isRespostaCorreta}
              onClose={() => setShowModalResult(false)}
            />

            <BannerModal
              bannerURL={imgBanner !== undefined ? imgBanner : ""}
              showModalBanner={imgBanner !== undefined}
              onClose={() => setImgBanner(undefined)}
            />
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
              src={`/static/tabuleiro/${imgCard}`}
              alt={`/static/tabuleiros/${imgCard}`}
              style={{ height: "97%", width: "96%", marginTop: -2 }}
            ></img>
          )}
        </div>

        {/* // ======================================================================================================  */}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 50,
          backgroundColor: "#990099",
          borderRadius: "90%",
          width: "3%",
          height: "5%",
          padding: 10,
          cursor: "pointer",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => window.open("https://mulheres-ai.web.app/", "_blank")}
      >
        <Typography
          variant="h4"
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "50px",
          }}
        >
          ?
        </Typography>
      </div>
    </div>
  );
};
export default TabuleiroTela2;
