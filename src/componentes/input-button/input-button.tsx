import React, { FormEvent, ChangeEvent, ReactNode } from "react";
import * as s from "./styled-input-button";

interface InputButtonProps {
  type?: "file" | "submit" | "button";
  name?: string;
  value?: any;
  onChange?: (event: any) => void;
  outlined?: boolean;
  onClick?: (event: FormEvent) => void;
}
const InputButton = ({
  type,
  name,
  value,
  onChange,
  outlined,
  onClick,
}: InputButtonProps) => {
  return (
    <s.InputButton
      className={outlined ? "outlined" : ""}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default InputButton;
