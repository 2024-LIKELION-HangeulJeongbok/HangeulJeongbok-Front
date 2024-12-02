import styled from "styled-components";
import PageTitle from "components/common/PageTitle";
import QuestionCard from "components/question-card/QuestionCard";
import PrevIconSvg from "assets/icons/single-arrow-left.svg";
import NextIconSvg from "assets/icons/single-arrow-right.svg";

const QuestionCardList = styled.div`
  margin-top: 1.5rem;
  padding: 0 10vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
`;
const PagenationContainer = styled.div`
  margin-top: 3.2rem;
  padding: 0 10vw;

  display: flex;
  justify-content: space-between;
`;
const NavPageIcon = styled.img`
  padding: 0.8rem;
  width: 2.5rem;
  height: 2.5rem;

  cursor: pointer;
`;

export default function WrongQuestionPage() {
  return (
    <>
      <PageTitle pageTitle="틀린 문제" />

      <QuestionCardList>
        <QuestionCard
          questionText={"‘폐쇄' 또는 ‘마찰'의 단계를 거쳐 발음되는 소리가 없는 것은?"}
          choice1={"오류"}
          choice2={"회의"}
          isTextLong={false}
          answer={"오류"}
        />
        <QuestionCard
          questionText={"형태소의 개수가 더 많은 것은?"}
          choice1={"언니가 빵을 맛있게 먹었다. 언니가 빵을 맛있게 먹었다."}
          choice2={"나는 높이뛰기를 꽤 잘했다."}
          isTextLong={true}
          answer={"나는 높이뛰기를 꽤 잘했다."}
        />
      </QuestionCardList>

      <PagenationContainer>
        <NavPageIcon src={PrevIconSvg} alt="이전으로" />
        <p> </p>
        <NavPageIcon src={NextIconSvg} alt="다음으로" />
      </PagenationContainer>
    </>
  );
}
