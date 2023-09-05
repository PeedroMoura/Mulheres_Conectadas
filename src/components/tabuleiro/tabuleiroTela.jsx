"use client";
import { useState } from "react";
import { Tabuleiro } from "./components/matrizTabuleiro";

export function TabuleiroTela() {

    const [ posicao, setPosicao ] = useState(100);
    const [ dado, setDado ] = useState<any>(null);
    // ===================================================
    const lancarDado = () => {
        const valor = Math.floor(Math.random() * 6) + 1;
        setDado(valor);
        setPosicao(posicao+valor);
    }
    // ====================================================
    return (
        <div>
            <h1>Tabuleiro</h1>

            {/*  TABULEIRO */}
            <div>
                <button onClick={lancarDado}>Jogar Dado</button>
                <h1>Posição: {posicao}</h1>
                <h1>Dado: {dado}</h1>
                <Tabuleiro posicao={posicao} trocarCard={(card) => console.log(card) }/>
            </div>
        </div>
    )

}