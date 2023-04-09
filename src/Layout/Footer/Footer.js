import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Container from "Components/Container/Container.styled";
import {
  LogoContainer,
  LogoIcon,
  FooterContainer,
  Title,
  TitleBox,
  MenuList,
  MenuItem,
  MenuLink,
  EmailInput,
  EmailBox,
  EmailIcon,
  EmailBtn,
  FacebookIcon,
  YTIcon,
  TwitterIcon,
  InstIcon,
  SocialList,
  BenefitsList,
  Dot,
  BenefitsItem,
  TitleContainer,
  MainContainer,
  MainBox,
  EmailTitle,
  EmailText,
  BenefitText,
  EmailForm,
} from "./Footer.Styled";
import { useState } from "react";
import { useEffect } from "react";

const Footer = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (email.trim() !== '') {
      setIsDisabled(false)
    } else {
      setIsDisabled(true);
    }
  }, [email]);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () =>  window.removeEventListener("resize", handleResize);
    }, []);

    const handleSubmit = (event) => {
      event.preventDefault();
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (emailRegex.test(email)) {
        toast.success('Email was successfully submitted!');
        return;
      } 
      toast.error('Please enter a valid email!');
    //   axios.patch('http://localhost:4000/user/subscription', { email })
    // .then(response => {
    //   toast.success('Email was successfully asdasdasdasdas!');
    // })
    // .catch(error => {
    //   toast.error('Something went wrong. Please try again later!');
    // });
    }
    const onChange = (event) => {
    setEmail(event.target.value)}

    
  if (isLargeScreen) {
    return (
      <>
      <FooterContainer>
        <Container>
          <MainBox>
          <TitleContainer>
          <TitleBox>
            <LogoContainer>
              <LogoIcon />
            </LogoContainer>
            <Title>So Yummy</Title>
          </TitleBox>
          <BenefitsList>
            <BenefitsItem><Dot>&#8226;</Dot>Database of recipes that can be replenished </BenefitsItem>
            <BenefitsItem><Dot>&#8226;</Dot>Flexible search for desired and unwanted
            <BenefitText> ingredients</BenefitText></BenefitsItem>
            <BenefitsItem><Dot>&#8226;</Dot>Ability to add your own recipes with photos</BenefitsItem>
            <BenefitsItem><Dot>&#8226;</Dot>Convenient and easy to use</BenefitsItem>
          </BenefitsList>
          </TitleContainer>
          <MenuList >
            <MenuItem>
              <MenuLink to="/">Ingredients</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/add">Add recipes</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/my">My recipes</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/favorite">Favorite</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/shopping-list">Shopping list</MenuLink>
            </MenuItem>
          </MenuList>
          <EmailForm onSubmit={handleSubmit}>
          <EmailTitle>Subscribe to our Newsletter</EmailTitle>
          <EmailText>Subscribe up to our newsletter. Be in touch with <br/>latest news and special offers, etc.</EmailText>
          <EmailBox>
            <EmailInput type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={onChange}
              />
            <EmailIcon />
          </EmailBox>
          <EmailBtn 
          type="submit"
          disabled={isDisabled}
          >Subscribe</EmailBtn>
          </EmailForm>
          </MainBox>
          <SocialList>
            <li>
              <a href="/">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <YTIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <InstIcon />
              </a>
            </li>
          </SocialList>
         
        </Container>
      </FooterContainer>
    </>
    );
  };
  return (
    <>
    <FooterContainer>
      <Container>
        <MainContainer>
        <TitleContainer>
        <TitleBox>
          <LogoContainer>
            <LogoIcon />
          </LogoContainer>
          <Title>So Yummy</Title>
        </TitleBox>
        <BenefitsList>
          <BenefitsItem><Dot>&#8226;</Dot>Database of recipes that can be replenished </BenefitsItem>
          <BenefitsItem><Dot>&#8226;</Dot>Flexible search for desired and unwanted ingredients</BenefitsItem>
          <BenefitsItem><Dot>&#8226;</Dot>Ability to add your own recipes with photos</BenefitsItem>
          <BenefitsItem><Dot>&#8226;</Dot>Convenient and easy to use</BenefitsItem>
        </BenefitsList>
        </TitleContainer>
        <MenuList >
          <MenuItem>
            <MenuLink to="/">Ingredients</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/add">Add recipes</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/my">My recipes</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/favorite">Favorite</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/shopping-list">Shopping list</MenuLink>
          </MenuItem>
        </MenuList>
        </MainContainer>
        <EmailForm>
        <EmailBox>
        <EmailTitle>Subscribe to our Newsletter</EmailTitle>
        <EmailText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</EmailText>
        <EmailInput type="email" 
            placeholder="Enter your email address" />
          <EmailIcon />
        </EmailBox>
        <EmailBtn type="submit">Subscribe</EmailBtn>
        </EmailForm>
        <SocialList>
          <li>
            <a href="/">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="/">
              <YTIcon />
            </a>
          </li>
          <li>
            <a href="/">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="/">
              <InstIcon />
            </a>
          </li>
        </SocialList>
       
      </Container>
    </FooterContainer>
  </>
  );
  }

  export default Footer;