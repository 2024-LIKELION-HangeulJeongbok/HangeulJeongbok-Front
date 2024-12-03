import styled, { keyframes } from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 100vh;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 30vh;
  justify-content: space-evenly;
`;

// splash
const SplashScreen = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Splash 컴포넌트에 애니메이션 적용
export const Splash_ = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f3c8;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${SplashScreen} 5s ease-in-out forwards; // 애니메이션을 추가하고, 끝난 후 상태 유지
`;
