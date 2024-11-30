import styled from "styled-components";
import font from "styles/font";

const TitleText = styled.h2`
  margin-top: min(4.4vh, 3.6rem);

  display: flex;
  justify-content: center;

  ${font.do_regular_24}
`;
export default function PageTitle({ pageTitle }) {
  return (
    <>
      <TitleText>{pageTitle}</TitleText>
    </>
  );
}
