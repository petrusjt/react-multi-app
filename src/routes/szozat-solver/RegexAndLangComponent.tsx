import React, {useCallback, useState} from "react";
import {useTranslation} from "react-i18next";
import {InputLabel, MenuItem, Select, TextField} from "@mui/material";

type Props = {
    setLang: any,
    regex: Array<string>,
    setRegex: any,
    className?: string
}

export function RegexAndLangComponent({setLang, regex, setRegex, className}: Props) {
    const {t, i18n} = useTranslation()
    const [regex1, setRegex1] = useState('.')
    const [regex2, setRegex2] = useState('.')
    const [regex3, setRegex3] = useState('.')
    const [regex4, setRegex4] = useState('.')
    const [regex5, setRegex5] = useState('.')
    const [language, setLanguage] = useState('hu')

    const handleInputChange1 = useCallback((event: any) => {
        setRegex1(event.target.value)
        setRegex([event.target.value, regex2, regex3, regex4, regex5])
    }, [setRegex1, setRegex, regex2, regex3, regex4, regex5])
    const handleInputChange2 = useCallback((event: any) => {
        setRegex2(event.target.value)
        setRegex([regex1, event.target.value, regex3, regex4, regex5])
    }, [setRegex2, setRegex, regex1, regex3, regex4, regex5])
    const handleInputChange3 = useCallback((event: any) => {
        setRegex3(event.target.value)
        setRegex([regex1, regex2, event.target.value, regex4, regex5])
    }, [setRegex3, setRegex, regex1, regex2, regex4, regex5])
    const handleInputChange4 = useCallback((event: any) => {
        setRegex4(event.target.value)
        setRegex([regex1, regex2, regex3, event.target.value, regex5])
    }, [setRegex4, setRegex, regex1, regex2, regex3, regex5])
    const handleInputChange5 = useCallback((event: any) => {
        setRegex5(event.target.value)
        setRegex([regex1, regex2, regex3, regex4, event.target.value])
    }, [setRegex5, setRegex, regex1, regex2, regex3, regex4])

    const handleLanguageChange = useCallback((event: any) => {
        setLang(event.target.value)
        setLanguage(event.target.value)
    }, [setLanguage, setLang])

    return (
        <div className={`card ${className}`}>
            <h3 className="font-bold pb-3">{t("szozatSolver.regex")}</h3>
            <TextField variant="outlined"
                       value={regex1}
                       onChange={handleInputChange1}
                       className="w-1/5 !p-0.5 !bg-slate-400 rounded"/>
            <TextField variant="outlined"
                       value={regex2}
                       onChange={handleInputChange2}
                       className="w-1/5 !p-0.5 !bg-slate-400 rounded"/>
            <TextField variant="outlined"
                       value={regex3}
                       onChange={handleInputChange3}
                       className="w-1/5 !p-0.5 !bg-slate-400 rounded"/>
            <TextField variant="outlined"
                       value={regex4}
                       onChange={handleInputChange4}
                       className="w-1/5 !p-0.5 !bg-slate-400 rounded"/>
            <TextField variant="outlined"
                       value={regex5}
                       onChange={handleInputChange5}
                       className="w-1/5 !p-0.5 !bg-slate-400 rounded"/>
            <h3 className="font-bold py-3">{t("szozatSolver.languageSelector")}</h3>
            <Select value={language} onChange={handleLanguageChange} className="mt-2 !p-0.5 !bg-slate-400 rounded w-full">
                <MenuItem value="hu">hu</MenuItem>
                <MenuItem value="en">en</MenuItem>
            </Select>
        </div>
    )
}