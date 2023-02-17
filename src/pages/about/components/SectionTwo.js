import React from 'react';
import { motion } from 'framer-motion';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import styles from '../../../styles/tailwind';

const SectionTwo = () => {
  return (
    <section className='bg-secondaryBackground py-[2rem] md:py-[5rem]'>
      <div className='text-center font-bold'>
        <span className='inline-block text-[1.5rem] md:text-[2rem] text-primary mb-5'>
          About Us
        </span>
      </div>
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
                Who We Are
              </span>
              <p>
                Founded in 2003, We are an indigenious private security company
                with tentacles in the United States of America. Guard
                Enforcement Security and Patrol is highly commited to protecting
                people and properties while providing complete peace of mind
              </p>
            </motion.div>
          </div>
          <div className='flex-[50%] self-end md:self-center flex items-center justify-center'>
            <motion.div
              whileInView={{ opacity: [0, 1], x: [100, 0] }}
              transition={{ duration: 1, type: 'tween' }}
              viewport={{ once: true }}
              className='left-point bg-primary text-white flex items-center justify-center'
            >
              <span className='text-white z-50 text-[3rem]'>2003</span>{' '}
            </motion.div>
          </div>
        </div>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ delay: 0.6, duration: 1, type: 'tween' }}
          viewport={{ once: true }}
          className='md:w-[50%] ml-0 md:ml-[5rem] my-4'
        >
          <div className='flex gap-2 items-start bg-white py-5 px-10 shadow-xl'>
            <div>
              <BsFillCheckCircleFill className='text-[1.6rem] text-primary' />
            </div>
            <p>
              We design our security services based on our client's needs and we
              utilize the latest technological innovation to provide the most
              vigilant and reliable guard force.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ delay: 0.6, duration: 1, type: 'tween' }}
          viewport={{ once: true }}
          className='md:w-[50%] ml-0 md:ml-[10rem]'
        >
          <div className='flex gap-2 items-start bg-white py-5 px-10 shadow-xl'>
            <div>
              <BsFillCheckCircleFill className='text-[1.6rem] text-primary' />
            </div>
            <p>
              We ensure that our integrated and innovative security solutions
              effectively increase compliance, meet high industry standards,
              reduce security-related costs, and mitigate risks. Our security
              services create not just a welcoming but also productive
              environment.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ delay: 0.6, duration: 1, type: 'tween' }}
          viewport={{ once: true }}
          className='md:w-[50%] ml-0 md:ml-[15rem] my-4'
        >
          <div className='flex gap-2 items-start bg-white py-5 px-10 shadow-xl'>
            <div>
              <BsFillCheckCircleFill className='text-[1.6rem] text-primary' />
            </div>
            <p>
              We are duly registered under the Corporate Affairs Commission
              (CAC) with RC 1316009 and are being regulated by Nigeria Security
              and Civil Defense corps through the Private Guard Companies
              Regulations 2018 as the policy guiding private security in
              Nigeria.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
