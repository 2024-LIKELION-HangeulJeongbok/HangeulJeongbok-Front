import styled, { keyframes, css } from "styled-components";

const scaleUpVerCenter = keyframes`
  0% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(1);
  }
`;

const hideSplash = keyframes`
  from{
    opacity:1;
    }
  to{
    opacity:0;
    visibility: hidden;
  }`;

export const SplashContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f3c8;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed; // 상단에 고정
  top: 0;
  left: 0;

  animation: ${hideSplash} 1s ease-in-out forwards;
  animation-delay: 1s;
`;

export const ImageDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AnimatedLogo = styled.img`
  object-fit: contain;
  width: 50px;
  height: auto;
  animation: ${({ delay }) =>
    css`
      ${scaleUpVerCenter} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    `};
  animation-delay: ${({ delay }) => delay};
`;
