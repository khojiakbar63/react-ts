export interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export interface SectionProps {
  children?: React.ReactNode;
  className?: string;
}

export interface ButtonProps {
  className?: string;
  text?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}


export interface ContextProps{
  theme: 'light' | 'dark' | string,
  toggleTheme?: ()=> void
  children: React.ReactNode,
}

export interface ContextType {
  theme: 'light' | 'dark' | string,
  toggleTheme: () => void
}

export interface LangContextType {
  setLang: (lang: string) => void;
}


export interface CardGridProps {
  className?: string;
  children?: React.ReactNode;
}
export interface LangContextType {
  lang: string;
}


export interface LangType {
  lang: string;
}



