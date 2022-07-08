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
  padding: 90px 40px 90px 40px;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px;
  background: rgba(35, 31, 32, 0.93);

  h1 {
    font-style: italic;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.6875rem;
    text-align: center;
    color: #ffffff;
  }

  img {
    margin: 40px 0;
    max-width: 100%;
  }

  h2,
  p {
    font-weight: 400;
    line-height: 1.625rem;
    color: #ffffff;
  }

  h2 {
    font-size: 1.5rem;
    text-align: center;
  }
  p {
    font-size: 1rem;
    text-align: center;
    margin: 10px 0;
  }
`;

export const GroupCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 30px;

  img {
    width: auto;
    height: auto;
  }

  @media (max-width: 991px) {
    input {
      margin: 10px 0;
    }
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    input {
      margin: 25px 0 0 0;
    }
    img {
      width: 50%;
      height: auto;
      margin: auto;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 1.625rem;
    margin-bottom: 15px;
    color: var(--color-roxo);
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    color: var(--color-preto);
    margin: 10px 0;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  margin-top: 15px;
`;
