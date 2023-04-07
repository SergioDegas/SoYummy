import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operation";
import { Page, SingUpForm, Title, Input, Button, Link, LinkContainer, Background, Img, Container } from "./LoginPage.styled";


const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const { email, password } = e;
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
  };
  
  return (
    <Page>
      <div style={{height: 305}}>
        <Container>
          <Img/>
          <SingUpForm>
            <Title>Sign In</Title>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={handleSubmit}
            >
              <Form style={{ display: "flex", flexDirection: "column" }}>
                  <Input
                    type='email'
                    name='email'
                    placeholder='Email'
                  />
                  <Input
                    type='password'
                    name='password'
                    placeholder='Password'
                  />
                  <Button
                  type="submit"
                  >Sign up
                  </Button>
                </Form>
              </Formik>
              <LinkContainer>
              <Link to='/register'>Registration</Link>
              </LinkContainer>
        </SingUpForm>
        </Container>
      </div>
      <Background>
      </Background>
    </Page>
  )
};

export default LoginPage;
