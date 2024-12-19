import * as S from "./ScoreCheck.style";
import NextIconSvg from "assets/icons/double-arrow-right.svg";

export default function ScoreCard({
  textDate = "2024-00-00",
  textScore = "00",
  isEvenNum = false,
}) {
  return (
    <>
      <S.CompContainer $isEvenNum={isEvenNum}>
        <S.DateBox>{textDate ? textDate : "2024-00-00"}</S.DateBox>
        <S.ScoreBox>
          {textScore ? textScore : "00"}점
          <S.NextIcon src={NextIconSvg} />
        </S.ScoreBox>
      </S.CompContainer>
    </>
  );
}
