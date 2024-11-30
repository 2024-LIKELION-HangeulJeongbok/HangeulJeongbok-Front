import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackIconSvg from "assets/icons/back-icon-brown.svg";
import LogoSvg from "assets/logo/logo-83x33.svg";

const CompContainer = styled.div`
  padding: 1rem 1.4rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;
const BackIconBtn = styled.img`
  padding: 0.8rem;
  justify-self: start;

  cursor: pointer;
`;
const LogoImg = styled.img`
  padding-bottom: 1rem;
  justify-self: center;
`;

export default function Topbar() {
  const navigate = useNavigate();

  const handleMoveToMain = () => {
    navigate(`/main`);
  };

  return (
    <>
      <CompContainer>
        <BackIconBtn onClick={handleMoveToMain} src={BackIconSvg} />
        <LogoImg src={LogoSvg} />
      </CompContainer>
    </>
  );
}
