import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { MyTextArea, MyTextInput } from '../../../components/forms';
import { contactFormSchema } from '../../../form-validation/validationSchemas';
import { receiveMessage } from '../../../services/contactService';
import RotatingLinesLoader from '../../../components/loaders/RotatingLinesLoader';

const inputStyle =
  'bg-white border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal';

const ContactForm = () => {
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (values, setSubmitting) => {
    setSuccessMessage('');
    setError('');

    try {
      const { data } = await receiveMessage(values);
      console.log(data?.message);
      setSubmitting(false);
      setSuccessMessage(
        'Your message was sent successfully. Please do not re-send this message, we will contact you soon'
      );
    } catch (err) {
      setSubmitting(false);
      setError(err.response.data.message);
    }
  };

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        subject: '',
        telephone: '',
        message: '',
      }}
      validationSchema={contactFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className='mb-4'>
            <MyTextInput
              className={inputStyle}
              type='text'
              placeholder='Enter your full name'
              name='fullName'
              label='Full Name'
              labelClass='block text-gray-700 font-medium mb-2'
            />
          </div>

          <div className='mb-4'>
            <MyTextInput
              className={inputStyle}
              type='email'
              placeholder='Enter your email address'
              name='email'
              label='Email'
              labelClass='block text-gray-700 font-medium mb-2'
            />
          </div>

          <div className='mb-4'>
            <MyTextInput
              className={inputStyle}
              type='tel'
              placeholder='Enter your number'
              name='telephone'
              label='Telephone'
              labelClass='block text-gray-700 font-medium mb-2'
            />
          </div>

          <div className='mb-4'>
            <MyTextInput
              className={inputStyle}
              type='text'
              placeholder='Enter the subject'
              name='subject'
              label='Subject'
              labelClass='block text-gray-700 font-medium mb-2'
            />
          </div>

          <div className='mb-4'>
            <MyTextArea
              className={inputStyle}
              type='text'
              placeholder='Enter your message'
              name='message'
              label='Message'
              labelClass='block text-gray-700 font-medium mb-2'
            />
          </div>

          <div className='text-center'>
            <button
              type='submit'
              className='bg-primary hover:bg-primaryAlt text-white font-medium py-2 px-4 rounded-lg'
              disabled={isSubmitting}
            >
              {isSubmitting ? <RotatingLinesLoader /> : 'Submit'}
            </button>
            {error ? (
              <p className='text-red-500 text-center mt-3'>{error}</p>
            ) : null}
            {successMessage ? (
              <p className='text-center mt-3'>{successMessage}</p>
            ) : null}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
