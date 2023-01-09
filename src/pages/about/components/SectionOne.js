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
            <p className='mb-5 text-primary'>
              Trust us to protect you and your business
            </p>

            <motion.h1
              whileInView={{ opacity: [0, 1], visibility: 'visible' }}
              transition={{ duration: 2, type: 'tween' }}
              viewport={{ once: true }}
              className={`${styles.heroHeading} mb-4`}
            >
              Guard Enforcement has the experience and resources to keep you
              safe
            </motion.h1>
          </div>
          <div className='mb-4 md:mb-0'>
            <img src={images.ge7} alt='Guard Enforcement' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
