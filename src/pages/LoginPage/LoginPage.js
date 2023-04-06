import axios from "axios";
import { Formik, Form } from "formik";
import { Page, SingUpForm, Title, Input, Button, Link, LinkContainer, Background, Img, Container } from "./LoginPage.styled";


const LoginPage = () => {
  return (
    <Page>
      <div style={{height: 305}}>
        <Container>
          <Img/>
          <SingUpForm>
            <Title>Sign In</Title>
            <Formik
              initialValues={{ name: '', email: '', password: '' }}
              onSubmit={async (values) => {
                const authData = {
                  name: values.name,
                  email: values.email,
                  password: values.password
                };
                try {
                  const response = await axios.post('http://localhost:4000/auth/login', authData);
                  if (response) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('user', JSON.stringify(response.data.user))
                    window.location = '/';
                  }
                } catch (e) {
                  console.log(e.response.data.message)
               
                }
                }}
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
