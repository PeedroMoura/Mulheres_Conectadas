"use client";
import { useEffect, useState } from "react";

export function Tabuleiro3(props) {

    const [ pinoTop, setPinoTop ] = useState(0);
    const [ pinoLeft, setPinoLeft ] = useState(0);
    const [ posicao, setPosicao ] = useState(0);
    const [ movendo, setMovendo ] = useState(false);
    const [ posicaoFinal, setPosicaoFinal ] = useState(props.posicao)
    const [ posicoes, setPosicoes ] = useState([
        {left: 62*0, top: 0, numero: 0, card: {img: null}  },
        {left: 62*0, top: 60, numero: 1, card: {img: 'card1.png'} },
        {left: 62*0, top: 60*2, numero: 2, card: {img: 'card2.png'}  },
        {left: 62*0, top: 60*3, numero: 3, card: {img: null} },
        {left: 62*0, top: 60*4, numero: 4, card: {img: 'card3.png'}  },
        {left: 62*0, top: 60*5, numero: 5, card: {img: 'card4.png'}  },
        {left: 62*1, top: 60*5, numero: 6, card: {img: null}  },
        {left: 62*2, top: 60*5, numero: 7, card: {img: 'card5.png'}  },
        {left: 62*2, top: 60*4, numero: 8, card: {img: 'card6.png'}  },
        {left: 62*2, top: 60*3, numero: 9, card: {img: null}  },
        {left: 62*2, top: 60*2, numero: 10, card: {img: 'card7.png'}  },
        {left: 62*2, top: 60, numero: 11, card: {img: 'card8.png'}  },
        {left: 62*3, top: 60, numero: 12, card: {img: 'card9.png'}  },
        {left: 62*4, top: 60, numero: 13, card: {img: null}  },
        {left: 62*4, top: 60*2, numero: 14, card: {img: 'card10.png'}  },
        {left: 62*4, top: 60*3, numero: 15, card: {img: 'card11.png'}  },
        {left: 62*4, top: 60*4, numero: 16, card: {img: 'card12.png'}  },
        {left: 62*4, top: 60*5, numero: 17, card: {img: null}  },
        {left: 62*5, top: 60*5, numero: 18, card: {img: 'card13.png'}  },
        {left: 62*6, top: 60*5, numero: 19, card: {img: 'card14.png'}  },
        {left: 62*6, top: 60*4, numero: 20, card: {img: null}  },
        {left: 62*6, top: 60*3, numero: 21, card: {img: 'card15.png'}  },
        {left: 62*6, top: 60*2, numero: 22, card: {img: 'card16.png'}  },
        {left: 62*6, top: 60, numero: 23, card: {img: null}  },
        {left: 62*7, top: 60, numero: 24, card: {img: 'card17.png'}  },
        {left: 62*8, top: 60, numero: 25, card: {img: 'card18.png'}  },
        {left: 62*8, top: 60*2, numero: 26, card: {img: 'card19.png'}  },
        {left: 62*8, top: 60*3, numero: 27, card: {img: null}  },
        {left: 62*8, top: 60*4, numero: 28, card: {img: 'card20.png'}  },
        {left: 62*9, top: 60*4, numero: 29, card: {img: 'card1.png'}  },
        {left: 62*10, top: 60*4, numero: 30, card: {img: 'card2.png'}  },
        {left: 62*10, top: 60*3, numero: 31, card: {img: null}  },
        {left: 62*10, top: 60*2, numero: 32, card: {img: 'card3.png'}  },
        {left: 62*10, top: 60, numero: 33, card: {img: 'card6.png'}  },
        {left: 62*10, top: 60*0, numero: 34, card: {img: null, button: true}  },
    ])
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
            props.trocarCard(posicoes[posicao >= posicoes.length? 34 :  posicao].card)
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
    }, [props, posicao])

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
