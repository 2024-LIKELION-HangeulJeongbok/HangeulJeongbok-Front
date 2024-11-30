import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <Link to="/">
        <h2>MainPage</h2>
      </Link>
      <br />

      <Link to="/check-score">
        <h2>점수 확인</h2>
      </Link>
      <br />
      <Link to="/wrong-question">
        <h2>틀린 문제</h2>
      </Link>
      <br />
      <Link to="/subjugation-question">
        <h2>문제 정복</h2>
      </Link>
    </>
  );
}
