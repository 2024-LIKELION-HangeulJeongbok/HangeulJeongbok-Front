import * as S from "./ScoreCheck.style";
import ScoreCard from "./ScoreCard";

export default function ScoreList() {
  return (
    <>
      <S.ListContainer>
        <ScoreCard textDate={"2024.09.26"} textScore={80} />
        <ScoreCard textDate={"2024.09.17"} textScore={90} isEvenNum={true} />
        <ScoreCard textDate={"2024.09.02"} textScore={70} />
        <ScoreCard textDate={"2024.08.30"} textScore={100} isEvenNum={true} />
        <ScoreCard textDate={"2024.06.26"} textScore={60} />
        <ScoreCard textDate={"2024.06.03"} textScore={60} isEvenNum={true} />
        <ScoreCard textDate={"2024.05.28"} textScore={70} />
      </S.ListContainer>
    </>
  );
}
