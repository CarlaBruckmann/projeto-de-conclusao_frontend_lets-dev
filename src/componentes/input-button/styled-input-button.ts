import styled from "styled-components";

interface InputButtonProps {
  outlined?: boolean;
}
export const InputButton = styled.input<InputButtonProps>`
  text-align: center;
  &[type="submit"],
  &::-webkit-file-upload-button,
  &.outlined {
    width: 225px;
    padding: 10px;
    height: 35px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
  }
  &[type="submit"] {
    background-color: var(--color-roxo);
    color: white;
    border: none !important;

    :hover {
      box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
    }
  }
  &::-webkit-file-upload-button,
  &.outlined {
    border: 1px solid var(--color-roxo);
    color: var(--color-roxo);
    background: none;
    font-family: "Montserrat";
    margin-right: 30px;
    :hover {
      background: var(--color-roxo);
      color: white;
    }
  }
`;
