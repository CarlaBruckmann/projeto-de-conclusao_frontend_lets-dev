import * as s from "./styled-consumindo-apis";
import { Footer, Header, InputButton } from "../../componentes";
import axios from "axios";
import { useState, useContext } from "react";
import { MyContext } from "../../contexto";
import { ImgSearch } from "../../imagens/index";
import { Divisor } from "../form-completo/styled-form-completo";

interface Localidade {
  localidade?: string;
  uf?: string;
}

const ConsumindoApis = () => {
  const { nomeUsuario, setNomeUsuario } = useContext(MyContext);
  const [CEP, setCEP] = useState("");
  const [localidade, setLocalidade] = useState<Localidade>({});

  function buscaLocalidade(cep: string) {
    const baseURL = "https://viacep.com.br/ws";

    axios
      .get(`${baseURL}/${cep}/json`)
      .then((resposta) => setLocalidade(resposta.data))
      .catch((erro) => console.log("ERRO", erro));
  }

  return (
    <s.Container>
      <Header />
      <s.Content>
        <h1>Consumindo API's</h1>
        <h2>Que tal sair da teoria e meter a mão no código?</h2>
        <p className="desc">
          Agora é sua vez de consumir uma API e mostrar os dados em tela.
        </p>

        <Divisor />

        <s.Objetivo>
          <strong>Objetivo:</strong> Fazer a conexão com a API do Via CEP usando
          o Axios.
        </s.Objetivo>

        <h3>Instruções:</h3>

        <ul>
          <li>Criar a função que faz a requisição;</li>
          <li>Utilizar a seguinte baseURL: “https://viacep.com.br/ws/”;</li>
          <li>
            No GET, utilizar o caminho `cep/json` (ex.: `93700000/json`), onde o
            CEP vai só com números;
          </li>
          <li>Salvar no estado o valor digitado no input;</li>
          <li>Quando clicar no botão, chama a requisição no onClick;</li>
          <li>
            Mostrar em tela o nome da cidade, seguido do estado (ex.: Campo Bom
            - Rio Grande do Sul);
          </li>
          <li>
            Na dúvida, sempre acesse a documentação:
            <a href="https://viacep.com.br/" target="_blank">
              https://viacep.com.br/
            </a>
          </li>
        </ul>

        <Divisor />
        <s.Row>
          <s.Container>
            <img src={ImgSearch} alt="Ilustração de busca" />
          </s.Container>
          <s.ContainerSearch>
            <div>
              <h2>Olá{nomeUsuario ? ", " + nomeUsuario : ""}!</h2>
              <p className="desc">
                Por favor, preencha o CEP abaixo para a efetuar busca:
              </p>
            </div>
            <s.Row>
              <div>
                <label>CEP:</label>
                <input
                  type="text"
                  placeholder="Digite o CEP (somente números)"
                  title="Digite o número do CEP"
                  value={CEP}
                  onChange={(evento) => setCEP(evento.target.value)}
                  maxLength={8}
                />
              </div>
              <InputButton
                type="submit"
                title="Clique para efetuar a busca"
                value="Buscar"
                onClick={() => buscaLocalidade(CEP)}
              />
            </s.Row>
            <div className="resCep">
              {localidade.localidade ? (
                <span>
                  <strong>Cidade pesquisada: </strong>
                  {localidade.localidade} -{localidade.uf}
                </span>
              ) : (
                ""
              )}
            </div>
          </s.ContainerSearch>
        </s.Row>
      </s.Content>
      <Footer />
    </s.Container>
  );
};

export default ConsumindoApis;
