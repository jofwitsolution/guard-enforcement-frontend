import React from 'react';
import styles from '../../../styles/tailwind';
import { images } from '../../../constants/images';

const SectionOne = () => {
  return (
    <section className='pb-2 pt-8 md:py-[3rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className='md:w-[50%]'>
          <h1 className='text-3xl text-primary font-medium'>
            Guard Enforcement Nigeria
          </h1>
          <p className='text-gray-500 my-5 text-2xl'>
            Protection you can count on, Guard Enforcement Nigeria - Your
            safeguard in an uncertain world
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-8 items-center  mt-16'>
          <div className='flex-1'>
            <img src={images.ge13} alt='Guard enforcement team' className='' />
          </div>
          <div className='flex-1'>
            <h2 className='text-2xl font-medium mb-4'>Overview</h2>
            <p className='text-gray-700'>
              Guard Enforcement is a leading private security company based in
              Nigeria. We provide a wide range of security solutions to
              individuals and organizations, and our goal is to provide the same
              standard of security services as obtainable in the USA and other
              parts of the developed world. With our team of dedicated
              professionals and cutting-edge technology, we are committed to
              providing you with the highest level of security and protection.
              From security consultation and implementation to surveillance and
              alarm systems, we have the expertise and experience to meet all of
              your security needs. Together, we can create a safer and more
              secure environment for you, your family, and your organization.
              Trust us to keep you safe, so you can focus on what matters most.
              Our services include security consultation and implementation,
              surveillance and alarm system installation, journey management,
              crowd control and event management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
