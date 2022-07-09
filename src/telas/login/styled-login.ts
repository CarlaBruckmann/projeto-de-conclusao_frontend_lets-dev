import styled from "styled-components";
export const Container = styled.div`
  max-width: 1000px;
  padding: 5px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerImg = styled.div`
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 90%;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 40px 40px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  padding: 100px 40px;
  border-radius: 20px;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-cinza);

  p {
    text-align: center;
    margin-bottom: 30px;
  }

  div {
    width: 100%;
  }

  input[type="text"],
  input[type="email"] {
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
