/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            "szozatBreak": "1180px"
        },
        extend: {
            width: {
                "33p": "33%"
            },
            minWidth: {
                "96":  "24rem"
            },
            minHeight: {
                "112": "28rem",
                "96": "24rem"
            }
        },
    },
    plugins: [],
}
