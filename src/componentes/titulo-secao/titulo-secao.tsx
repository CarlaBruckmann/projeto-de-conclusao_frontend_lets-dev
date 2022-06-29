import * as s from "./styled-titulo-secao";

interface TituloSecaoProps {
  titulo: string;
  semDivisoria?: boolean;
}

const TituloSecao = ({ titulo, semDivisoria }: TituloSecaoProps) => {
  return (
    <s.Container>
      <h2>{titulo}</h2>
      {!semDivisoria && <hr />}
    </s.Container>
  );
};

export default TituloSecao;
