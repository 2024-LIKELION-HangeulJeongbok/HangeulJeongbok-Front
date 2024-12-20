import PageTitle from "components/common/PageTitle";
import ScoreList from "components/score-check/ScoreList";
import Pagenation from "components/pagenation/Pagenation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CheckScorePage() {
  const [pageSelected, setPageSelected] = useState(1);
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
      const response = await api.get(`quiz/history/`);
      setDataList(response.data.history);

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
      <PageTitle pageTitle="점수 확인" />

      {dataList.length > 0 && <ScoreList dataList={dataList} />}

      <Pagenation
        pageLength={Math.ceil((dataList.length + 1) / 8)}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      />
    </>
  );
}
