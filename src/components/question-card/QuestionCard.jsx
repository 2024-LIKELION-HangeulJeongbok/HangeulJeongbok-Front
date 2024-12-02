import * as S from "./QuestionCard.style";
import StarOnSvg from "assets/icons/star-on.svg";
import StarOffSvg from "assets/icons/star-off.svg";

export default function QuestionCard({
  isTextLong = true,
  questionText,
  choice1,
  choice2,
  answer,
  starRating = false,
}) {
  return (
    <>
      <S.CompContainer>
        <S.SubTitleText>문제</S.SubTitleText>
        <S.QuestionText>{questionText}</S.QuestionText>
        {/* 최대 7글자 */}
        <S.ChoiceContainer $isTextLong={isTextLong}>
          <S.ChoiceText>{choice1}</S.ChoiceText>
          <S.ChoiceVs>VS</S.ChoiceVs>
          <S.ChoiceText>{choice2}</S.ChoiceText>
        </S.ChoiceContainer>
        <S.DividerLine />
        {starRating !== false ? (
          <>
            <S.SubTitleText>정복 정도</S.SubTitleText>
            <S.StarList>
              {Array.from({ length: starRating }, (_, index) => (
                <S.StarImg key={index} src={StarOnSvg} alt="채워진 별" />
              ))}
              {Array.from({ length: 5 - starRating }, (_, index) => (
                <S.StarImg key={index} src={StarOffSvg} alt="빈 별" />
              ))}
            </S.StarList>
          </>
        ) : (
          <>
            <S.SubTitleText>정답</S.SubTitleText>
            <S.QuestionText>{answer}</S.QuestionText>
          </>
        )}
      </S.CompContainer>
    </>
  );
}
