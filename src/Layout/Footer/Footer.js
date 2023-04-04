import Container from "Components/Container/Container.styled";

import {
  LogoContainer,
  LogoIcon,
  FooterTitle,
  BenefitsItem,
  BenefitsList,
  FooterContainer,
  InfoContainer,
  HeadContainer,
  Dot,
  MainContainer,
  BenefitText,
  MenuList,
  MenuItem,
  EmailTitle,
  EmailText,
  EmailInput,
  MailIcon,
  MailContainer,
  MailBtn,
  FacebookIcon,
  YTIcon,
  TwitterIcon,
  InstIcon,
  SocialContainer,
  Link,
} from "./FooterStyled";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
      <MainContainer>
        <InfoContainer>
          <HeadContainer>
            <LogoContainer>
              <LogoIcon />
            </LogoContainer>
            <FooterTitle>So Yummy</FooterTitle>
          </HeadContainer>
          <BenefitsList>
            <BenefitsItem>
              <Dot>&#8226;</Dot>Database of recipes that can be replenished{" "}
            </BenefitsItem>
            <BenefitsItem>
              <Dot>&#8226;</Dot>
              Flexible search for desired and unwanted
              <BenefitText>ingredients</BenefitText>
            </BenefitsItem>
            <BenefitsItem>
              <Dot>&#8226;</Dot>Ability to add your own recipes with photos
            </BenefitsItem>
            <BenefitsItem>
              <Dot>&#8226;</Dot>Convenient and easy to use
            </BenefitsItem>
          </BenefitsList>
        </InfoContainer>
        <MenuList>
          <MenuItem><Link to='/' >Ingredients</Link></MenuItem>
          <MenuItem><Link to='/add'>Add recipes</Link></MenuItem>
          <MenuItem><Link to='/my'>My recipes</Link></MenuItem>
          <MenuItem><Link to='/favorite'>Favorite</Link></MenuItem>
          <MenuItem><Link to='/shopping-list'>Shopping list</Link></MenuItem>
        </MenuList>
        <div>
        <EmailTitle>Subscribe to our Newsletter</EmailTitle>
        <EmailText>Subscribe up to our newsletter. Be in touch with 
          <br/>
          latest news and special offers, etc.</EmailText>
        <MailContainer>
        <EmailInput 
        type="email" 
        placeholder="Enter your email address"
        /> 
        <MailIcon />
        </MailContainer>  
        <MailBtn type="submit">Subscribe</MailBtn>
      </div>
      </MainContainer>
      
      <SocialContainer>
      <li><FacebookIcon/></li>
      <li><YTIcon/></li>
      <li><TwitterIcon/></li>
      <li><InstIcon/></li>
      </SocialContainer>
      </Container>
    </FooterContainer>
   
  );
};

export default Footer;
