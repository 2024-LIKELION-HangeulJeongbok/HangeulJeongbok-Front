import { Input } from "components/Input/Input.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Link } from "react-router-dom";
import HeaderLogo from "components/HeaderLogo/HeaderLogo";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import styled from "styled-components";
import { ContainerDiv, StyledForm } from "styles/Login.style";

const Login = () => {
  // 유효성 검사
  const schema = yup.object().shape({
    id: yup.string().required(),
    password: yup.string().required(),
  });

  // schema 연결
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  return (
    <ContainerDiv>
      <div>
        <HeaderLogo />
      </div>
      <div>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input type={"text"} {...register("id")} placeholder="아이디" />

          <Input type={"password"} {...register("password")} placeholder="비밀번호" />
          <p message={errors.password?.message}></p>

          <SubmitBtn type={"submit"} value={"로그인"} />
        </StyledForm>
      </div>

      <TextDiv>
        <p>- 계정이 없으신가요? - </p>
        <p>
          <Link to="/signup">계정 생성</Link>
        </p>
      </TextDiv>
    </ContainerDiv>
  );
};

export default Login;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
