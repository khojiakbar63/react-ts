import { createContext , FC } from "react";
import type {ContextProps} from '../types/index'
export const ThemeContext:any = createContext('light');




export const ThemeProvider:FC<ContextProps> = ({children, theme, toggleTheme}) => {
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}



