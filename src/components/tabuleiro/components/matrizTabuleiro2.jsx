import { useEffect, useState } from "react";

export function Tabuleiro2(props) {
  const [pinoTop, setPinoTop] = useState(0);
  const [pinoLeft, setPinoLeft] = useState(0);
  const [posicao, setPosicao] = useState(0);
  const [movendo, setMovendo] = useState(false);

  //============================ ========================================

  const card = shuffleArray([
    {
      url: "cardsJornadaConecta/cardJornadaConecta1.png",
      pergunta:
        "Plataforma promove interações e transações entre seus usuários",
      resposta: true,
    },
    {
      url: "cardsJornadaConecta/cardJornadaConecta2.png",
      pergunta: "MarketPlace é um espaço epenas de compras, não de vendas",
      resposta: false,
    },
    {
      url: "cardsJornadaConecta/cardJornadaConecta3.png",
      pergunta: "Um navegador permite acessar e vizualizar páginas da web",
      resposta: true,
    },
    {
      url: "cardsJornadaConecta/cardJornadaConecta4.png",
      pergunta: "LandPage não é uma página estática",
      resposta: false,
    },
    {
      url: "cardsJornadaConecta/cardJornadaConecta5.png",
      pergunta: "App é um software desenvolvido para dispositivos móveis",
      resposta: true,
    },
  ]);

  const banner = [
    { url: "cardsJornadaConecta/banner1.jpg" },
    { url: "cardsJornadaStart/banner2.png" },
    { url: "cardsJornadaStart/banner3.png" },
    { url: "cardsJornadaStart/banner4.png" },
    { url: "cardsJornadaStart/banner5.png" },
    { url: "cardsJornadaStart/banner6.png" },
    { url: "cardsJornadaStart/banner7.png" },
    { url: "cardsJornadaStart/banner8.png" },
    { url: "cardsJornadaStart/banner9.png" },
    { url: "cardsJornadaStart/banner10.png" },
  ];

  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  //====================================================================

  const [posicoes, setPosicoes] = useState([
    {
      left: 62 * 0,
      top: 0,
      numero: 0,
      card: {
        url: "cardsJornadaConecta/card0.png",
        pergunta: null,
        resposta: false,
      },
    },
    { left: 62 * 0, top: 60, numero: 1, card: card[0] },
    { left: 62 * 0, top: 60 * 2, numero: 2, card: card[1] },
    { left: 62 * 0, top: 60 * 3, numero: 3, card: null, banner: banner[0] },
    { left: 62 * 0, top: 60 * 4, numero: 4, card: card[2] },
    { left: 62 * 0, top: 60 * 5, numero: 5, card: card[3] },
    { left: 62 * 1, top: 60 * 5, numero: 6, card: null, banner: banner[0] },
    { left: 62 * 2, top: 60 * 5, numero: 7, card: card[4] },
    { left: 62 * 2, top: 60 * 4, numero: 8, card: card[1] },
    { left: 62 * 2, top: 60 * 3, numero: 9, card: null, banner: banner[0] },
    { left: 62 * 2, top: 60 * 2, numero: 10, card: card[2] },
    { left: 62 * 2, top: 60, numero: 11, card: card[3] },
    { left: 62 * 3, top: 60, numero: 12, card: card[4] },
    { left: 62 * 4, top: 60, numero: 13, card: null, banner: banner[0] },
    { left: 62 * 4, top: 60 * 2, numero: 14, card: card[4] },
    { left: 62 * 4, top: 60 * 3, numero: 15, card: card[2] },
    { left: 62 * 4, top: 60 * 4, numero: 16, card: card[1] },
    { left: 62 * 4, top: 60 * 5, numero: 17, card: null, banner: banner[0] },
    { left: 62 * 5, top: 60 * 5, numero: 18, card: card[2] },
    { left: 62 * 6, top: 60 * 5, numero: 19, card: card[3] },
    { left: 62 * 6, top: 60 * 4, numero: 20, card: null, banner: banner[0] },
    { left: 62 * 6, top: 60 * 3, numero: 21, card: card[4] },
    { left: 62 * 6, top: 60 * 2, numero: 22, card: card[3] },
    { left: 62 * 6, top: 60, numero: 23, card: null, banner: banner[0] },
    { left: 62 * 7, top: 60, numero: 24, card: card[1] },
    { left: 62 * 8, top: 60, numero: 25, card: card[2] },
    { left: 62 * 8, top: 60 * 2, numero: 26, card: card[3] },
    { left: 62 * 8, top: 60 * 3, numero: 27, card: null, banner: banner[0] },
    { left: 62 * 8, top: 60 * 4, numero: 28, card: card[4] },
    { left: 62 * 9, top: 60 * 4, numero: 29, card: card[0] },
    { left: 62 * 10, top: 60 * 4, numero: 30, card: card[1] },
    { left: 62 * 10, top: 60 * 3, numero: 31, card: null, banner: banner[0] },
    { left: 62 * 10, top: 60 * 2, numero: 32, card: card[2] },
    { left: 62 * 10, top: 60, numero: 33, card: card[3] },
    {
      left: 62 * 10,
      top: 60 * 0,
      numero: 34,
      card: {
        url: "cardsJornadaConecta/card0.png",
        pergunta: null,
        resposta: false,
      },
    },
  ]);

  //====================================================================

  const calcularTop = () =>
    setPinoTop(40 + posicoes[posicao >= posicoes.length ? 34 : posicao].top);
  const calcularLeft = () =>
    setPinoLeft(37 + posicoes[posicao >= posicoes.length ? 34 : posicao].left);

  const pinoPassoAPasso = async (posicao) => {
    //avança ou retrocede o pino
    posicao < props.posicao ? posicao++ : posicao--;

    setPosicao(posicao);
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (posicao != props.posicao) pinoPassoAPasso(posicao);
    else {
      setMovendo(false);
      props.onPinoMovendo(false);
    }
  };

  //======================================================================
  useEffect(() => {
    calcularLeft();
    calcularTop();
    if (posicao == props.posicao) {
      // Passa os dados da casa do tabuleiro pra abrir o modal de acordo com as condições
      props.abrirModal(
        posicoes[posicao >= posicoes.length ? posicoes.length - 1 : posicao]
      );
    } else {
      if (!movendo) {
        setMovendo(true);
        props.onPinoMovendo(true);

        pinoPassoAPasso(posicao);
      } else {
        calcularLeft();
        calcularTop();
      }
    }
  }, [props.posicao, posicao]);

  // ======================================================
  return (
    <div style={{ position: "relative" }}>
      {/* PINO */}
      <img
        style={{
          position: "relative",
          width: 60,
          top: pinoTop,
          left: pinoLeft,
          height: 90,
          position: "absolute",
        }}
        src="/static/tabuleiro/pino.png"
      />
      {/* TABULEIRO */}
      <img
        style={styles.tabuleiro}
        src="/static/tabuleiro/tabuleiroJornadaConecta.png"
      />
    </div>
  );
}

const styles = {
  tabuleiro: {
    width: 747,
    height: 532,
  },
};
