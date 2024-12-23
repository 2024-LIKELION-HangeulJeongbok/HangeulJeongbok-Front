import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Text = styled.p`
  margin: 0;
  font-size: 2rem;
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
        <Text>메인 화면으로 가기</Text>
      </Link>
    </>
  );
}
