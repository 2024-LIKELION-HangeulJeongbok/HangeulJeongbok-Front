import { Link } from "react-router-dom";
import { styled } from "styled-components";
import font from "styles/font";

const Text = styled.p`
  margin: 0;
  ${() => font.regular_20}
`;

export default function NotFound() {
  return (
    <>
      <Text>잘못된 경로입니다.</Text>
      <br />
      <Link to="/landing">
        <Text>로그인 화면으로 가기</Text>
      </Link>
      <Link to="/home">
        <Text>홈 화면으로 가기</Text>
      </Link>
    </>
  );
}
