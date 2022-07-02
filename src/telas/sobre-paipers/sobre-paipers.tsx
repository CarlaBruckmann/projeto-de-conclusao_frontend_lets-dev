import { ReactNode } from "react";
import * as s from "./styled-sobre-paipers";
import { Header, Footer, TituloSecao } from "../../componentes";
import Titulo from "../../componentes/Titulo";
import {
  SimboloPaipe,
  SimboloLetsDev,
  FotoMarcos,
  FotoUesleiSuptitz,
} from "../../imagens";
import {
  LogoFacebookIcon,
  LogoInstagramIcon,
  LogoLinkedInIcon,
  LogoYouTubeIcon,
} from "../../icones";

interface FotoDescricaoProps {
  titulo: string;
  descricao: string | ReactNode;
  image?: string;
  rightImage?: boolean;
}

interface LinkProps {
  icone: ReactNode;
  link: string;
  descricao?: string;
}

const SobrePaipers = () => {
  const FotoDescricao = ({
    titulo,
    descricao,
    image,
    rightImage,
  }: FotoDescricaoProps) => (
    <s.Row rightImage={rightImage}>
      <img src={image} alt="Símbolo da Paipe" />
      <s.Column>
        <h2>{titulo}</h2>
        {typeof descricao === "string" ? <p>{descricao}</p> : descricao}
      </s.Column>
    </s.Row>
  );

  const Link = ({ icone, link, descricao }: LinkProps) => (
    <s.Link href={link} target="_blank">
      {icone} {descricao}
    </s.Link>
  );

  return (
    <s.Container>
      <Header />
      <s.Content>
        <Titulo titulo="Um pouco sobre..." />

        <s.Group>
          <FotoDescricao
            titulo="A Paipe"
            descricao={
              <p>
                Somos uma empresa de TI que tem como propósito{" "}
                <strong>Transformar Vidas e Negócios</strong>. Acreditamos no
                poder do conhecimento, no trabalho colaborativo e na humanização
                dos processos, afinal, se{" "}
                <strong>Importa Para Você, Então Importa Para Nós</strong>.
              </p>
            }
            image={SimboloPaipe}
          />
          <FotoDescricao
            titulo="O Let's Dev"
            descricao="É um marco do nosso propósito. Através do Let’s Dev oportunizamos a entrada de pessoas de todas as idades, sem qualquer distinção, tendo conhecimento prévio ou não na área do desenvolvimento. Não importa se você está iniciando sua carreira profissional ou buscando migrar de carreira, todos com brilho nos olhos são bem-vindos!"
            image={SimboloLetsDev}
            rightImage
          />
        </s.Group>

        <s.ColumnIcons>
          <TituloSecao titulo="A Paipe nas redes" semDivisoria />
          <s.GroupIcons>
            <Link
              icone={<LogoInstagramIcon />}
              link="https://www.instagram.com/paipe.co/"
            />
            <Link
              icone={<LogoFacebookIcon />}
              link="https://www.facebook.com/paipe.co/"
            />
            <Link
              icone={<LogoLinkedInIcon />}
              link="https://www.linkedin.com/company/paipeco"
            />
            <Link
              icone={<LogoYouTubeIcon />}
              link="https://www.youtube.com/channel/UCpJ81INdQksLLoQp_FQaf0w"
            />
          </s.GroupIcons>
        </s.ColumnIcons>

        <s.Group>
          <FotoDescricao
            titulo="Marcos Padilha"
            descricao="Professor do Módulo Front-end no Let’s Dev. Formado Técnico em Informática no IFSul câmpus Sapiranga, estudante de Design Gráfico e Marketing Digital. Entrou na Paipe em 2020 e atua como desenvolvedor front-end web, além de ser um dos “tutores não oficiais” dos novos devs."
            image={FotoMarcos}
          />
          <FotoDescricao
            titulo="Uéslei Suptitz"
            descricao="Também Professor do Módulo Front-end. Formado Técnico em Informática no IFSul câmpus Sapiranga e estudante de Análise e Desenvolvimento de Sistemas. Na Paipe desde 2019, atua como desenvolvedor front-end web e mobile, além de ser um dos “tutores não oficiais” dos novos devs. "
            image={FotoUesleiSuptitz}
            rightImage
          />
        </s.Group>

        <s.ColumnIcons>
          <TituloSecao titulo="Os Paipers nas redes" semDivisoria />
          <s.GroupIcons>
            <Link
              icone={<LogoLinkedInIcon />}
              link="https://www.linkedin.com/in/marcos-padilha-6b48901b9"
              descricao="Marcos Padilha"
            />
            <Link
              icone={<LogoLinkedInIcon />}
              link="https://www.linkedin.com/in/u%C3%A9slei-suptitz"
              descricao="Uéslei Suptitz"
            />
          </s.GroupIcons>
        </s.ColumnIcons>
      </s.Content>
      <Footer />
    </s.Container>
  );
};

export default SobrePaipers;
