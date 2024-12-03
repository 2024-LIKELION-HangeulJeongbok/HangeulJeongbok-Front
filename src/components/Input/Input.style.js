import styled from "styled-components";
import color from "styles/color";
import font from "styles/font";

export const Input = styled.input`
  width: 76.8vw;
  height: 54px;

  padding: 0;
  border: 1px solid ${(props) => (props.hasError ? "red" : color.black)};
  border-radius: 7px;
  outline: none;

  ${font.ng_regular_20}
  font-size:14px;

  text-indent: 10px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.45);
  }
`;
