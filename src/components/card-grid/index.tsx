import { FC, useContext } from "react";
import { LangContext } from "../../context/lang-context";
import { CardGridProps, LangContextType } from "../../types";
import "./style.scss";

export const CardGrid: FC<CardGridProps> = ({ className, children }) => {
  const { lang }: LangContextType = useContext(LangContext);

  return (
    <div className={`card-grid ${className}`}>
      {children}
      <h1>{lang}</h1>
    </div>
  );
};
