import { createContext, FC, ReactNode } from "react";

export const LangContext:any = createContext("uz");

interface ContextLang {
  children: ReactNode;
  lang: "uz" | "en" | "ru" | string;
  setLang: (lang:string)=> void;
}

export const LangProvider: FC<ContextLang> = ({children, lang, setLang}) => {
  return <LangContext.Provider value={{lang, setLang}}>
    {children}
    </LangContext.Provider>;
};
