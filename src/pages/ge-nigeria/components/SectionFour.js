import React from 'react';
import styles from '../../../styles/tailwind';

const SectionFour = () => {
  return (
    <section className='pb-2 pt-10 md:py-[3rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className='container mx-auto'>
          {' '}
          <h2 className='text-center text-2xl font-medium'>Gallery</h2>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
