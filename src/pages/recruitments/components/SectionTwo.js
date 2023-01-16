import React from 'react';
import { motion } from 'framer-motion';

import styles from '../../../styles/tailwind';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const SectionTwo = () => {
  return (
    <section className='bg-secondaryBackground py-[2rem] md:py-[5rem]'>
      <div className={`${styles.maxWidth}`}>
        <motion.div
          whileInView={{
            opacity: [0, 1],
            visibility: 'visible',
            y: [100, 0],
          }}
          transition={{ duration: 1, type: 'tween' }}
          viewport={{ once: true }}
          className='angle-box bg-primary text-white md:w-[90%] lg:w-[70%] md:h-[300px] mx-auto shadow-xl py-[1.5rem] px-[0.6rem] md:px-[1.5rem] text-[1.3rem] flex items-center justify-center'
        >
          We are a leading private security company based in the United States
          and Nigeria, and we are always on the lookout for highly skilled and
          dedicated security professionals to join our team. We are committed to
          providing top-quality security solutions to individuals and
          organizations, and we believe that the key to achieving this is by
          having a team of dedicated and skilled professionals.
        </motion.div>

        <div className='flex flex-col md:flex-row gap-12 mt-10 md:mt-20'>
          <motion.div
            whileInView={{
              opacity: [0, 1],
              visibility: 'visible',
              y: [100, 0],
            }}
            transition={{ duration: 1, type: 'tween' }}
            viewport={{ once: true }}
            className='flex items-start gap-2 md:gap-5'
          >
            <div className='w-max'>
              <div className='octagon w-[40px] h-[35px] md:w-[80px] md:h-[70px] bg-white flex items-center justify-center'>
                <span className='inline-block md:text-[1.2rem] font-bold text-primaryAlt'>
                  GE
                </span>
              </div>
            </div>

            <div className=''>
              We are seeking individuals who have a passion for security and a
              commitment to excellence. If you are a security professional who
              is looking for a challenging and rewarding career, we want to hear
              from you.
            </div>
          </motion.div>
          <motion.div
            whileInView={{
              opacity: [0, 1],
              visibility: 'visible',
              y: [100, 0],
            }}
            transition={{ duration: 1, type: 'tween' }}
            viewport={{ once: true }}
            className='flex items-start gap-2 md:gap-5'
          >
            <div className='w-max'>
              <div className='octagon w-[40px] h-[35px] md:w-[80px] md:h-[70px] bg-white flex items-center justify-center'>
                <span className='inline-block md:text-[1.2rem] font-bold text-primaryAlt'>
                  GE
                </span>
              </div>
            </div>

            <div className=''>
              We offer a wide range of opportunities for security professionals
              at all levels, from entry-level positions to senior management
              roles. We are currently recruiting for the following positions:
            </div>
          </motion.div>
        </div>
        <div className='flex flex-col items-center'>
          <motion.div
            initial={{ visibility: 'hidden', opacity: 0 }}
            whileInView={{
              opacity: [0, 1],
              visibility: 'visible',
            }}
            transition={{ duration: 1, type: 'tween' }}
            className='mt-10 md:mt-20 w-[90%] sm:w-[initial]'
          >
            <div className='flex items-center gap-4 mb-4'>
              <div>
                <BsFillCheckCircleFill className='text-[1.3rem] md:text-[1.6rem] text-primary' />
              </div>
              <div>Security guards</div>
            </div>
            <div className='flex items-center gap-4 mb-4'>
              <div>
                <BsFillCheckCircleFill className='text-[1.3rem] md:text-[1.6rem] text-primary' />
              </div>
              <div>Crowd control and event management specialists</div>
            </div>
            <div className='flex items-center gap-4 mb-4'>
              <div>
                <BsFillCheckCircleFill className='text-[1.3rem] md:text-[1.6rem] text-primary' />
              </div>
              <div>Surveillance and alarm system installation technicians</div>
            </div>
            <div className='flex items-center gap-4 mb-4'>
              <div>
                <BsFillCheckCircleFill className='text-[1.3rem] md:text-[1.6rem] text-primary' />
              </div>
              <div>Experienced marketer</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
