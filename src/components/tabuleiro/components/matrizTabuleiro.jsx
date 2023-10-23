"use client";
import { useEffect, useState } from "react";

export function Tabuleiro1(props) {

    const [ pinoTop, setPinoTop ] = useState(0);
    const [ pinoLeft, setPinoLeft ] = useState(0);
    const [ posicao, setPosicao ] = useState(0);
    const [ movendo, setMovendo ] = useState(false);
    const [ posicaoFinal, setPosicaoFinal ] = useState(props.posicao)

 //====================================================================

    const card = shuffleArray([
        {url: "card1.png", pergunta: "abc", resposta: true},   
        {url: "card2.png", pergunta: "abc", resposta: true},   
        {url: "card3.png", pergunta: "abc", resposta: true},   
        {url: "card4.png", pergunta: "abc", resposta: true},   
        {url: "card5.png", pergunta: "abc", resposta: true},   
        {url: "card6.png", pergunta: "abc", resposta: true},   
        {url: "card7.png", pergunta: "abc", resposta: true},   
        {url: "card8.png", pergunta: "abc", resposta: true},   
        {url: "card9.png", pergunta: "abc", resposta: true},   
        {url: "card10.png", pergunta: "abc", resposta: true},   
        {url: "card11.png", pergunta: "abc", resposta: true},   
        {url: "card12.png", pergunta: "abc", resposta: true},   
        {url: "card13.png", pergunta: "abc", resposta: true},   
        {url: "card14.png", pergunta: "abc", resposta: true},   
        {url: "card15.png", pergunta: "abc", resposta: true},   
        {url: "card16.png", pergunta: "abc", resposta: true},   
        {url: "card17.png", pergunta: "abc", resposta: true},   
        {url: "card18.png", pergunta: "abc", resposta: true},   
        {url: "card19.png", pergunta: "abc", resposta: true},   
        {url: "card20.png", pergunta: "abc", resposta: true},   
    ])

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
    { left: 62 * 0, top: 0, numero: 0, card: {url: "card0.png", pergunta: null, resposta: false} },
    { left: 62 * 0, top: 60, numero: 1, card: card[0] },
    { left: 62 * 0, top: 60 * 2, numero: 2, card: card[1] },
    { left: 62 * 0, top: 60 * 3, numero: 3, card: null },
    { left: 62 * 0, top: 60 * 4, numero: 4, card: card[2] },
    { left: 62 * 0, top: 60 * 5, numero: 5, card: card[3] },
    { left: 62 * 1, top: 60 * 5, numero: 6, card: null },
    { left: 62 * 2, top: 60 * 5, numero: 7, card: card[4] },
    { left: 62 * 2, top: 60 * 4, numero: 8, card: card[5] },
    { left: 62 * 2, top: 60 * 3, numero: 9, card: null },
    { left: 62 * 2, top: 60 * 2, numero: 10, card: card[6]},
    { left: 62 * 2, top: 60, numero: 11, card: card[7] },
    { left: 62 * 3, top: 60, numero: 12, card: card[8] },
    { left: 62 * 4, top: 60, numero: 13, card: null },
    { left: 62 * 4, top: 60 * 2, numero: 14, card: card[9] },
    { left: 62 * 4, top: 60 * 3, numero: 15, card: card[10] },
    { left: 62 * 4, top: 60 * 4, numero: 16, card: card[11] },
    { left: 62 * 4, top: 60 * 5, numero: 17, card: null },
    { left: 62 * 5, top: 60 * 5, numero: 18, card: card[12] },
    { left: 62 * 6, top: 60 * 5, numero: 19, card: card[13] },
    { left: 62 * 6, top: 60 * 4, numero: 20, card: null },
    { left: 62 * 6, top: 60 * 3, numero: 21, card: card[14] },
    { left: 62 * 6, top: 60 * 2, numero: 22, card: card[15] },
    { left: 62 * 6, top: 60, numero: 23, card: null },
    { left: 62 * 7, top: 60, numero: 24, card: card[16] },
    { left: 62 * 8, top: 60, numero: 25, card: card[17] },
    { left: 62 * 8, top: 60 * 2, numero: 26, card: card[18] },
    { left: 62 * 8, top: 60 * 3, numero: 27, card: null },
    { left: 62 * 8, top: 60 * 4, numero: 28, card: card[19] },
    { left: 62 * 9, top: 60 * 4, numero: 29, card: card[1] },
    { left: 62 * 10, top: 60 * 4, numero: 30, card: card[6] },
    { left: 62 * 10, top: 60 * 3, numero: 31, card: null },
    { left: 62 * 10, top: 60 * 2, numero: 32, card: card[10] },
    { left: 62 * 10, top: 60, numero: 33, card: card[2] },
    {
      left: 62 * 10,
      top: 60 * 0,
      numero: 34,
      card: {url: "card0.png", pergunta: null, resposta: false},
    },
  ]);

  //====================================================================

  const calcularTop = () => setPinoTop(40+posicoes[posicao >= posicoes.length? 34 :  posicao].top)
  const calcularLeft = () => setPinoLeft(37+posicoes[posicao >= posicoes.length? 34 :  posicao].left)

  const pinoPassoAPasso = async (posicao) => {
      posicao++
      setPosicao(posicao)
      await new Promise(resolve => setTimeout(resolve, 500))
      if (posicao < props.posicao) 
          pinoPassoAPasso(posicao)
      else {
          setMovendo(false)
          props.onPinoMovendo(false)
      }
      
          
  }

  //======================================================================
  useEffect(() => {
      calcularLeft()
      calcularTop()
      if (posicao == props.posicao)
          props.abrirModalPergunta(posicoes[posicao >= posicoes.length ? (posicoes.length - 1) : posicao].card)
      else {
          if (!movendo) {
              setMovendo(true)
              props.onPinoMovendo(true)

              pinoPassoAPasso(posicao)
          } else {
              calcularLeft()
              calcularTop()
          }
      }
  }, [props.posicao, posicao])

  // ======================================================
  return (
      <div style={{position: 'relative'}}>
           {/* PINO */}
           <img
              style={
                  {
                      
                      position: 'relative',
                      width: 60,
                      top: pinoTop,
                      left: pinoLeft,
                      height: 90,
                      position: 'absolute'
                  }
              }
              src="/static/tabuleiro/pino.png"
          /> 
          {/* TABULEIRO */}
          <img
              style={styles.tabuleiro}
              src='/static/tabuleiro/tabuleiro.jpg'

          />

         
      </div>
  )

}

const styles = {
  tabuleiro: {
      width:747, 
      height: 532,
  }
}