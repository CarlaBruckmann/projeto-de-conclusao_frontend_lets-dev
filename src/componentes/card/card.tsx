import { ReactNode } from "react";
import { Logo } from "../../imagens";
import * as s from "./styled-card";

interface CardProps {
  titulo: string;
  link: string;
  title: string;
  descricao: string | ReactNode;
}

const Card = ({ titulo, link, descricao, title }: CardProps) => {
  return (
    <s.Container href={link}>
      <img src={Logo} alt="Imagem Let's Dev" />
      <h3 title={title}>{titulo}</h3>
      {typeof descricao === "string" ? <p>{descricao}</p> : descricao}
    </s.Container>
  );
};

export default Card;
