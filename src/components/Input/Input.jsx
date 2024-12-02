import * as S from "./Input.style";

const Input = ({ type, placeholder, register, value }) => {
  return <S.Input type={type} {...register} placeholder={placeholder}></S.Input>;
};

export default Input;
