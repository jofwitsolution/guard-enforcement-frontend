import React from 'react';
import styles from '../../../styles/tailwind';

const SectionOne = () => {
  return (
    <section className='pb-2 pt-6 md:py-[6rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className='text-center'>
          <h1 className='font-bold text-[1.5rem]'>Contact Us</h1>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
