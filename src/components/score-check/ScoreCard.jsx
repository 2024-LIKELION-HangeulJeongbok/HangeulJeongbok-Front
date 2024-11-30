import * as S from "./ScoreCheck.style";
import NextIconSvg from "assets/icons/double-arrow-right.svg";

export default function ScoreCard({ textDate, textScore, isEvenNum = false }) {
  return (
    <>
      <S.CompContainer $isEvenNum={isEvenNum}>
        <S.DateBox>{textDate}</S.DateBox>
        <S.ScoreBox>
          {textScore}점
          <S.NextIcon src={NextIconSvg} />
        </S.ScoreBox>
      </S.CompContainer>
    </>
  );
}
