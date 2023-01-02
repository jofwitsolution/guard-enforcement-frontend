import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from 'react-countup';

import { AiOutlineSolution } from 'react-icons/ai';

import { images } from '../../../constants/images';
import styles from '../../../styles/tailwind';

const SectionThree = () => {
  const [countOnce, setCountOnce] = useState(true);

  const awardRef = useRef(null);
  const { start: startAwardCount } = useCountUp({
    ref: awardRef,
    start: 0,
    end: 14,
    duration: 2,
    scrollSpyOnce: true,
  });

  const countryRef = useRef(null);
  const { start: startCountryCount } = useCountUp({
    ref: countryRef,
    start: 0,
    end: 2,
    duration: 2,
    scrollSpyOnce: true,
  });

  const clientRef = useRef(null);
  const { start: startClientCount } = useCountUp({
    ref: clientRef,
    start: 0,
    end: 100,
    duration: 2,
    scrollSpyOnce: true,
  });

  const agentRef = useRef(null);
  const { start: startAgentCount } = useCountUp({
    ref: agentRef,
    start: 0,
    end: 2000,
    duration: 2,
    scrollSpyOnce: true,
  });

  const startCounters = () => {
    if (countOnce) {
      startAgentCount();
      startClientCount();
      startCountryCount();
      startAwardCount();
    }

    setCountOnce(false);
  };

  return (
    <section className='py-[2rem] md:py-[2rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 '>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 2, type: 'tween' }}
            className='flex-[50%]'
          >
            <img src={images.ge1} alt='guard enforcement 1' className='' />
          </motion.div>
          <div className='flex-[45%]'>
            <span className={`${styles.headerTwoPrimary} inline-block mb-4`}>
              Who we are
            </span>
            <h2
              className={`text-blackText xxs:text-[1.2rem] xs:text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] leading-[1.2] font-bold mb-8`}
            >
              {' '}
              We are not any run-of-the-mill security outfit
            </h2>
            <div className='flex items-start gap-5'>
              <div>
                <AiOutlineSolution fontSize={30} className='text-primary' />
              </div>

              <div>
                <h3 className={`${styles.headerThreeBlack}`}>
                  Solution Provider
                </h3>
                <p>
                  We are an indigenious private security company with tentacles
                  in the United States of America.
                </p>
                {/* <ul className='list-disc mt-2 font-semibold'>
                  <li>PROVISION OF SECURITY OFFICERS</li>
                  <li>SECURITY CAMERA MOUNTING AND MONITORING</li>
                  <li>24hours VEHICLE PATROL and CUSTOMER SERVICES</li>
                </ul> */}
                <p>
                  Our parent company, Guard Enforcement Security and Patrol, USA
                  has had vast and deep experience in providing security
                  solutions to individuals and organizations in the American
                  landscape for upward of 15 years.
                </p>
                <div className='mt-5'>
                  <a href='/about' className={`${styles.buttonOne} text-white`}>
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          onViewportEnter={startCounters}
          className='my-[3rem] md:my-[6rem] flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-5'
        >
          <motion.div className='flex flex-col items-center'>
            <span className={`${styles.headerTwoBlack} mb-0`}>
              <span
                className={`${styles.headerTwoBlack} mb-0`}
                ref={agentRef}
              />
              +
            </span>
            <span>Security Agents</span>
          </motion.div>
          <motion.div className='flex flex-col items-center'>
            <span className={`${styles.headerTwoBlack} mb-0`}>
              <span
                className={`${styles.headerTwoBlack} mb-0`}
                ref={clientRef}
              />
              +
            </span>
            <span>Clients</span>
          </motion.div>
          <motion.div className='flex flex-col items-center'>
            <span
              className={`${styles.headerTwoBlack} mb-0`}
              ref={countryRef}
            />
            <span>Country of operation</span>
          </motion.div>
          <motion.div className='flex flex-col items-center'>
            <span className={`${styles.headerTwoBlack} mb-0`} ref={awardRef} />
            <span>Awards won</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
