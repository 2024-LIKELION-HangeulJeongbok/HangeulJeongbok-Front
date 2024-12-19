import PageTitle from "components/common/PageTitle";
import ScoreList from "components/score-check/ScoreList";
import Pagenation from "components/pagenation/Pagenation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ApiTestPage() {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    setAuthToken(localStorage.getItem("token"));
    // 7f382c9d85266d664c58602b1506f7f511981648
    // 16// 91828a74b2603b3604470e9525c39832c0d81c28
    // 17// 4dccc91f8d009c30b364c2fb50ee960aa9772489
  }, []);

  const api = axios.create({
    baseURL: "https://www.yuyujr.store/",

    headers: {
      Authorization: `Token ${authToken}`,
    },
  });

  async function postApiTest() {
    try {
      // 회원가입
      // const response = await api.post(`users/register/`, {
      //   username: "이름17",
      //   userid: "dkdlel17",
      //   password: "qlalfqjsgh17",
      //   password2: "qlalfqjsgh17",
      // });

      // 로그인
      // const response = await api.post(`users/login/`, {
      //   userid: "dkdlel17",
      //   password: "qlalfqjsgh17",
      // });

      // GET,POST-퀴즈응시 및 제출//
      // const response = await api.get(`quiz/quizes/`);
      // const response = await api.post(`quiz/quizes/`, {
      //   quiz_id: 10,
      //   selected_option: 2,
      // });

      // 결과 확인//
      // const response = await api.get(`quiz/score/`);

      // 틀린문제 보러가기
      // const response = await api.get(`quiz/incorrect/`);

      // (page02)점수 확인
      // const response = await api.get(`quiz/history/`);

      // (page02)점수 확인-틀린 문제
      // const response = await api.get(`quiz/history/2024-12-19/incorrect/`);

      // (page03&4)틀린 문제&문제 정복
      const response = await api.get(`quiz/history/incorrect/all/`);

      console.log("api연결: ", response.data); // 성공
    } catch (error) {
      console.error("api연결 실패:", error.response?.data || error.message);
    }
  }
  const handleApiBtn = () => {
    postApiTest();
  };

  return (
    <>
      <button onClick={handleApiBtn}>api 버튼</button>
    </>
  );
}
