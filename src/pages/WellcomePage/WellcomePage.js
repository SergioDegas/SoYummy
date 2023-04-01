import { Page, List, LogoBg, Link  } from "./WellcomePage.styled";

const WellcomePage = () => {
  return (
    <Page style={{
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <List>
        <LogoBg>
          <img alt='logo' src={'https://res.cloudinary.com/dtv1xlisg/image/upload/v1680299385/so_yummy/Logo/Logo_whp3vi.png'} />
        </LogoBg>
        <li style={{
          color: "#FAFAFA",
          textAlign: "center",
          marginBottom: 44,
        }}>
          <h2>Welcome to the app!</h2>
          <p>This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time.</p>
        </li>
        <li>
          <Link to='/registration'>Registration</Link>
          <Link>Sign In</Link>
        </li>
      </List>
    </Page>
  )
}

export default WellcomePage;