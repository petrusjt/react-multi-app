import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {PossibleWordsLister} from "./PossibleWordsLister";
import {LettersLister} from "./LettersLister";
import {RegexAndLangComponent} from "./RegexAndLangComponent";


export function SzozatSolverMain() {
    const {t, i18n} = useTranslation()
    const [presentLetters, setPresentLetters] = useState([])
    const [notPresentLetters, setNotPresentLetters] = useState([])
    const [regex, setRegex] = useState([".", ".", ".", ".", "."])
    const [lang, setLang] = useState("hu")

    useEffect(() => {
        document.title = t("szozatSolver.title")
    })

    return (
        <div className="h-screen w-screen bg-slate-800 flex flex-col justify-center overflow-hidden p-2">
            <div className="w-full flex flex-row flex-wrap justify-between">
                <LettersLister letters={presentLetters}
                               setLetters={setPresentLetters}
                               isNotPresentLister={false}
                               className="bg-slate-600 szozatBreak:min-h-112 szozatBreak:w-33p szozatBreak:min-w-96"/>
                <LettersLister letters={notPresentLetters}
                               setLetters={setNotPresentLetters}
                               isNotPresentLister={true}
                               className="bg-slate-600 szozatBreak:min-h-112 szozatBreak:w-33p szozatBreak:min-w-96"/>
                <RegexAndLangComponent setLang={setLang}
                                       regex={regex}
                                       setRegex={setRegex}
                                       className="bg-slate-600 szozatBreak:min-h-112 szozatBreak:w-33p szozatBreak:min-w-96"/>
            </div>
            <PossibleWordsLister presentLetters={presentLetters}
                                 notPresentLetters={notPresentLetters}
                                 regex={regex}
                                 lang={lang}
                                 className="szozatBreak:min-h-96 max-h-1/2 overflow-y-hidden bg-slate-600"/>
        </div>
    )
}