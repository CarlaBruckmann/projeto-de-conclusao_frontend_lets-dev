import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 60px;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 15px;
  }
`;
