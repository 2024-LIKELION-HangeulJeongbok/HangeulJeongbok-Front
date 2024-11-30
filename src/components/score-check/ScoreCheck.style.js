import styled from "styled-components";
import font from "styles/font";

// list
export const ListContainer = styled.ul`
  margin-top: 2rem;
  padding: 0 10vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

// card
export const CompContainer = styled.li`
  width: 100%;
  max-width: 30rem;
  height: 5rem;

  display: flex;
  align-items: center;

  border-radius: 3px;

  border: 1px solid ${(props) => (props.$isEvenNum ? "rgba(174, 142, 142, 0.4)" : "#f1ec81")};
  background: ${(props) => (props.$isEvenNum ? "rgba(174, 142, 142, 0.25)" : "#fffdce")};
`;
export const DateBox = styled.div`
  padding-left: min(1.5rem, 4vw);
  width: 50%;
  height: 3.8rem;

  border-right: 1px dashed #000;

  ${font.ng_regular_20}
  line-height: 3.8rem;
`;
export const ScoreBox = styled.div`
  padding-left: min(4vw, 1.5rem);
  width: 50%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${font.ng_regular_24}
`;
export const NextIcon = styled.img`
  padding-right: min(4vw, 1.5rem);
`;
