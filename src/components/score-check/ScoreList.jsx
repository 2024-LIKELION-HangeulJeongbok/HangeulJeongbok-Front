import * as S from "./ScoreCheck.style";
import ScoreCard from "./ScoreCard";

export default function ScoreList({ dataList }) {
  return (
    <>
      <S.ListContainer>
        {dataList.map((data, index) => (
          <ScoreCard
            key={data.id}
            textDate={data.completed_date}
            textScore={data.score}
            isEvenNum={index % 2}
          />
        ))}
      </S.ListContainer>
    </>
  );
}
