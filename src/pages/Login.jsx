import { Input } from "components/Input/Input.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Link, useNavigate } from "react-router-dom";
import HeaderLogo from "components/HeaderLogo/HeaderLogo";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import styled from "styled-components";
import { ContainerDiv, StyledForm } from "styles/Login.style";
import { ErrorMsg, P, PassCheckDiv } from "styles/Signup.style";
import { useState } from "react";
import Splash from "components/Splash/Splash";

const Login = () => {
  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggined] = useState(false);

  const navigate = useNavigate();

  // 유효성 검사
  const schema = yup.object().shape({
    id: yup.string().required("아이디를 입력해주세요"),
    password: yup.string().required("비밀번호를 입력해주세요."),
  });

  // schema 연결
  const {
    register,
    handleSubmit,
    setError, // 에러 메세지 설정
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("폼 데이터 제출", data);

    try {
      const response = await fetch("https://www.yuyujr.store/users/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: data.id,
          password: data.password,
        }),
      });

      const result = await response.json();

      console.log("response", response);

      if (response.ok) {
        console.log("로그인 성공", result);

        if (result.message === "로그인에 실패했습니다.") {
          setError("password", {
            type: "manual",
            message: "비밀번호가 일치하지 않습니다.",
          });
          return;
        }

        localStorage.setItem("token", result.token);

        navigate("/home");
      } else {
        console.log("로그인 실패", result.message);
      }
    } catch (error) {
      console.log("로그인 요청 중 오류 발생", error);
    }
  };

  return (
    <>
      <ContainerDiv>
        <div style={{ marginBottom: "-50px" }}>
          <HeaderLogo />
        </div>
        <div>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <PassCheckDiv>
              <Input
                type={"text"}
                {...register("id")}
                placeholder="아이디"
                style={{
                  border: errors.id ? "1px solid red" : "",
                }}
              />
              <ErrorMsg>
                <P>{errors.id?.message}</P>
              </ErrorMsg>
            </PassCheckDiv>

            <PassCheckDiv>
              <Input
                type={"password"}
                {...register("password")}
                placeholder="비밀번호"
                style={{
                  border: errors.password ? "1px solid red" : "",
                }}
              />
              <ErrorMsg>
                <P>{errors.password?.message}</P>
              </ErrorMsg>
            </PassCheckDiv>

            <SubmitBtn type={"submit"} value={"로그인"} />
          </StyledForm>
        </div>

        <TextDiv>
          <p>- 계정이 없으신가요? - </p>
          <br></br>
          <p style={{ fontWeight: "700", textDecoration: "underline" }}>
            <Link to="/signup">계정 생성</Link>
          </p>
        </TextDiv>
      </ContainerDiv>
      <Splash />
    </>
  );
};

export default Login;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
