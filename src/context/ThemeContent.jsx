/* import { createContext, useState } from 'react';
 
export const ThemeContext = createContext();

export default function ThemeProvider ({children}) {

    const [dark, setDark] = useState(false)

    const changeTheme = () => {
        setDark(!dark)
    }

    return (
        <ThemeContext.Provider value={{dark, changeTheme}} >
            {children}
        </ThemeContext.Provider>
    )
} */