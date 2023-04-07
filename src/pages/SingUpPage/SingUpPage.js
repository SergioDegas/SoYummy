import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operation";
import { Page, SingUpForm, Title, Input, Button, Link, LinkContainer, Background, Img, Container } from "./SingUpPage.styled";


const SingUpPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const { name, email, password } = e;
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    )
  }
  return (
    <Page>
      <div style={{height: 305}}>
        <Container>
          <Img/>
          <SingUpForm>
            <Title>Registration</Title>
            <Formik
              initialValues={{ name: '', email: '', password: '' }}
              onSubmit={handleSubmit}
            >
              
              <Form style={{ display: "flex", flexDirection: "column" }}>
                <Input
                    type='text'
                    name='name'
                    placeholder='Name'
                  />
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
              <Link to='/signin'>Sign in</Link>
              </LinkContainer>
        </SingUpForm>
        </Container>
      </div>
      <Background>
      </Background>
    </Page>
  )
};

export default SingUpPage;
