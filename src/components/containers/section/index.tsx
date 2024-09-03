import React from "react";
import type { SectionProps } from "../../../types";

export const Section: React.FC<SectionProps> = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};
