import PageTitle from "components/common/PageTitle";
import ScoreList from "components/score-check/ScoreList";
import Pagenation from "components/pagenation/Pagenation";

export default function CheckScorePage() {
  return (
    <>
      <PageTitle pageTitle="점수 확인" />
      <ScoreList />
      <Pagenation />
    </>
  );
}
