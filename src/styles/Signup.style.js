import styled from "styled-components";
import { ContainerDiv as LoginContainerDiv, StyledForm as LoginStyledForm } from "./Login.style";
import { HeaderDiv as MainHeaderDiv } from "components/HeaderLogo/HeaderLogo.style";

export const ContainerDiv = styled(LoginContainerDiv)`
  justify-content: center;
`;

export const HeaderDiv = styled(MainHeaderDiv)`
  margin-bottom: 30px;
`;

export const StyledForm = styled(LoginStyledForm)`
  height: 40vh;
`;
