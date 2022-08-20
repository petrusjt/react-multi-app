import React from "react";
import { getRecommendedWords } from "../../services/szozat-solver/szozatSolverService";


export function SzozatSolverMain() {
    return (
        <div className="overflow-y-scroll max-h-full h-full">
            {getRecommendedWords([], [], [".", ".", ".", ".", "."], "hu")
                .map(item => <div key={item.toString()+`${Math.random()}`}>{item}</div>)}
        </div>
    )
}