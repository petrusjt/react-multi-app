import React, {useCallback, useState} from "react";
import {Button, Table, TableBody, TableCell, TableContainer, TableRow, TextField} from "@mui/material";
import {getRecommendedWords} from "../../services/szozat-solver/szozatSolverService";
import {useTranslation} from "react-i18next";

type Props = {
    letters: Array<string>,
    setLetters: any
    isNotPresentLister?: boolean,
    className?: string
}


export function LettersLister({letters, setLetters, isNotPresentLister, className}: Props) {
    const {t, i18n} = useTranslation()
    const [lettersToAdd, setLettersToAdd] = useState("")
    const handleInputChange = useCallback((event: any) => {
        setLettersToAdd(event.target.value)
    }, [setLettersToAdd])

    return (
        <div className={`card ${className}`}>
            <h3 className="pb-3 border-b-gray-800 border-b-[1px] font-bold">
                {t(isNotPresentLister ? "szozatSolver.notPresentLetters" : "szozatSolver.presentLetters")}
            </h3>
            <TextField variant="outlined"
                       className="w-full !p-0.5 !bg-slate-400 rounded"
                       value={lettersToAdd}
                       onChange={handleInputChange}/>
            <Button variant="contained" className="w-full !bg-green-600 !mt-2" onClick={() => {
                setLetters(letters.concat(lettersToAdd.split(",").filter(item => item)))
                setLettersToAdd("")
            }} >
                {t(isNotPresentLister ? "szozatSolver.notPresentLettersAdd" : "szozatSolver.presentLettersAdd")}
            </Button>
            <div>
                <div>
                    <TableContainer sx={{maxHeight: 400}}>
                        <Table>
                            <TableBody>
                                {letters.map((letter: string) => (
                                    <TableRow key={letter.toString() + Math.random()}>
                                        <TableCell className="!p-1 !border-b-gray-800"
                                                   onDoubleClick={event => {
                                                        setLetters(letters.filter(item =>
                                                            item !== (event.target as HTMLElement).innerText))
                                                   }}>
                                            {letter}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}