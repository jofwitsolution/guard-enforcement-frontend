import React from 'react';

import { images } from '../../../constants/images';
import styles from '../../../styles/tailwind';
import { Link } from 'react-router-dom';

const SectionThree = () => {
  return (
    <section className='py-[2rem] md:py-[5rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className='flex flex-col md:flex-row gap-8 items-center justify-center'>
          <div className=''>
            <img
              src={images.ge11}
              alt='Guard Enforcement'
              className='border-4 border-primary rounded-tl-[5rem] rounded-br-[5rem] shadow-lg'
            />
          </div>
          <div className='md:w-[50%]'>
            <p>
              As a security professional at Guard Enforcement, you will have the
              opportunity to work on a variety of projects and to gain
              experience in different areas of the security industry. We provide
              ongoing training and development opportunities to help you reach
              your full potential, and we offer a competitive salary and
              benefits package.
            </p>
          </div>
        </div>
        <div className='mt-10'>
          <p>The following are the application requirements:</p>

          <div className='my-5'>
            <Link to='/contact'>Contact us for recruitment enquires.</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
