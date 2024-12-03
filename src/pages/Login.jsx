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
    id: yup.string().required(),
    password: yup.string().required(),
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

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);

    // ex) id, password 맞을 때에만 home으로 이동하도록
    if (data.id === "test" && data.password === "password") {
      setIsLoggined(true);
      navigate("/home");
    } else {
      setError("password", {
        type: "manual",
        message: "비밀번호가 일치하지 않습니다.",
      });
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
            <Input type={"text"} {...register("id")} placeholder="아이디" />

            <PassCheckDiv>
              <Input
                type={"password"}
                {...register("password")}
                placeholder="비밀번호"
                style={{
                  border: errors.passwordCheck ? "1px solid red" : "",
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
