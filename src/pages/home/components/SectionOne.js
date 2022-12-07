import React from 'react';
import { motion } from 'framer-motion';

import { BiChevronRight } from 'react-icons/bi';
import styles from '../../../styles/tailwind';

const SectionOne = () => {
  return (
    <section className={`${styles.heroHome} text-white landscape:h-screen`}>
      <div className='max-w-[1200px] h-full mx-auto px-[17px] md:px-[35px] flex items-center'>
        <div className='w-[100%] lg:w-[60%]'>
          <p className='mb-5'>
            Keep Calm And Let The Security Officer Handle It
          </p>

          <motion.h1
            whileInView={{ opacity: [0, 1], visibility: 'visible' }}
            transition={{ duration: 2, type: 'tween' }}
            viewport={{ once: true }}
            className={`${styles.heroHeading}`}
          >
            Guard Enforcement <br /> Security & <br />
            Patrol
          </motion.h1>
          <div className=''>
            <a href='/pricing' className={`${styles.buttonOne}`}>
              GET STARTED{' '}
              <BiChevronRight fontSize={20} className='xxs:text-[18px]' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
