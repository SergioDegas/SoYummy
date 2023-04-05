import { Page, List, LogoBg, Link, Logo, Title, Text } from "./WellcomePage.styled";

const WellcomePage = () => {
  return (
    <Page style={{
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <List>
        <LogoBg>
          <Logo/>
        </LogoBg>
        <Title>
          <h2>Welcome to the app!</h2>
        </Title>
        <Text>
          <p>This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time.</p>
        </Text>
        <li>
          <Link to='/register'>Registration</Link>
          <Link to='/signin'>Sign In</Link>
        </li>
      </List>
    </Page>
  )
}

export default WellcomePage;