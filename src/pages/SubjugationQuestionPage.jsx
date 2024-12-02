import styled from "styled-components";
import PageTitle from "components/common/PageTitle";
import QuestionCard from "components/question-card/QuestionCard";
import Pagenation from "components/pagenation/Pagenation";

const QuestionCardList = styled.div`
  margin-top: 1.5rem;
  padding: 0 10vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
`;

export default function SubjugationQuestionPage() {
  return (
    <>
      <PageTitle pageTitle="문제 정복" />
      <QuestionCardList>
        <QuestionCard
          questionText={"‘폐쇄' 또는 ‘마찰'의 단계를 거쳐 발음되는 소리가 없는 것은?"}
          choice1={"오류"}
          choice2={"회의"}
          isTextLong={false}
          starRating={3}
        />
        <QuestionCard
          questionText={"형태소의 개수가 더 많은 것은?"}
          choice1={"언니가 빵을 맛있게 먹었다. 언니가 빵을 맛있게 먹었다."}
          choice2={"나는 높이뛰기를 꽤 잘했다."}
          isTextLong={true}
          starRating={0}
        />
      </QuestionCardList>
      <Pagenation />
    </>
  );
}
