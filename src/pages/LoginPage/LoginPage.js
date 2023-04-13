import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
  FormAuth,
  TitleForm,
  BoxForForm,
  BoxForField,
  FormField,
  Button,
  Warning,
  BoxForIcon,
  EmailIcon,
  PassIcon,
  Page,
  Container,
  Img,
  Background,
} from './LoginPage.styled';
import { logIn } from 'redux/auth/operation';
import { Link } from 'react-router-dom';
import { selectIsLoading } from 'redux/auth/selectors';
import Loader from 'Components/Loader';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const schemaRegValidation = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, 'Invalid email address, try again')
    .required('This field is required'),
  password: yup
    .string()
    .min(3, 'Your password is short')
    .required('This field is required'),
});

export const schemaLoginValidation = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, 'Invalid email address, try again')
    .required('This field is required'),
  password: yup
    .string()
    .min(3, 'Your password is short')
    .required('This field is required'),
});

const getColor = (
  errors,
  touched,
  defaultColor = 'rgba(255, 255, 255, 0.8)'
) => {
  if (
    errors === 'Your password is short' ||
    errors === 'Your password is too long'
  ) {
    return '#F6C23E';
  }
  return touched ? (errors && '#E74A3B') || '#3CBC81' : defaultColor;
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleSubmit = (values, actions) => {
    const authData = {
      email: values.email,
      password: values.password,
    };
    dispatch(logIn(authData))
    actions.resetForm();
  };
  return (
    <Page>
      <div style={{ height: 305 }}>
        {isLoading && <Loader />}
        {!isLoading && (
          <Container>
          <Img />
          <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={schemaRegValidation}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <FormAuth>
            <TitleForm>Sign In</TitleForm>
            <BoxForForm>
              <BoxForField>
                <BoxForIcon>
                  <EmailIcon
                    stroke={getColor(errors.email, touched.email)}
                  />
                </BoxForIcon>
                <FormField
                  type="email"
                  name="email"
                  placeholder="Email"
                  color={getColor(errors.email, touched.email)}
                />
                {errors.email && touched.email ? (
                  <Warning color={getColor(errors.email, touched.email)}>
                    {errors.email}
                  </Warning>
                ) : null}
              </BoxForField>
              <BoxForField>
                <BoxForIcon>
                  <PassIcon
                    stroke={getColor(errors.password, touched.password)}
                  />
                </BoxForIcon>
                <FormField
                  type="password"
                  name="password"
                  placeholder="Password"
                  color={getColor(errors.password, touched.password)}
                />
                {errors.password && touched.password ? (
                  <Warning
                    color={getColor(errors.password, touched.password)}
                  >
                    {errors.password}
                  </Warning>
                ) : null}
              </BoxForField>
            </BoxForForm>
                <Button type="submit">Sign in</Button>
                <Link to="/register" style={{color: "white", textDecoration: 'underline', marginLeft: "auto", marginRight: "auto"}}>Registration</Link>
          </FormAuth>
            )}
          </Formik>
        </Container>
        )}
      </div>
      <Background></Background>
    </Page>
  );
};


export default LoginPage;