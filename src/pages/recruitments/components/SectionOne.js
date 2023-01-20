import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../../constants/images';
import styles from '../../../styles/tailwind';

const SectionOne = () => {
  return (
    <section className='pb-2 pt-6 md:py-[6rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex-[70%]'>
            <p className='mb-5 text-primary'>We are recruiting</p>

            <motion.h1
              initial={{ visibility: 'hidden' }}
              whileInView={{ opacity: [0, 1], visibility: 'visible' }}
              transition={{ duration: 2, type: 'tween' }}
              viewport={{ once: true }}
              className={`${styles.heroHeading} mb-4`}
            >
              Protect and Serve with the best, become part of the Guard
              Enforcement team
            </motion.h1>
          </div>
          <div className='mb-4 md:mb-0'>
            <img src={images.ge9} alt='Guard Enforcement' className='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
