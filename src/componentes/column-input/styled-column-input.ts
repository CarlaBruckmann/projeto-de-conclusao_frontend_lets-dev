import styled from "styled-components";

export const ColumnInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 70px;
  &.input-text {
    width: 100%;
  }
  &.select {
    width: 30%;
  }
  input[type="text"],
  input[type="number"],
  input[type="submit"],
  select,
  textarea,
  button {
    border: 1px solid var(--color-preto);
    padding: 10px;
    height: 35px;
    border-radius: 5px;

    :focus {
      outline: 1px solid var(--color-roxo);
    }
  }
  select {
    padding: 0 5px;
    cursor: pointer;
  }
`;
