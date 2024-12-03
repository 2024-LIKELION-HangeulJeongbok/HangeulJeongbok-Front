import logo1 from "img/logo1.png";
import logo2 from "img/logo2.png";
import logo3 from "img/logo3.png";
import logo4 from "img/logo4.png";
import { SplashContainer, ImageDiv, AnimatedLogo } from "./Splash.style";

const Splash = () => {
  return (
    <SplashContainer>
      <ImageDiv>
        <AnimatedLogo src={logo1} delay="0s" />
        <AnimatedLogo src={logo2} delay="0.1s" />
        <AnimatedLogo src={logo3} delay="0.2s" />
        <AnimatedLogo src={logo4} delay="0.3s" />
      </ImageDiv>
    </SplashContainer>
  );
};

export default Splash;
