import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from 'react-countup';

import { AiOutlineSolution } from 'react-icons/ai';

import { images } from '../../../constants/images';
import styles from '../../../styles/tailwind';

const SectionThree = () => {
  const [stopCount, setStopCount] = useState(false);
  const [stopClientCount, setStopClientCount] = useState(false);
  const [inView, setInView] = useState(false);
  const [agent, setAgent] = useState(0);
  const [client, setClient] = useState(0);

  let agentIntervalId;
  let clientIntervalId;
  let agentCounter = 0;
  let clientCounter = 0;

  function agentCount() {
    agentCounter = agentCounter + 10;
    setAgent(agentCounter);
    if (agentCounter === 2000) {
      agentCounter = 0;
      setStopCount(true);
    }
  }

  function clientCount() {
    clientCounter = clientCounter + 1;
    setClient(clientCounter);
    if (clientCounter === 100) {
      clientCounter = 0;
      setStopClientCount(true);
    }
  }

  const handleCount = () => {
    if (!inView) {
      setInView(true);
      agentIntervalId = setInterval(agentCount, 10);
      clientIntervalId = setInterval(clientCount, 20);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(agentIntervalId);
    };
  }, [stopCount, agentIntervalId]);

  useEffect(() => {
    return () => {
      clearInterval(clientIntervalId);
    };
  }, [stopClientCount, clientIntervalId]);

  const countUpRef = useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 3000,
    duration: 3,
    onReset: () => console.log('Resetted!'),
    onUpdate: () => console.log('Updated!'),
    onPauseResume: () => console.log('Paused or resumed!'),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });

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
            <h2 className={`${styles.headerTwoBlack}`}>
              {' '}
              We are a dynamic team of creative people
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
                  We are a <strong>reliable</strong> security company that
                  provides various security services that utilize safety first
                  approach. Our Services include:
                </p>
                <ul className='list-disc mt-2 font-semibold'>
                  <li>PROVISION OF SECURITY OFFICERS</li>
                  <li>SECURITY CAMERA MOUNTING AND MONITORING</li>
                  <li>24hours VEHICLE PATROL and CUSTOMER SERVICES</li>
                </ul>
                <div className='mt-5'>
                  <a
                    href='/pricing'
                    className={`${styles.buttonOne} text-white`}
                  >
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          onViewportEnter={() => handleCount()}
          className='my-[3rem] md:my-[6rem] flex flex-col sm:flex-row justify-between items-center gap-5'
        >
          <div className='flex flex-col gap-3 items-center'>
            <span className={`${styles.headerTwoBlack} mb-0`}>{agent}+</span>
            <span>Security Agents</span>
          </div>
          <div className='flex flex-col gap-3 items-center'>
            <span className={`${styles.headerTwoBlack} mb-0`}>{client}+</span>
            <span>Clients</span>
          </div>
          <div className='flex flex-col gap-3 items-center'>
            <span className={`${styles.headerTwoBlack} mb-0`}>2</span>
            <span>Country of operation</span>
          </div>
          <motion.div
            onViewportEnter={start}
            className='flex flex-col gap-3 items-center'
          >
            <span
              className={`${styles.headerTwoBlack} mb-0`}
              ref={countUpRef}
            />
            <span>Awards won</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThree;
