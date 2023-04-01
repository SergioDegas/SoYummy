import axios from "axios";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { Img, Page, BgImg, SingUpForm } from "./SingUpPage.styled";

const SingUpPage = () => {
  return (
    <Page>
      <Img alt="" src="https://res.cloudinary.com/dtv1xlisg/image/upload/v1680302456/so_yummy/auth/OrderFood-pana1_moqvfj.svg" />
      <div>
        <BgImg>
          <SingUpForm>
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
                  console.log(response);
                } catch (e) {
                  console.log(e)
                }
              }}
            >
              <Form>
                <Field
                  type='text'
                  name='name'
                  placeholder='Name'
                />
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
                >Sign up</button>
              </Form>
            </Formik>
            <Link >Sign in</Link>
           </SingUpForm>
        </BgImg>
      </div>
    </Page>
  )
};

export default SingUpPage;
