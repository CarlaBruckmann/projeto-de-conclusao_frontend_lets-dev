import { LogoLetsDev, LogoPaipe } from "../../imagens";
import * as s from "./styled-header";

const Header = () => {
  return (
    <s.Header>
      <a href="/">
        <img src={LogoLetsDev} title="Clique para ir a Página Inicial" />
      </a>
      <a
        href="https://www.paipe.co"
        target="_blank"
        rel="noopener noreferrer"
        title="Clique para ir ao site da Paipe"
      >
        <img src={LogoPaipe} alt="Logo da Paipe" />
      </a>
    </s.Header>
  );
};

export default Header;
