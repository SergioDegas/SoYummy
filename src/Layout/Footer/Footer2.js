import Container from "Components/Container/Container.styled";
import { SiFacebook, SiYoutube, SiTwitter, SiInstagram } from "react-icons/si";
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
} from "./FooterExStyled";

const Footerrr = () => {
  return (
    <FooterContainer>
      <Container>
        <TitleBox>
          <LogoContainer>
            <LogoIcon />
          </LogoContainer>
          <Title>So Yummy</Title>
        </TitleBox>

        <MenuList>
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
        <EmailBox>
          <EmailInput type="email" 
            placeholder="Enter your email address" />
          <EmailIcon />
        </EmailBox>
        <EmailBtn type="submit">Subscribe</EmailBtn>
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
        <p>
          &copy; 2023 All Rights Reserved.<span>Terms of Service</span>
        </p>
      </Container>
    </FooterContainer>
  );
};

export default Footerrr;
