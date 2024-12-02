import { Input } from "components/Input/Input.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import HeaderLogo from "components/HeaderLogo/HeaderLogo";
import SubmitBtn from "components/SubmitBtn/SubmitBtn";
import { ContainerDiv, StyledForm } from "styles/Signup.style";

const Signup = () => {
  // 유효성 검사
  const schema = yup.object().shape({
    id: yup.string().required(),
    password: yup.string().required(),
    passwordCheck: yup.string().oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  });

  // schema 연결
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };
  return (
    <ContainerDiv>
      <div>
        <Link to="/login">
          <HeaderLogo />
        </Link>
      </div>
      <div>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input type={"text"} {...register("id")} placeholder="아이디" />

          <Input type={"password"} {...register("password")} placeholder="비밀번호" />

          <Input type={"password"} {...register("passwordCheck")} placeholder="비밀번호 확인" />
          <p>{errors.passwordCheck?.message}</p>

          <Link to="/login">
            <SubmitBtn type={"submit"} value={"회원가입"} />
          </Link>
        </StyledForm>
      </div>
    </ContainerDiv>
  );
};

export default Signup;
