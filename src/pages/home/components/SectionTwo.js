import React from 'react';
import { motion } from 'framer-motion';

import { GiSecurityGate } from 'react-icons/gi';
import { FiMonitor } from 'react-icons/fi';
import { Ri24HoursFill } from 'react-icons/ri';

import styles from '../../../styles/tailwind';
import { Link } from 'react-router-dom';

const SectionTwo = () => {
  return (
    <section className='py-[2rem] md:py-[6rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className='w-[100%] lg:w-[65%] mb-[3rem] md:mb-[4rem]'>
          <p className='text-primary mb-5'>
            We are a call away from keeping you safe
          </p>
          <motion.h2
            whileInView={{ opacity: [0, 1], x: [-100, 0] }}
            transition={{ duration: 2, type: 'tween' }}
            className={`${styles.headerTwoBlack}`}
          >
            We work with businesses & provide security services to our clients
          </motion.h2>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-start gap-5 md:gap-8'>
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1, type: 'tween' }}
            className='xxs:mb-5 sm:mb-10 md:mb-0'
          >
            <GiSecurityGate fontSize={55} className='text-primary mb-4' />
            <h3 className={`${styles.headerThreeBlack}`}>
              Man guiding and Security Assessment
            </h3>
            <p className=''>
              We provide experienced and trained security officers to keep our
              clients safe.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1, type: 'tween' }}
            className='xxs:mb-5 sm:mb-10 md:mb-0'
          >
            <FiMonitor fontSize={55} className='text-primary mb-4' />
            <h3 className={`${styles.headerThreeBlack}`}>
              Surveillance and Alarm System Installation
            </h3>
            <p className=''>
              We provide our clients with security cameras to enable them
              monitor events in realtime.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1, type: 'tween' }}
            className='xxs:mb-5 sm:mb-10 md:mb-0'
          >
            <Ri24HoursFill fontSize={55} className='text-primary mb-4' />
            <h3 className={`${styles.headerThreeBlack}`}>
              Crowd Control and Event Management
            </h3>
            <p className=''>
              We provide 24hrs vehicle patrol to keep our clients safe, and we
              also provide customer services in case of any problem.
            </p>
          </motion.div>
        </div>
        <div>
          <a
            href='/services'
            className='inline-block border-primary hover:border-b-4 mt-5 transition-all duration-[0.4s] ease-out'
          >
            <span>Know more...</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
