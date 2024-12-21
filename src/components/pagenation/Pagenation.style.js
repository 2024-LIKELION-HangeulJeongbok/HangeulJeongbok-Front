import styled from "styled-components";
import font from "styles/font";

export const CompContainer = styled.div`
  margin-top: min(7.3vh, 6rem);
  width: 24.8rem;

  justify-self: center;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 7.2rem;
  left: 50%; /* 화면의 가로 중앙으로 설정 */
  transform: translateX(-50%); /* 가로 중앙 정렬 */
`;
export const IconContainer = styled.img`
  padding: 0.8rem;

  cursor: pointer;
`;
export const PageNumContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  ${font.int_regular_16}
`;
export const PageNum = styled.p`
  cursor: pointer;
`;
