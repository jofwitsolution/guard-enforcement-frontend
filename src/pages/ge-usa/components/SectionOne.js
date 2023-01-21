import React from 'react';
import styles from '../../../styles/tailwind';

const SectionOne = () => {
  return (
    <section className='pb-2 pt-6 md:py-[3rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className='md:w-[50%]'>
          <h1 className='text-3xl text-primary font-medium'>
            Guard Enforcement USA
          </h1>
          <p className='text-gray-500 my-5 text-2xl'>
            Your trusted partner for professional security solutions
          </p>
        </div>
        <div className='mx-auto px-4 mt-16'>
          <h2 className='text-center text-2xl font-medium mb-4'>Overview</h2>
          <p className='text-center text-gray-700'>
            Guard Enforcement is a leading private security company based in the
            United States. We provide a wide range of security solutions to
            individuals and organizations, and our goal is to provide the same
            standard of security services as obtainable in the USA and other
            parts of the developed world. Our services include security
            consultation and implementation, surveillance and alarm system
            installation, journey management, crowd control and event
            management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
