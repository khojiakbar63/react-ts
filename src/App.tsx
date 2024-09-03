import React from "react";
import { ThemeProvider } from "./context/theme-context";
import { LangProvider } from "./context/lang-context";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { CardGrid } from "./components/card-grid";
import { Container } from "./components/containers/container";
import { useState } from "react";

const App: React.FC = () => {

  const [theme, setTheme] = useState<string>("light");
  const [lang, setLang] = useState<string>('uz')

  const toggleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  const changeLang = (lang:string):void => {
    setLang(lang)
    console.log(lang)
  }

  return (
    <LangProvider lang={lang} setLang={changeLang}>
      <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
        <Container>
          <h1>Hello TypeScript</h1>
          <h1>{lang}</h1>
          <Button
            type="submit"
            onClick={() => {
              toggleTheme();
            }}
          >
            Hello
          </Button>

          <CardGrid>
            <Card />
            <Card />
            <Card />
            <Card />
          </CardGrid>
        </Container>
      </ThemeProvider>
    </LangProvider>
  );
};

export default App;
