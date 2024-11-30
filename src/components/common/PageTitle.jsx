import styled from "styled-components";
import font from "styles/font";

const TitleText = styled.h2`
  margin-top: 5.5rem;

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
