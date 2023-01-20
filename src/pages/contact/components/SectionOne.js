import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../../constants/images';
import styles from '../../../styles/tailwind';

const SectionOne = () => {
  return (
    <section className='pb-2 pt-6 md:py-[6rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className='text-center mb-5 md:mb-10'>
          <h1 className='font-bold text-[1.5rem]'>Contact Us</h1>
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-4 md:gap-10'>
          <motion.div
            initial={{ visibility: 'hidden' }}
            whileInView={{
              opacity: [0, 1],
              x: [-100, 0],
              visibility: 'visible',
            }}
            transition={{ duration: 1, type: 'tween' }}
            viewport={{ once: true }}
            className='mb-4 md:mb-0'
          >
            <img src={images.ge12} alt='Guard Enforcement' className='' />
          </motion.div>
          <div className=''>
            <p className='mb-5 text-primary'>For all enquiries</p>

            <motion.h1
              whileInView={{ opacity: [0, 1], visibility: 'visible' }}
              transition={{ duration: 2, type: 'tween' }}
              viewport={{ once: true }}
              className={`${styles.heroHeading} mb-4`}
            >
              We are in the United States of America and Nigeria
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
