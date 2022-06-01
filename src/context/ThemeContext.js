import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = (props) => {
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        if (isDark) {
            document.body.classList.add('white-content')
        } else {
            document.body.classList.remove('white-content');
        }

    }, [isDark]);

    return (
        <ThemeContext.Provider
            value={
                {
                    isDark,
                    setIsDark
                }
            }
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider