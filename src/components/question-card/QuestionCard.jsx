import * as S from "./QuestionCard.style";
import StarOnSvg from "assets/icons/star-on.svg";
import StarOffSvg from "assets/icons/star-off.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function QuestionCard({
  isTextLong = true,
  questionText,
  choice1,
  choice2,
  answer,
  starRating = false,
  starId,
  isDark = false,
  pageSelected,
}) {
  const [authToken, setAuthToken] = useState(null);
  const [starNum, setStarNum] = useState(starRating);

  useEffect(() => {
    setAuthToken(localStorage.getItem("token"));
  }, []);
  const api = axios.create({
    baseURL: "https://www.yuyujr.store/",

    headers: {
      Authorization: `Token ${authToken}`,
    },
  });
  async function postApi(rateNum) {
    try {
      const response = await api.post(`quiz/history/${starId}/rate/`, {
        rating: rateNum,
      });
      // console.log("starId: ", starId);
      // console.log("api연결: ", response.data); // 성공
    } catch (error) {
      console.error("api연결 실패:", error.response?.data || error.message);
    }
  }
  const handleBtn = (num) => {
    setStarNum(num);
    postApi(num);
  };
  useEffect(() => {
    setStarNum(starRating);
  }, [pageSelected]);

  return (
    <>
      <S.CompContainer $isDark={isDark}>
        <S.SubTitleText>문제</S.SubTitleText>
        <S.QuestionText>{questionText}</S.QuestionText>
        {/* 최대 7글자 */}
        <S.ChoiceContainer $isTextLong={isTextLong}>
          <S.ChoiceText>{choice1}</S.ChoiceText>
          <S.ChoiceVs>VS</S.ChoiceVs>
          <S.ChoiceText>{choice2}</S.ChoiceText>
        </S.ChoiceContainer>
        <S.DividerLine />
        {starNum !== false ? (
          <>
            <S.SubTitleText>정복 정도</S.SubTitleText>
            <S.StarList>
              {Array.from({ length: starNum }, (_, index) => (
                <S.StarImg
                  onClick={() => handleBtn(index + 1)}
                  key={index}
                  src={StarOnSvg}
                  alt="채워진 별"
                />
              ))}
              {Array.from({ length: 5 - starNum }, (_, index) => (
                <S.StarImg
                  onClick={() => handleBtn(starNum + index + 1)}
                  key={index}
                  src={StarOffSvg}
                  alt="빈 별"
                />
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
