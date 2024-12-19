import styled from "styled-components";
import { useApi } from "apis/api";
import PageTitle from "components/common/PageTitle";
import QuestionCard from "components/question-card/QuestionCard";
import Pagenation from "components/pagenation/Pagenation";
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

export default function SubjugationQuestionPage() {
  const [dataList, setDataList] = useState([]);
  const [pageSelected, setPageSelected] = useState(1);
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
      const response = await api.get(`quiz/history/incorrect/all/`);
      setDataList(response.data.sessions[0].incorrect_questions);

      // console.log("api연결: ", response.data); // 성공
    } catch (error) {
      console.error("api연결 실패:", error.response?.data || error.message);
    }
  }
  useEffect(() => {
    if (authToken) {
      getApi();
    }
    // console.log(Math.ceil((dataList.length + 1) / 2));
  }, [authToken]);

  return (
    <>
      <PageTitle pageTitle="문제 정복" />

      {dataList.length > 0 ? (
        <>
          <QuestionCardList>
            <QuestionCard
              questionText={dataList[pageSelected - 1].question}
              choice1={dataList[pageSelected - 1].options_list[0]}
              choice2={dataList[pageSelected - 1].options_list[1]}
              starRating={dataList[pageSelected - 1].rating}
              isTextLong={true}
            />
            {(dataList.length % 2 == 0 ||
              Math.ceil((dataList.length + 1) / 2) !== pageSelected) && (
              <QuestionCard
                questionText={dataList[pageSelected].question}
                choice1={dataList[pageSelected].options_list[0]}
                choice2={dataList[pageSelected].options_list[1]}
                starRating={dataList[pageSelected].rating}
                isTextLong={true}
              />
            )}
          </QuestionCardList>

          <Pagenation
            pageLength={Math.ceil((dataList.length + 1) / 2)}
            pageSelected={pageSelected}
            setPageSelected={setPageSelected}
          />
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
