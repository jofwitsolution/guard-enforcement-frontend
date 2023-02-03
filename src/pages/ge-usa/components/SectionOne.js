import React from 'react';
import styles from '../../../styles/tailwind';
import { images } from '../../../constants/images';

const SectionOne = () => {
  return (
    <section className='pb-2 pt-8 md:py-[3rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className='md:w-[50%]'>
          <h1 className='text-3xl text-primary font-medium'>
            Guard Enforcement USA
          </h1>
          <p className='text-gray-500 my-5 text-2xl'>
            Your trusted partner for professional security solutions
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-8 items-center  mt-16'>
          <div className='flex-1'>
            <img
              src={images.geHeroHomeSmall}
              alt='Guard enforcement team'
              className=''
            />
          </div>
          <div className='flex-1'>
            <h2 className='text-2xl font-medium mb-4'>Overview</h2>
            <p className='text-gray-700'>
              Guard Enforcement is a leading private security company based in
              the United States. We provide a wide range of security solutions
              to individuals and organizations, and our goal is to have a
              society whose security is guaranteed through our security
              expertise. Our services include security consultation and
              implementation, surveillance and alarm system installation,
              journey management, crowd control and event management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
