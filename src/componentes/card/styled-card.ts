import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  width: 260px;

  a {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.625rem;
    color: var(--color-roxo);
    margin: 20px 0;

    :hover {
      text-decoration: underline;
    }
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.625rem;
    color: var(--color-preto);
  }
`;
