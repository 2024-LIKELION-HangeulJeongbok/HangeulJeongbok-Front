import { Input } from "components/Input/Input.style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import HeaderLogo from "components/HeaderLogo/HeaderLogo";
import { ContainerDiv, ErrorMsg, P, PassCheckDiv, StyledForm } from "styles/Signup.style";
import { SubmitBtn } from "components/SubmitBtn/SubmitBtn.style";

const Signup = () => {
  const navigate = useNavigate();
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

  const generateRandomUsername = () => {
    return "익명" + Date.now() + Math.random().toString(36).substring(2, 15);
  };

  const onSubmit = async (data) => {
    console.log("폼 데이터 제출", data);

    // 데이터 준비
    const requestData = {
      username: generateRandomUsername(),
      userid: data.id,
      password: data.password,
      password2: data.passwordCheck,
    };

    try {
      // API 요청
      const response = await fetch("https://www.yuyujr.store/users/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      // 응답 처리
      if (response.ok) {
        const result = await response.json();
        console.log(result);

        if (result.message === "회원가입에 실패했습니다.") {
          alert(`${result.message}`);
          return;
        }

        localStorage.setItem("token", result.token);

        navigate("/login");
      } else {
        const errResult = await response.json();
        console.log("회원가입 실패");
      }
    } catch (error) {
      console.log("회원가입 요청 중 오류 발생", error);
    }
  };
  return (
    <ContainerDiv>
      <div style={{ marginBottom: "30px" }}>
        <Link to="/login">
          <HeaderLogo />
        </Link>
      </div>
      <div>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input type={"text"} {...register("id")} placeholder="아이디" />

          <Input type={"password"} {...register("password")} placeholder="비밀번호" />

          <PassCheckDiv>
            <Input
              type={"password"}
              {...register("passwordCheck")}
              placeholder="비밀번호 확인"
              className="passwordCheck"
              style={{
                border: errors.passwordCheck ? "1px solid red" : "",
              }}
            />
            <ErrorMsg>
              <P>{errors.passwordCheck?.message}</P>
            </ErrorMsg>
          </PassCheckDiv>

          <SubmitBtn type={"submit"} value={"회원가입"} />
        </StyledForm>
      </div>
    </ContainerDiv>
  );
};

export default Signup;
