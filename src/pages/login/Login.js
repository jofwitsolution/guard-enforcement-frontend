import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/tailwind';
import { Formik, Form } from 'formik';
import { MyTextInput } from '../../components/forms';
import RotatingLinesLoader from '../../components/loaders/RotatingLinesLoader';
import { loginSchema } from '../../form-validation/validationSchemas';
import auth from '../../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (values, setSubmitting) => {
    setError('');

    try {
      await auth.login(values);
      setSubmitting(false);
      window.location.href = '/';
    } catch (err) {
      setSubmitting(false);
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    if (auth.getCurrentUser()) navigate('/dashboard');
  }, [navigate]);

  return (
    <div className={`${styles.maxWidth} py-[4rem] flex flex-col items-center`}>
      <h1
        className={`text-[1.5rem] md:text-[2.5rem] font-bold text-blackText text-center`}
      >
        Log in to Guard Enforcement
      </h1>

      <p className='mt-[2rem] text-center'>
        Enter your email address and password
      </p>
      <div className='w-[100%] xs:w-[350px]'>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <MyTextInput
                className={styles.formInput}
                label=''
                name='email'
                type='email'
                placeholder='Email Address'
              />

              <MyTextInput
                className={styles.formInput}
                label=''
                name='password'
                type='password'
                placeholder='Password'
              />
              <button
                className={`${styles.formButton} mt-3 flex items-center justify-center`}
                type='submit'
                disabled={isSubmitting}
              >
                {isSubmitting ? <RotatingLinesLoader /> : 'Log in'}
              </button>
              {error ? (
                <p className='text-red-500 text-center mt-3'>{error}</p>
              ) : null}
            </Form>
          )}
        </Formik>
      </div>
      <p className='mt-[1.5rem] text-center'>
        Don't have an account yet?{' '}
        <Link to='/signup' className='underline'>
          Sign up
        </Link>
      </p>
      <p className='mt-[6rem] text-center'>
        By signing in to Guard Enforcement, you agree to our{' '}
        <Link to='/terms-of-service' className='underline'>
          Terms of Service.
        </Link>
      </p>
    </div>
  );
};

export default Login;
