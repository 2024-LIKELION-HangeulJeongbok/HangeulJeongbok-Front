import styled from "styled-components";
import { ContainerDiv as LoginContainerDiv, StyledForm as LoginStyledForm } from "./Login.style";
import { HeaderDiv as MainHeaderDiv } from "components/HeaderLogo/HeaderLogo.style";

export const ContainerDiv = styled(LoginContainerDiv)`
  justify-content: center;
`;

export const StyledForm = styled(LoginStyledForm)`
  height: 40vh;
`;
