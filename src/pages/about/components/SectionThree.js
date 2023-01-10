import React from 'react';
import { motion } from 'framer-motion';
import { BsFillCheckCircleFill } from 'react-icons/bs';

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
                security services and solutions in a wide array of industries.
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
        <div className='flex flex-col md:flex-row items-start mt-4'>
          <div className='flex-[40%]'>
            <motion.div
              whileInView={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{ duration: 1, type: 'tween' }}
              viewport={{ once: true }}
              className='bg-white py-5 px-10 shadow-xl'
            >
              <span className='inline-block font-bold mb-2 md:mb-3 text-[1.3rem]'>
                Vision
              </span>
              <p>
                To have a society whose security is guaranteed through our
                security expertise.
              </p>
            </motion.div>
          </div>
          <div className='flex-[50%] self-end md:self-center flex items-center justify-center'>
            <motion.div
              whileInView={{ opacity: [0, 1], x: [100, 0] }}
              transition={{ duration: 1, type: 'tween' }}
              viewport={{ once: true }}
              className='left-point bg-primaryAlt text-white flex items-center justify-center'
            >
              <span className='text-white z-50 text-[1.5rem] font-bold'>
                Our Vision
              </span>{' '}
            </motion.div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-start mt-4'>
          <div className='flex-[30%]'>
            <motion.div
              whileInView={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{ duration: 1, type: 'tween' }}
              viewport={{ once: true }}
              className='bg-white py-5 px-10 shadow-xl'
            >
              <span className='inline-block font-bold mb-2 md:mb-3 text-[1.3rem]'>
                Mission
              </span>
              <p>To provide total security assurance to our client always!</p>
            </motion.div>
          </div>
          <div className='flex-[50%] self-end md:self-center flex items-center justify-center'>
            <motion.div
              whileInView={{ opacity: [0, 1], x: [100, 0] }}
              transition={{ duration: 1, type: 'tween' }}
              viewport={{ once: true }}
              className='left-arrow bg-primary text-white flex items-center justify-center'
            >
              <span className='text-white z-50 text-[1.5rem] font-bold'>
                Our Mission
              </span>{' '}
            </motion.div>
          </div>
        </div>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 1, type: 'tween' }}
          viewport={{ once: true }}
          className='rabbet-clip mt-4 mx-auto bg-white shadow-xl w-[98%] xs:w-[70%] sm:w-[40%] flex flex-col justify-center items-center'
        >
          <span className='inline-block font-bold mb-2 md:mb-3 text-[1.3rem]'>
            Innate value
          </span>
          <div className='flex gap-4 mb-2'>
            <div>
              <BsFillCheckCircleFill className='text-[1.6rem] text-primary' />
            </div>
            <p>Expertise</p>
          </div>
          <div className='flex gap-4 mb-2'>
            <div>
              <BsFillCheckCircleFill className='text-[1.6rem] text-primary' />
            </div>
            <p>Commitment</p>
          </div>
          <div className='flex gap-4 mb-2'>
            <div>
              <BsFillCheckCircleFill className='text-[1.6rem] text-primary' />
            </div>
            <p>Excellence</p>
          </div>
          <div className='flex gap-4 mb-2'>
            <div>
              <BsFillCheckCircleFill className='text-[1.6rem] text-primary' />
            </div>
            <p>Strong</p>
          </div>
          <div className='flex gap-4 mb-2'>
            <div>
              <BsFillCheckCircleFill className='text-[1.6rem] text-primary' />
            </div>
            <p>Personality</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
