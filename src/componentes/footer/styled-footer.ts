import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  background-color: #231f20;
  padding: 50px;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    text-decoration: underline;
    color: white;
    font-weight: 600;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  p {
    color: white;
    text-align: right;
  }
  p:first-child {
    font-weight: 500;
    font-style: italic;
  }
  p:nth-child(2) {
    font-weight: 600;
  }
`;
