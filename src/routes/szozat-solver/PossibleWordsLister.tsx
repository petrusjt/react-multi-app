import React, {useState} from "react";
import {getRecommendedWords} from "../../services/szozat-solver/szozatSolverService";
import {Button, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {useTranslation} from "react-i18next";

type Props = {
    presentLetters: Array<string>,
    notPresentLetters: Array<string>,
    regex: Array<string>,
    lang: string,
    className?: string
}

export function PossibleWordsLister({presentLetters, notPresentLetters, regex, lang, className}: Props) {
    const {t, i18n} = useTranslation()
    const [possibleWords, setPossibleWords] = useState([])
    return (
        <div className={`card ${className}`}>
            <Button variant="contained" className="w-full !bg-green-600" onClick={() => {
                // @ts-ignore
                setPossibleWords(getRecommendedWords(presentLetters, notPresentLetters, regex, lang))
            }}>
                {t("szozatSolver.findUsableWords")}
            </Button>
            <h3 className="pt-3 border-b-gray-800 border-b-[1px] font-bold">{t("szozatSolver.usableWords")}</h3>
            <div>
                <div>
                    <TableContainer sx={{maxHeight: 400}}>
                        <Table>
                            <TableBody className="max-h-[400px]">
                                {possibleWords.map((possibleWord: string) => (
                                    <TableRow key={possibleWord.toString() + Math.random()}>
                                        <TableCell className="!p-1 !border-b-gray-800">{possibleWord}</TableCell>
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