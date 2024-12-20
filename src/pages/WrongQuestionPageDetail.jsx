import styled from "styled-components";
import PageTitle from "components/common/PageTitle";
import QuestionCard from "components/question-card/QuestionCard";
import PrevIconSvg from "assets/icons/single-arrow-left.svg";
import NextIconSvg from "assets/icons/single-arrow-right.svg";
import { useEffect, useState } from "react";
import axios from "axios";

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

export default function WrongQuestionPageDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const date = urlParams.get("date");

  const [pageSelected, setPageSelected] = useState(1);
  const [pageLength, setPageLength] = useState(1);
  const [dataList, setDataList] = useState([]);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    setAuthToken(localStorage.getItem("token"));
  }, []);
  const api = axios.create({
    baseURL: "https://www.yuyujr.store/",

    headers: {
      Authorization: `Token ${authToken}`,
    },
  });
  async function getApi() {
    try {
      const response = await api.get(`quiz/history/${date}/incorrect/`);
      setDataList(response.data.incorrect_questions);
      setPageLength(Math.ceil(response.data.incorrect_questions.length / 2));

      console.log("api연결: ", response.data); // 성공
    } catch (error) {
      console.error("api연결 실패:", error.response?.data || error.message);
    }
  }
  useEffect(() => {
    if (authToken) {
      getApi();
    }
  }, [authToken]);

  return (
    <>
      <PageTitle pageTitle="틀린 문제" />

      {dataList.length > 0 ? (
        <>
          <QuestionCardList>
            <QuestionCard
              questionText={dataList[pageSelected * 2 - 2].question}
              choice1={dataList[pageSelected * 2 - 2].options[0]}
              choice2={dataList[pageSelected * 2 - 2].options[1]}
              answer={
                dataList[pageSelected * 2 - 2].options[
                  dataList[pageSelected * 2 - 2].correct_answer - 1
                ]
              }
              isTextLong={true}
            />
            {(dataList.length % 2 == 0 ||
              Math.ceil((dataList.length + 1) / 2) !== pageSelected) && (
              <QuestionCard
                questionText={dataList[pageSelected * 2 - 1].question}
                choice1={dataList[pageSelected * 2 - 1].options[0]}
                choice2={dataList[pageSelected * 2 - 1].options[1]}
                answer={
                  dataList[pageSelected * 2 - 1].options[
                    dataList[pageSelected * 2 - 1].correct_answer - 1
                  ]
                }
                isTextLong={true}
              />
            )}
          </QuestionCardList>

          <PagenationContainer>
            <NavPageIcon
              onClick={() => setPageSelected(pageSelected !== 1 ? pageSelected - 1 : 1)}
              src={PrevIconSvg}
              alt="이전으로"
            />
            <p> </p>
            <NavPageIcon
              onClick={() =>
                setPageSelected(pageLength !== pageSelected ? pageSelected + 1 : pageLength)
              }
              src={NextIconSvg}
              alt="다음으로"
            />
          </PagenationContainer>
        </>
      ) : (
        // 로딩 화면
        <QuestionCardList>
          <QuestionCard
            questionText={"문제 로딩중..."}
            choice1={"문제 로딩중..."}
            choice2={"문제 로딩중..."}
            starRating={0}
            isTextLong={true}
          />
          <QuestionCard
            questionText={"문제 로딩중..."}
            choice1={"문제 로딩중..."}
            choice2={"문제 로딩중..."}
            starRating={0}
            isTextLong={true}
          />
        </QuestionCardList>
      )}
    </>
  );
}
