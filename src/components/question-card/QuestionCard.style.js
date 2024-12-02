import styled from "styled-components";
import font from "styles/font";

export const CompContainer = styled.div`
  width: 100%;
  max-width: 30rem;

  border-radius: 3px;
  border: 1px solid #000;
  background: #fffffa;
`;
export const SubTitleText = styled.p`
  margin: 1rem;
  ${font.do_regular_12}
`;
export const QuestionText = styled.p`
  margin: 0 1rem 1rem 1rem;
  ${font.ng_regular_12}
`;
export const ChoiceContainer = styled.div`
  margin-bottom: 2rem;

  display: flex;
  flex-direction: ${(props) => (props.$isTextLong ? "column" : "row")};
  justify-content: center;
  align-items: center;

  background-color: #f4f8c4;

  ${font.sn_regular_17}
`;
export const ChoiceText = styled.p`
  margin: 1.4rem 1.2rem;
  min-width: 11.4rem;
  max-width: 27.6rem;

  text-align: center;
`;
export const ChoiceVs = styled.p`
  margin: 0.6rem 0;
  justify-self: center;

  ${font.sn_regular_12}
  text-align: center;
  white-space: nowrap;
`;
export const DividerLine = styled.div`
  margin: 0 0.7rem;
  border-top: 1px dashed #000;
`;

export const StarList = styled.div`
  margin: 0 1rem 1rem 1rem;

  display: flex;
  justify-content: flex-start;
`;
export const StarImg = styled.img`
  width: 2.2rem;
  height: 2.2rem;
`;
