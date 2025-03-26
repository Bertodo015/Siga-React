import { useState } from "react";
import Celula from "../Celula/Celula.tsx";
import "./Tabuleiro.css";

export default function Tabuleiro() {
    //celulas  =documento.querySelectorAll(".celula");
    const [celulas, setCelulas] = useState([null, null, null, null, null, null, null, null, null]);
    const [vezX, setVezX] = useState(true);

    return (
        <div className="tabuleiro">
            <Celula nomeClasse={celulas[0]} vezDoXis={vezX} onClick="() => {joga(0);}" />
            <Celula nomeClasse={celulas[1]} vezDoXis={vezX} />
            <Celula nomeClasse={celulas[2]} vezDoXis={vezX} />
            <Celula nomeClasse={celulas[3]} vezDoXis={vezX} />
            <Celula nomeClasse={celulas[4]} vezDoXis={vezX} />
            <Celula nomeClasse={celulas[5]} vezDoXis={vezX} />
            <Celula nomeClasse={celulas[6]} vezDoXis={vezX} />
            <Celula nomeClasse={celulas[7]} vezDoXis={vezX} />
            <Celula nomeClasse={celulas[8]} vezDoXis={vezX} />
        </div>
    );
}