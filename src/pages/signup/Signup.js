import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/tailwind';
import { Formik, Form } from 'formik';
import { MyTextInput } from '../../components/forms';
import RotatingLinesLoader from '../../components/loaders/RotatingLinesLoader';
import { signupSchema } from '../../form-validation/validationSchemas';

const Signup = () => {
  const [error, setError] = useState('');

  const handleSubmit = (values, isSubmitting) => {
    console.log(values);
  };

  return (
    <div className={`${styles.maxWidth} py-[4rem] flex flex-col items-center`}>
      <h1 className={`${styles.headerTwoBlack} text-center`}>
        Create a Guard Enforcement account
      </h1>

      <p className='mt-[2rem] text-center'>
        Sign up with your names, email and a password.
      </p>
      <div className='w-[100%] xs:w-[350px]'>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          validationSchema={signupSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <MyTextInput
                className={styles.formInput}
                label=''
                name='firstName'
                type='text'
                placeholder='First Name'
              />

              <MyTextInput
                className={styles.formInput}
                label=''
                name='lastName'
                type='text'
                placeholder='Last Name'
              />

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
                {isSubmitting ? <RotatingLinesLoader /> : 'Sign up'}
              </button>
              {error ? (
                <p className='text-red-500 text-center mt-3'>{error}</p>
              ) : null}
            </Form>
          )}
        </Formik>
      </div>
      <p className='mt-[1.5rem] text-center'>
        Already have an account?{' '}
        <Link href='/login' className='underline'>
          Log in
        </Link>
      </p>
      <p className='mt-[6rem] text-center'>
        By signing up for Jofwit Solution, you agree to our{' '}
        <Link href='/terms-of-service' className='underline'>
          Terms of Service.
        </Link>
      </p>
    </div>
  );
};

export default Signup;
