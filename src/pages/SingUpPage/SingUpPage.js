import axios from "axios";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { Img, Page, BgImg, SingUpForm, Title, Input, Button } from "./SingUpPage.styled";
import authPic from '../../images/authPic.svg'

const SingUpPage = () => {
  return (
    <Page>
      <Img alt="" src={authPic} />
      <BgImg>
        <SingUpForm>
          <div style={{ margin: "0px 28px" }}>
            <Title>Registration</Title>
            <Formik
              initialValues={{ name: '', email: '', password: '' }}
              onSubmit={async (values) => {
                const authData = {
                  name: values.name,
                  email: values.email,
                  password: values.password
                };
                try {
                  const response = await axios.post('http://localhost:4000/auth/register', authData);
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
                >Sign up</Button>
              </Form>
            </Formik>
          </div>
          <Link style={{ color: "white", textDecorationLine: "underline" }} to='/signin'>Sign in</Link>
        </SingUpForm>
      </BgImg>
    </Page>
  )
};

export default SingUpPage;
