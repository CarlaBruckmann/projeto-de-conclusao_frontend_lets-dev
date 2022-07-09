import { FormEvent } from "react";
import * as s from "./styled-login";
import { ImgLogin } from "../../imagens";
import { InputButton } from "../../componentes";
import { useContext } from "react";
import { MyContext } from "../../contexto";

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
          <form>
            <h1>
              Seja bem-vindo(a) ao Lets Dev! O evento que vai transformar sua
              carreira.
            </h1>
            <p>O Evento que vai transformar a sua carreira</p>
          </form>
          <div>
            <h3>Acesse Gratuitamente:</h3>
            <form onSubmit={enviaFormulario}>
              <div>
                <label>Nome:</label>
                <input
                  type="text"
                  placeholder="Digite o seu nome"
                  title="Digite o seu nome"
                  id="nomeInput"
                  required
                />
              </div>
              <div>
                <label>E-mail:</label>
                <input
                  type="email"
                  placeholder="Digite o seu melhor email"
                  title="Digite o seu melhor email"
                />
              </div>
              <div>
                <InputButton
                  type="submit"
                  title="Clique para efetuar o login"
                  value="Entrar"
                />
              </div>
            </form>
          </div>
        </s.ContainerForm>
      </s.Row>
    </s.Container>
  );
};

export default Login;
