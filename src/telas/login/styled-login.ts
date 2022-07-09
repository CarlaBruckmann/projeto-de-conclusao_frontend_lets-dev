import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 5px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 40px 40px;
  background-color: rgba(225, 212, 236, 0.17);
  border-radius: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ContainerImg = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  img {
    width: 80%;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  padding: 20px 40px 40px 40px;
  border-radius: 0 10px 10px 0;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 25.3125rem;
  min-height: 100%;
  background-color: var(--color-preto);

  @media (max-width: 767px) {
    max-width: 90%;
    border-radius: 10px;
  }

  img {
    width: 70%;
  }

  h1 {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 2.1875rem;
    text-align: center;
    color: var(--color-cinza);
    margin-bottom: 30px;
  }

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 2.1875rem;
    text-align: center;
    color: var(--color-cinza);
  }

  form {
    border: 1px solid var(--color-roxo);
    border-radius: 10px;
    padding: 20px;
  }

  label {
    color: var(--color-cinza);
  }

  input[type="text"],
  input[type="email"] {
    border: 1px solid var(--color-roxo);
    width: 100%;
    margin-top: 10px;
    padding: 11px;
    border-radius: 5px;

    :focus {
      outline: 1px solid var(--color-roxo);
    }
  }

  input[type="submit"] {
    margin-top: 30px;
  }
`;

export const ContainerInput = styled.div`
  margin-top: 20px;
`;
