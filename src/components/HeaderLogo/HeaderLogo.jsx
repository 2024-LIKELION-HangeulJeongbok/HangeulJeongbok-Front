import logo from "../../img/logo.png";
import { HeaderDiv } from "./HeaderLogo.style";

const HeaderLogo = () => {
  return (
    <HeaderDiv>
      <img src={logo} />
    </HeaderDiv>
  );
};

export default HeaderLogo;
