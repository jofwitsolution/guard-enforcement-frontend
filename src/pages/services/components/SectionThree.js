import React from 'react';
import { motion } from 'framer-motion';

import styles from '../../../styles/tailwind';
import { FiMonitor } from 'react-icons/fi';
import {
  GiArtificialIntelligence,
  GiSecurityGate,
  GiJourney,
} from 'react-icons/gi';
import { AiFillCar, AiFillCustomerService } from 'react-icons/ai';
import { FaDog } from 'react-icons/fa';
import { MdEvent } from 'react-icons/md';
import { GrThreats } from 'react-icons/gr';

const SectionThree = () => {
  return (
    <section className=''>
      <div className={`${styles.maxWidth}`}>
        <div className='flex flex-col items-center'>
          <p className='text-primary font-bold mb-5'>Our Services</p>
          <span
            className={`${styles.headerTwoBlack} w-[92%] md:w-[70%] lg:w-[60%] text-center md:mb-14`}
          >
            We provide a wide range of security services
          </span>
        </div>
        <div className='flex flex-col md:flex-row gap-8 justify-between items-start'>
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1, type: 'tween' }}
            viewport={{ once: true }}
            className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'
          >
            <div>
              <FiMonitor className='xxs:text-[30px] xs:text-[40px] sm:text-[55px] text-primary' />
            </div>
            <div>
              <h3 className={`${styles.headerThreeBlack}`}>
                Surveillance and Alarm System Installation
              </h3>
              <p>
                We offer a range of surveillance and alarm systems to help
                protect your property and assets. Our systems are designed to be
                user-friendly and easy to operate.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1, type: 'tween' }}
            viewport={{ once: true }}
            className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'
          >
            <div>
              <GiSecurityGate className='xxs:text-[30px] xs:text-[40px] sm:text-[55px] text-primary' />
            </div>
            <div>
              <h3 className={`${styles.headerThreeBlack}`}>
                Provision of Security Officers.
              </h3>
              <p>
                We provide experienced and trained security officers to keep our
                clients safe
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1, type: 'tween' }}
            viewport={{ once: true }}
            className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'
          >
            <div>
              <AiFillCar className='xxs:text-[30px] xs:text-[40px] sm:text-[55px] text-primary' />
            </div>
            <div>
              <h3 className={`${styles.headerThreeBlack}`}>
                24hrs Vehicle Patrol
              </h3>
              <p>We provide 24hrs vehicle patrol to keep our clients safe</p>
            </div>
          </motion.div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 justify-between items-start mt-10'>
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1, type: 'tween' }}
            viewport={{ once: true }}
            className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'
          >
            <div>
              <MdEvent className='xxs:text-[30px] xs:text-[40px] sm:text-[55px] text-primary' />
            </div>
            <div>
              <h3 className={`${styles.headerThreeBlack}`}>
                Crowd Control and Event Management
              </h3>
              <p>
                Our team is skilled in managing crowds and ensuring the safety
                of attendees at events of all sizes. We can provide security
                personnel, crowd control barriers, and other equipment to help
                ensure a smooth and safe event.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1, type: 'tween' }}
            viewport={{ once: true }}
            className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'
          >
            <div>
              <FaDog className='xxs:text-[30px] xs:text-[40px] sm:text-[55px] text-primary' />
            </div>
            <div>
              <h3 className={`${styles.headerThreeBlack}`}>Security Dogs</h3>
              <p>
                We provide well trained security dogs to keep our clients safe
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1, type: 'tween' }}
            viewport={{ once: true }}
            className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'
          >
            <div>
              <GiArtificialIntelligence className='xxs:text-[30px] xs:text-[40px] sm:text-[55px] text-primary' />
            </div>
            <div>
              <h3 className={`${styles.headerThreeBlack}`}>
                Artificial Intelligence
              </h3>
              <p>
                We are well equiped with A.I equipment (Body worn Camera, CCTV
                Camera, etc) as it helps us perform our work effectively and
                efficiently
              </p>
            </div>
          </motion.div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 justify-between items-start mt-10'>
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1, type: 'tween' }}
            viewport={{ once: true }}
            className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'
          >
            <div>
              <AiFillCustomerService className='xxs:text-[30px] xs:text-[40px] sm:text-[55px] text-primary' />
            </div>
            <div>
              <h3 className={`${styles.headerThreeBlack}`}>
                Security Consultation and Implementation
              </h3>
              <p>
                Our team of dedicated professionals will conduct a comprehensive
                Needs Assessment to determine your specific security
                requirements. Based on this analysis, we will develop a
                customized security model to meet your unique needs.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1, type: 'tween' }}
            viewport={{ once: true }}
            className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'
          >
            <div>
              <GrThreats className='xxs:text-[30px] xs:text-[40px] sm:text-[55px] text-primary' />
            </div>
            <div>
              <h3 className={`${styles.headerThreeBlack}`}>
                Man Guiding and Assessment of Security Threats
              </h3>
              <p>
                Our team of highly trained security professionals is ready to
                protect you and your property from any potential threats.
                Whether you need a security guard for your business or event, or
                a personal protection agent, we have you covered.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 1, type: 'tween' }}
            viewport={{ once: true }}
            className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'
          >
            <div>
              <GiJourney className='xxs:text-[30px] xs:text-[40px] sm:text-[55px] text-primary' />
            </div>
            <div>
              <h3 className={`${styles.headerThreeBlack}`}>
                Journey Management
              </h3>
              <p>
                We offer journey management services to ensure the safety and
                security of your employees or clients while they are traveling.
                This includes pre-trip assessments, transportation arrangements,
                and on-the-ground support.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
