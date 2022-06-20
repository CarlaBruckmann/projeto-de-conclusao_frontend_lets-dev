import styled from "styled-components";

interface LabelProps {
  htmlFor?: string;
}
export const Label = styled.label<LabelProps>`
  font-weight: 500;
  ${(props) => {
    if (props.htmlFor) return "cursor:pointer";
  }};
`;
