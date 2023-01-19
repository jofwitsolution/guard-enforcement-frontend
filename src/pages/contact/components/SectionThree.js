import React from 'react';

import styles from '../../../styles/tailwind';
import ContactForm from './ContactForm';

const SectionThree = () => {
  return (
    <section className='py-6 md:pb-[6rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className='flex flex-col md:flex-row gap-8 md:gap-8 items-start justify-start'>
          <div className='w-[100%] md:w-[50%] shadow-xl rounded-xl p-4'>
            <span className='inline-block text-primary font-bold text-[1.2rem] mb-2 md:mb-4'>
              Get in Touch
            </span>
            <ContactForm />
          </div>
          <div className='w-[100%] md:w-[50%] shadow-xl rounded-xl p-4'>
            <span className='inline-block text-primary font-bold text-[1.2rem] mb-2 md:mb-4'>
              Info
            </span>
            <p>
              You can send us a message using the form and we will respond as
              soon as possible using the email you provided.
            </p>
            <p className='mt-4'>
              Reach us directly by sending an email to{' '}
              <a
                href='mailto: info@guardenforcement.com'
                className='text-blue-500'
              >
                info@guardenforcement.com
              </a>
            </p>
            <p className='mt-4'>
              Call us on{' '}
              <a href='tel: +1 (510) 706-1906' className='text-blue-500'>
                +1 (510) 706-1906{' '}
              </a>
              <span> or </span>
              <a href='tel: +234 (813) 117-4459' className='text-blue-500'>
                +234 (813) 117-4459
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
