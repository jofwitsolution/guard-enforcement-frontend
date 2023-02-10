import * as Yup from 'yup';

export const signupSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 50 characters or less')
    .required('The above field is required'),
  lastName: Yup.string()
    .max(20, 'Must be 50 characters or less')
    .required('The above field is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('The above field is required'),
  password: Yup.string()
    .min(8, 'Password must be between 8 to 16 characters')
    .required('The above field is required'),
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Input your email'),
  password: Yup.string().required('Input your password'),
});

export const contactFormSchema = Yup.object({
  fullName: Yup.string()
    .max(50, 'Must be 50 characters or less')
    .required('The above field is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('The above field is required'),
  subject: Yup.string().required('The above field is required'),
  telephone: Yup.string()
    .max(15, 'Must be less than 15 characters')
    .required('The above field is required'),
  message: Yup.string().required('The above field is required'),
});
