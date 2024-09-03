import React, { useContext } from "react";
import { LangContext } from "../../../context/lang-context";
import {LangContextType} from "../../../types";



export const Select = () => {

  const { setLang }: LangContextType = useContext(LangContext);

  return (
    <select onChange={(e) => setLang(e.target.value)}>
      <option value="uz">Uzbek</option>
      <option value="en">English</option>
      <option value="ru">Russian</option>
    </select>
  );
};
