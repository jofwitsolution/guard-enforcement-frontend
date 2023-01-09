import React from 'react';
import { motion } from 'framer-motion';
// import { BsFillCheckCircleFill } from 'react-icons/bs';

import styles from '../../../styles/tailwind';
const SectionThree = () => {
  return (
    <section className='bg-secondaryBackground py-[2rem] md:py-[5rem] mt-8 mx-3 rounded-md'>
      <div className={`${styles.maxWidth}`}>
        <div className='flex flex-col md:flex-row items-start'>
          <div className='flex-[50%]'>
            <motion.div
              whileInView={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{ duration: 1, type: 'tween' }}
              viewport={{ once: true }}
              className='bg-white py-5 px-10 shadow-xl'
            >
              <span className='inline-block font-bold mb-2 md:mb-3 text-[1.3rem]'>
                What We Do
              </span>
              <p>
                We are dedicated to keeping your people, properties and assets
                through deep understanding and mitigation of security risks.
                With our combined expertise and resource, we effectively deliver
                security services and solutions in a wide array of inductries.
              </p>
            </motion.div>
          </div>
          <div className='flex-[50%] self-end md:self-center flex items-center justify-center'>
            <motion.div
              whileInView={{ opacity: [0, 1], x: [100, 0] }}
              transition={{ duration: 1, type: 'tween' }}
              viewport={{ once: true }}
              className='left-arrow bg-primary text-white flex items-center justify-center'
            >
              <span className='text-white z-50 text-[3rem]'>100%</span>{' '}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
