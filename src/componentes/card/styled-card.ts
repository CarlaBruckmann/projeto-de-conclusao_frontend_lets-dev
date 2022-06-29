import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  width: 260px;

  a {
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: var(--color-roxo);
    margin: 20px 0;

    :hover {
      text-decoration: underline;
    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    color: var(--color-preto);
  }
`;
