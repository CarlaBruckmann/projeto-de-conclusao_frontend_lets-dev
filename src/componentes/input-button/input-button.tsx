import React, { FormEvent, ChangeEvent, ReactNode } from "react";
import * as s from "./styled-input-button";

interface InputButtonProps {
  type?: "file" | "submit" | "button";
  title?: string;
  name?: string;
  value?: any;
  onChange?: (event: any) => void;
  outlined?: boolean;
  onClick?: (event: FormEvent) => void;
}
const InputButton = ({
  type,
  title,
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
      title={title}
      name={name}
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default InputButton;
