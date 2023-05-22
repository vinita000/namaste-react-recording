import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  return(
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validates = {values =>{
          const errors = {};
          if(!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            navigate('/');
          }, 400);
        }}
      >

      {({ isSubmitting }) => (
        <Form>
          {console.log(isSubmitting)}
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}

      </Formik>
    </div>
  )
}

export default Login;