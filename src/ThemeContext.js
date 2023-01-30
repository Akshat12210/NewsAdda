import React from 'react'

export const themes = {
    dark: {
        color: "white",
        background: "black",
        mode:"dark",
    },
    light: {
        color: "black",
        background: "white",
        mode:"light",
    }
};

const ThemeContext = React.createContext(themes.dark)


export default ThemeContext;