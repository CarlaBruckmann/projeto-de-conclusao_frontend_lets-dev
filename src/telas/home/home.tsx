import * as s from "./styled-home";
import {
  Footer,
  Header,
  TituloSecao,
  Card,
  InputButton,
} from "../../componentes";
import { Logo, ImgDescricao } from "../../imagens";
import { useContext } from "react";
import { MyContext } from "../../contexto";

const Home = () => {
  const { nomeUsuario, setNomeUsuario } = useContext(MyContext);

  const telas = [
    {
      titulo: "Formulário em HTML e CSS",
      link: "/form-basico",
      title: "Clique para ir ao formulário básico",
      descricao: (
        <p>
          O primeiro <i>“Hello World”</i> a gente nunca esquece. O primeiro
          formulário feito na aula de Introdução ao HTML e CSS.
        </p>
      ),
    },
    {
      titulo: "Formulário 2.0",
      link: "/form-completo",
      title: "Clique para ir ao formulário 2.0",
      descricao: (
        <p>
          O primeiro <i>“console.log”</i> a gente também não esquece. O
          formulário funcional e agora com React JS + HTML + CSS.
        </p>
      ),
    },
    {
      titulo: "Consumindo API's",
      link: "/consumindo-apis",
      title: "Clique para ir a página de consumo de API",
      descricao:
        "Brincando com a API viaCEP, informando um CEP, salvando os valores digitados no estado e mostrando os dados na tela.",
    },
    {
      titulo: "A PAIPE e os Paipers",
      link: "/sobre-paipers",
      title:
        "Clique para ir a página descritiva da Paipe e professores do Lets Dev",
      descricao:
        "Uma página bônus de presente para deixar o seu projeto ainda mais completo. E de quebra ficar por dentro do que acontece na Paipe.",
    },
  ];

  return (
    <s.Container>
      <Header />
      <s.Banner>
        <h1>
          Que prazer te ver aqui
          {nomeUsuario ? ", " + nomeUsuario : ""}!
        </h1>
        <s.Container>
          {nomeUsuario ? (
            <div style={{ marginTop: "25px" }}>
              <InputButton
                outlined
                type="button"
                title="Remover nome de usuário"
                value="Remover nome de Usuário"
                onClick={() => localStorage.removeItem("nomeUsuario")}
              />
            </div>
          ) : (
            ""
          )}
        </s.Container>
        <img src={Logo} />
        <h2>
          Seja bem-vindo(a) ao Lets Dev! O evento que vai transformar sua
          carreira.
        </h2>
        <p>
          Você está no módulo Front-end e vai aprender a criar um site básico do
          zero.
        </p>
      </s.Banner>
      <s.Content>
        <TituloSecao titulo="O que fizemos até agora..." />

        <s.GroupCards>
          {telas.map((card) => (
            <Card
              key={card.titulo}
              titulo={card.titulo}
              link={card.link}
              title={card.title}
              descricao={card.descricao}
            />
          ))}
        </s.GroupCards>

        <TituloSecao titulo="Um pouco sobre mim..." />

        <s.Row>
          <img src={ImgDescricao} alt="Foto de Carla Bruckmann" />
          <s.Column>
            <h3>Carla Bruckmann</h3>
            <p>
              Sou estudante do <i>Let's Dev</i>, mãe da Alice e dois gatos
              fofos, fã de séries, futura patinadora e Desenvolvedora FrontEnd.
              <br />
              Tenho 29 anos, estudei e trabalhei no setor Administrativo, com
              experiência em resolução de problemas e gestão de projetos/
              contratos. Sou uma profissional comunicativa e facilitadora, com
              capacidade analítica e pensamento conceitual, dedicada a aprender
              e evoluir.
            </p>
            <p>
              Em 2021, decidi trilhar meu caminho na área da tecnologia,
              participando de diversos cursos como
              <i> Responsive Web Design</i> da FreeCodeCamp e
              <i> Desenvolvimento Full Stack</i> da Gama Academy, focando em
              desenvolvimento FrontEnd.
              <br />
              Quero ser exemplo para a minha filha, incentivar e mostrar que ela
              pode ser o que quiser, que veja uma mulher conquistando espaços,
              fazendo a diferença e participando ativamente da transformação
              digital.
            </p>
            <p>
              No momento, busco aquela primeira oportunidade para aplicar
              conhecimentos adquiridos e desenvolver a potência que tenho dentro
              de mim! &#x1F680;
            </p>
            <s.ButtonGroup>
              <InputButton
                outlined
                type="button"
                title="Acessar o Linkedin de Carla Bruckmann"
                value="LinkedIn"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/carlabruckmann/",
                    "_blank"
                  );
                }}
              />
              <InputButton
                type="submit"
                title="Acessar o GitHub do Projeto"
                value="Ver perfil"
                onClick={() => {
                  window.open("https://github.com/CarlaBruckmann", "_blank");
                }}
              />
            </s.ButtonGroup>
          </s.Column>
        </s.Row>
      </s.Content>
      <Footer />
    </s.Container>
  );
};

export default Home;
