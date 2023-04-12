import Container from "Components/Container/Container.styled";
import {
  FooterContainer,
  TitleContainer,
  MainContainer,
  MainBox,
} from "./Footer.Styled";
import { useState } from "react";
import { useEffect } from "react";
import { Benefits } from "Components/FooterComponents/Benefits";
import { Menu } from "Components/FooterComponents/Menu";
import { Social } from "Components/FooterComponents/Social";
import {TitleLogo} from "Components/FooterComponents/Logo-Title";
import { Policy } from "Components/FooterComponents/Policy";
import { Mail } from "Components/FooterComponents/Mail";

const Footer = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLargeScreen) {
    return (
      <>
        <FooterContainer>
          <Container>
            <MainBox>
              <TitleContainer>
                <TitleLogo/>
                <Benefits/>
              </TitleContainer>
              <Menu/>
              <Mail/>
            </MainBox>
            <Social/>
          </Container>
          <Policy/>
        </FooterContainer>
      </>
    );
  }
  return (
    <>
      <FooterContainer>
        <Container>
          <MainContainer>
            <TitleContainer>
              <TitleLogo/>
              <Benefits/>
            </TitleContainer>
            <Menu/>
          </MainContainer>
          <Mail/>
          <Social/>
        </Container>
        <Policy/>
      </FooterContainer>
    </>
  );
};

export default Footer;
