import { Formik, Form, ErrorMessage, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operation";
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
 import * as Yup from 'yup';
import { Page, SingUpForm, Title, Input, Button, Link, LinkContainer, Background, Img, Container, InputContainer, InputSt } from "./RegisterPage.styled";
import { useState } from "react";


const RegisterPage = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = e => {
    const { name, email, password } = e;
    // dispatch(
    //   register({
    //     name: name,
    //     email: email,
    //     password: password,
    //   })
    // )
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
              validationSchema={Yup.object().shape({
              name: Yup.string().required("Name is required"),
              email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
              password: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                  console.log(values)
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form style={{ display: "flex", flexDirection: "column" }}>
                <InputContainer>
                  <Field
                    name='name'
                    >
                      {({ field }) => (<InputSt>
                        <AiOutlineUser style={{ position: 'absolute', left: 15, top: 15, width: 24, height: 24 }} />
                        <Input type="text" id="name" autoComplete="off" placeholder="Name" {...field} />
                      </InputSt>)}
                    </Field>
                    <ErrorMessage name="name"/>
                </InputContainer>
                <InputContainer>
                  <Field
                    name='email'
                    >
                      {({ field }) => (<InputSt>
                        <HiOutlineMail style={{ position: 'absolute', left: 15, top: 15, width: 24, height: 24 }} />
                        <Input type="email" id="email" autoComplete="off" placeholder="Email" {...field} />
                      </InputSt>)}
                    </Field>
                    <ErrorMessage name="email" render={msg => <div style={{color: "red"}}>{msg}</div>}/>
                  </InputContainer>
                <InputContainer>
                  <Field
                    name='password'
                    >
                      {({ field }) => (<InputSt>
                        <RiLockPasswordLine style={{ position: 'absolute', left: 15, top: 15, width: 24, height: 24, color: "currentcolor" }} />
                        <Input type="password" id="password" autoComplete="off" placeholder="Password"{...field} />
                      </InputSt>)}
                    </Field>
                    <ErrorMessage name="password" />
                  </InputContainer>
                  <Button
                  type="submit"
                  >Sign up
                  </Button>
                </Form>
              )}
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

export default RegisterPage;
