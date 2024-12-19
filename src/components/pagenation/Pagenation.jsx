import * as S from "./Pagenation.style";
import PreviousIconSvg from "assets/icons/double-triangle-left.svg";
import NextIconSvg from "assets/icons/double-triangle-right.svg";
import { useEffect, useState } from "react";

export default function Pagenation({ pageLength = 1, pageSelected = 1, setPageSelected }) {
  const [pageNum, setPageNum] = useState(pageLength);

  useEffect(() => {
    setPageNum(pageLength);
  }, [pageLength]);

  return (
    <>
      <S.CompContainer>
        <S.IconContainer
          onClick={() => setPageSelected(pageSelected !== 1 ? pageSelected - 1 : 1)}
          src={PreviousIconSvg}
          alt="이전 페이지"
        />
        <S.PageNumContainer>
          {Array.from({ length: pageNum }, (_, index) => (
            <S.PageNum key={index + 1} onClick={() => setPageSelected(index + 1)}>
              {index + 1}
            </S.PageNum>
          ))}
        </S.PageNumContainer>
        <S.IconContainer
          onClick={() =>
            setPageSelected(pageLength !== pageSelected ? pageSelected + 1 : pageLength)
          }
          src={NextIconSvg}
          alt="다음 페이지"
        />
      </S.CompContainer>
    </>
  );
}
