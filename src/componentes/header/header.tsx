import { LogoLetsDev, LogoPaipe } from "../../imagens";
import * as s from "./styled-header";

const Header = () => {
  return (
    <s.Header>
      <a href="/">
        <img src={LogoLetsDev} />
      </a>
      <a href="https://www.paipe.co" target="_blank" rel="noopener noreferrer">
        <img src={LogoPaipe} />
      </a>
    </s.Header>
  );
};

export default Header;
