import styled from "styled-components";
import { ContainerDiv as LoginContainerDiv, StyledForm as LoginStyledForm } from "./Login.style";
import { Input } from "../components/Input/Input.style";

export const ContainerDiv = styled(LoginContainerDiv)`
  justify-content: center;
`;

export const StyledForm = styled(LoginStyledForm)`
  height: 40vh;
`;

export const PassCheckDiv = styled.div`
  position: relative;
`;

export const ErrorMsg = styled.div`
  position: absolute;
  top: 40%;
  bottom: 50%;
  right: 4%;
`;

export const P = styled.p`
  color: red;
`;
