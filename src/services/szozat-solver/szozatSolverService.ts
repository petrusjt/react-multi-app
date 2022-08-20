import usable_words_hu from "./usable_words_hu.json"
import usable_words_en from "./usable_words_en.json"

const NON_SINGLE_MSGHK = "cs dzs dz gy ly ny sz ty zs".split(" ")
const NON_SINGLE_MSGHK_MAP = new Map()
NON_SINGLE_MSGHK.forEach(msgh => {
    NON_SINGLE_MSGHK_MAP.set(msgh, NON_SINGLE_MSGHK.indexOf(msgh))
})
const NON_SINGLE_MSGHK_MAP_REVERSE = new Map()
NON_SINGLE_MSGHK.forEach(msgh => {
    NON_SINGLE_MSGHK_MAP_REVERSE.set(NON_SINGLE_MSGHK.indexOf(msgh), msgh)
})

export function getRecommendedWords(presentLetters: Array<string>,
                                    notPresentLetters: Array<string>,
                                    regex: Array<string>,
                                    lang: string): Array<string> {
    const compiledRegex: RegExp = new RegExp(convertInputList(regex).join(""), 'gi')
    return getFullWordlist(lang)
        .filter(item => compiledRegex.exec(item) !== null)
        .filter(item => convertInputList(presentLetters).every(letter => item.includes(letter)))
        .filter(item => !convertInputList(notPresentLetters).some(letter => item.includes(letter)))
        .map(item => {
            return item.split("")
                .map(char => NON_SINGLE_MSGHK_MAP_REVERSE.has(Number(char))
                        ? NON_SINGLE_MSGHK_MAP_REVERSE.get(Number(char))
                        : char)
                .join("")
        })
}

function convertInputList(letterList: Array<string>): Array<string> {
    return letterList.map(item => NON_SINGLE_MSGHK_MAP.has(item)
            ? NON_SINGLE_MSGHK_MAP.get(item)
            : item)
}

function getFullWordlist(lang: string): Array<string> {
    return lang === "hu"
            ? usable_words_hu
            : usable_words_en
}
