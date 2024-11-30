import styled from "styled-components";
import font from "styles/font";

export const CompContainer = styled.div`
  margin-top: min(7.3vh, 6rem);
  width: 24.8rem;

  justify-self: center;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
