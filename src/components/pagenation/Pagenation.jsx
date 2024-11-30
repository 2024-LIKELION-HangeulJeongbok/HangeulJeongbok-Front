import * as S from "./Pagenation.style";
import PreviousIconSvg from "assets/icons/double-triangle-left.svg";
import NextIconSvg from "assets/icons/double-triangle-right.svg";

export default function Pagenation() {
  return (
    <>
      <S.CompContainer>
        <S.IconContainer src={PreviousIconSvg} />
        <S.PageNumContainer>
          <S.PageNum>1</S.PageNum>
          <S.PageNum>2</S.PageNum>
          <S.PageNum>3</S.PageNum>
          <S.PageNum>4</S.PageNum>
          <S.PageNum>5</S.PageNum>
        </S.PageNumContainer>
        <S.IconContainer src={NextIconSvg} />
      </S.CompContainer>
    </>
  );
}
