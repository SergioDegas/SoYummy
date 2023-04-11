import {
  Logo,
  ContainerWelcome,
  Title,
  Text,
  NavBox,
  StyledLink,
} from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <ContainerWelcome>
      <Logo/>
      <Title>Welcome to the app!</Title>
      <Text>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </Text>
      <NavBox>
        <StyledLink to="/register">Registration</StyledLink>
        <StyledLink to="/signin">Sign in</StyledLink>
      </NavBox>
    </ContainerWelcome>
  );
};

export default WelcomePage;