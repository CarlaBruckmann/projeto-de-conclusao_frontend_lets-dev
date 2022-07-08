import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 90px 40px 20px 40px;

  h1 {
    font-style: italic;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.6875rem;
    text-align: center;
    color: var(--color-roxo);
    margin-bottom: 90px;
  }

  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.625rem;
    text-align: center;
    color: var(--color-preto);
  }

  p.desc {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    color: var(--color-preto);
    margin-top: 10px;
  }

  h3 {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.625rem;
    color: var(--color-roxo);
    margin: 60px 0 30px 0;
    width: 100%;
  }

  ul {
    width: 100%;

    li {
      margin-left: 20px;
      font-weight: 400;
      font-size: 1rem;
      line-height: 2.1875rem;
      color: var(--color-preto);

      a {
        font-weight: 400;
        font-size: 1rem;
        line-height: 2.1875rem;
        text-decoration-line: underline;
        color: #1b3bae;
      }
    }
  }
  img {
    width: 90%;
    margin-bottom: 60px;
  }

  span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    color: #000000;

    strong {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.625rem;
      color: #000000;
    }
  }
`;

export const Objetivo = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.625rem;
  color: var(--color-preto);
  width: 100%;

  strong {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: var(--color-roxo);
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 30px;
  margin: 40px 0 40px 0;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    text-align: center;
    margin-bottom: 30px;
  }

  div {
    width: 100%;
  }

  div.resCep {
    margin: 40px 0 100px 0;
    height: 1.625rem;
  }

  input[type="text"] {
    border: 1px solid var(--color-preto);
    width: 100%;
    margin-top: 10px;
    padding: 11px;
    border-radius: 5px;

    :focus {
      outline: 1px solid var(--color-roxo);
    }
  }
  input[type="submit"] {
    margin-top: 27px;
    @media (max-width: 767px) {
      margin-top: 0;
    }
  }
`;
