import { useContext } from "react";
import { MyContext } from "../../contexto";
import { FormEvent } from "react";
import * as s from "./styled-login";
import { ImgLogin, LogoLetsDev } from "../../imagens";
import { InputButton } from "../../componentes";

const Login = () => {
  const { nomeUsuario, setNomeUsuario } = useContext(MyContext);

  const enviaFormulario = (event: FormEvent) => {
    event.preventDefault();
    let nomeInput = document.getElementById("nomeInput") as HTMLInputElement;
    let nomeInformado = nomeInput.value;
    setNomeUsuario(nomeInformado);
    localStorage.setItem("nomeUsuario", nomeUsuario);
    window.location.href = "/home";
  };

  return (
    <s.Container>
      <s.Row>
        <s.ContainerImg>
          <img src={ImgLogin} alt="Logo do Programa Lets Dev" />
        </s.ContainerImg>
        <s.ContainerForm>
          <img src={LogoLetsDev} />
          <h1>O Evento que vai transformar a sua carreira!</h1>
          <form onSubmit={enviaFormulario}>
            <h3>Acesse Gratuitamente:</h3>
            <s.ContainerInput>
              <label>Nome:</label>
              <input
                type="text"
                placeholder="Digite o seu nome"
                title="Digite o seu nome"
                id="nomeInput"
                required
              />
            </s.ContainerInput>
            <s.ContainerInput>
              <label>E-mail:</label>
              <input
                type="email"
                placeholder="Digite o seu melhor email"
                title="Digite o seu melhor email"
              />
            </s.ContainerInput>
            <div>
              <InputButton
                type="submit"
                title="Clique para efetuar o login"
                value="Entrar"
              />
            </div>
          </form>
        </s.ContainerForm>
      </s.Row>
    </s.Container>
  );
};

export default Login;
