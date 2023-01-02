import React from 'react';
import styles from '../../../styles/tailwind';
import { FiMonitor } from 'react-icons/fi';
import { GiArtificialIntelligence, GiSecurityGate } from 'react-icons/gi';
import { AiFillCar, AiFillCustomerService } from 'react-icons/ai';
import { FaDog } from 'react-icons/fa';

const SectionTwo = () => {
  return (
    <section className='py-[2rem] md:py-[6rem]'>
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
          <div className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'>
            <div>
              <FiMonitor className='xxs:text-[30px] xs:text-[40px] sm:text-[55px]' />
            </div>
            <div>
              <h3 className={`${styles.headerThreeBlack}`}>
                Security Camera Mounting and Monitoring
              </h3>
              <p>
                We provide our clients with security cameras to enable them
                monitor events in realtime
              </p>
            </div>
          </div>
          <div className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'>
            <div>
              <GiSecurityGate className='xxs:text-[30px] xs:text-[40px] sm:text-[55px]' />
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
          </div>
          <div className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'>
            <div>
              <AiFillCar className='xxs:text-[30px] xs:text-[40px] sm:text-[55px]' />
            </div>
            <div>
              <h3 className={`${styles.headerThreeBlack}`}>
                24hrs Vehicle Patrol
              </h3>
              <p>We provide 24hrs vehicle patrol to keep our clients safe</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 justify-between items-start mt-10'>
          <div className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'>
            <div>
              <AiFillCustomerService className='xxs:text-[30px] xs:text-[40px] sm:text-[55px]' />
            </div>
            <div>
              <h3 className={`${styles.headerThreeBlack}`}>Customer Service</h3>
              <p>
                We also provide professional customer services in case of any
                emergency
              </p>
            </div>
          </div>
          <div className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'>
            <div>
              <FaDog className='xxs:text-[30px] xs:text-[40px] sm:text-[55px]' />
            </div>
            <div>
              <h3 className={`${styles.headerThreeBlack}`}>Security Dogs</h3>
              <p>
                We provide well trained security dogs to keep our clients safe
              </p>
            </div>
          </div>
          <div className='flex items-start gap-5 xxs:w-[92%] sm:w-[80%]'>
            <div>
              <GiArtificialIntelligence className='xxs:text-[30px] xs:text-[40px] sm:text-[55px]' />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
