import { ReactNode } from "react";
import { Logo } from "../../imagens";
import * as s from "./styled-card";

interface CardProps {
  titulo: string;
  link: string;
  descricao: string | ReactNode;
}

const Card = ({ titulo, link, descricao }: CardProps) => {
  return (
    <s.Container href={link}>
      <img src={Logo} alt="Imagem Let's Dev" />
      <a href={link}>{titulo}</a>
      {typeof descricao === "string" ? <p>{descricao}</p> : descricao}
    </s.Container>
  );
};

export default Card;
