import { ReactNode } from "react";
import * as s from "./styled-column-input";

interface ColumnInputProps {
  children: ReactNode;
  style?: object;
  className?: string;
}
const ColumnInput = ({ children, style, className }: ColumnInputProps) => {
  return (
    <s.ColumnInput style={style} className={className}>
      {children}
    </s.ColumnInput>
  );
};

export default ColumnInput;
