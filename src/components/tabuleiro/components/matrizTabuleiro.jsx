"use client";
import { useEffect, useState } from "react";

export function Tabuleiro1(props) {

    const [ pinoTop, setPinoTop ] = useState(0);
    const [ pinoLeft, setPinoLeft ] = useState(0);
    const { posicao } = props;
    const [ posicoes, setPosicoes ] = useState([
        {left: 62*0, top: 0, numero: 0, card: 'like'  },
        {left: 62*0, top: 60, numero: 1, card: 'like' },
        {left: 62*0, top: 60*2, numero: 2, card: 'like'  },
        {left: 62*0, top: 60*3, numero: 3, card: 'like' },
        {left: 62*0, top: 60*4, numero: 4, card: 'like'  },
        {left: 62*0, top: 60*5, numero: 5, card: 'like'  },
        {left: 62*1, top: 60*5, numero: 6, card: 'like'  },
        {left: 62*2, top: 60*5, numero: 7, card: 'like'  },
        {left: 62*2, top: 60*4, numero: 8, card: 'like'  },
        {left: 62*2, top: 60*3, numero: 9, card: 'like'  },
        {left: 62*2, top: 60*2, numero: 10, card: 'like'  },
        {left: 62*2, top: 60, numero: 11, card: 'like'  },
        {left: 62*3, top: 60, numero: 12, card: 'like'  },
        {left: 62*4, top: 60, numero: 13, card: 'like'  },
        {left: 62*4, top: 60*2, numero: 14, card: 'like'  },
        {left: 62*4, top: 60*3, numero: 15, card: 'like'  },
        {left: 62*4, top: 60*4, numero: 16, card: 'like'  },
        {left: 62*4, top: 60*5, numero: 17, card: 'like'  },
        {left: 62*5, top: 60*5, numero: 18, card: 'like'  },
        {left: 62*6, top: 60*5, numero: 19, card: 'like'  },
        {left: 62*6, top: 60*4, numero: 20, card: 'like'  },
        {left: 62*6, top: 60*3, numero: 21, card: 'like'  },
        {left: 62*6, top: 60*2, numero: 22, card: 'like'  },
        {left: 62*6, top: 60, numero: 23, card: 'like'  },
        {left: 62*7, top: 60, numero: 24, card: 'like'  },
        {left: 62*8, top: 60, numero: 25, card: 'like'  },
        {left: 62*8, top: 60*2, numero: 26, card: 'like'  },
        {left: 62*8, top: 60*3, numero: 27, card: 'like'  },
        {left: 62*8, top: 60*4, numero: 28, card: 'like'  },
        {left: 62*9, top: 60*4, numero: 29, card: 'like'  },
        {left: 62*10, top: 60*4, numero: 30, card: 'like'  },
        {left: 62*10, top: 60*3, numero: 31, card: 'like'  },
        {left: 62*10, top: 60*2, numero: 32, card: 'like'  },
        {left: 62*10, top: 60, numero: 33, card: 'like'  },
        {left: 62*10, top: 60*0, numero: 34, card: 'like'  },
    ])
    //====================================================================
    const calcularTop = () => setPinoTop(40+posicoes[posicao >= posicoes.length? 34 :  posicao].top)
    const calcularLeft = () => setPinoLeft(37+posicoes[posicao >= posicoes.length? 34 :  posicao].left)

    //======================================================================
    useEffect(() => {
        calcularLeft()
        calcularTop()
        props.trocarCard(posicoes[posicao >= posicoes.length? 34 :  posicao].card)
    }, [props])

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
