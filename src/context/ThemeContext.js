import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = (props) => {
    const [isDark, setIsDark] = useState(false)
    console.log("init context isDark ");
    useEffect(() => {
        console.log("event context isDark ", isDark);
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