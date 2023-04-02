import axios from "axios";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { Img, Page, BgImg, SingUpForm } from "./LoginPage.styled";

const LoginPage = () => {
  return (
    <Page>
      <Img alt="" src="https://res.cloudinary.com/dtv1xlisg/image/upload/v1680302456/so_yummy/auth/OrderFood-pana1_moqvfj.svg" />
      <div>
        <BgImg>
          <SingUpForm>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={async (values) => {
                const authData = {
                  email: values.email,
                  password: values.password
                };
                try {
                  const response = await axios.post('http://localhost:4000/auth/login', authData);
                  if (response) {
                    localStorage.setItem('token', response.data.token);
                    window.location = '/';
                  }
                } catch (e) {
                  console.log(e.response.data.message);
                }
              }}
            >
              <Form>
                <Field
                  type='email'
                  name='email'
                  placeholder='Email'
                />
                <Field
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                <button
                  type="submit"
                >Sign in</button>
              </Form>
            </Formik>
            <Link to='/register' >Registration</Link>
           </SingUpForm>
        </BgImg>
      </div>
    </Page>
  )
};

export default LoginPage;
