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
  padding: 5.625rem 2.5rem;
`;

interface RowProps {
  rightImage?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: ${({ rightImage }) => (rightImage ? "row-reverse" : "row")};
  align-items: center;
  gap: 25px;
  text-align: ${({ rightImage }) => (rightImage ? "right" : "left")};

  img {
    width: 9.375rem;
    height: 9.375rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;

    img {
      width: 6.25rem;
      height: 6.25rem;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-weight: 600;
    font-size: 1.875rem;
    line-height: 1.625rem;
    color: var(--color-preto);
  }

  p {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.875rem;
    color: var(--color-preto);

    strong {
      font-weight: 500;
      font-style: italic;
    }
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  margin: 1.25rem 0 3.75rem 0;
`;

export const ColumnIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const GroupIcons = styled.div`
  display: flex;
  gap: 1.25rem;
  width: 100%;
  margin: 1.25rem 0 3.75rem 0;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: var(--color-preto);

  :hover {
    text-decoration: underline;

    svg {
      transform: scale(1.5);

      path {
        fill: var(--color-roxo);
      }
    }
  }
`;
