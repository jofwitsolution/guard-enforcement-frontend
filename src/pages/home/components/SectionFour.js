import React from 'react';
import { GiSmartphone } from 'react-icons/gi';

import styles from '../../../styles/tailwind';

const SectionFour = () => {
  return (
    <section
      className={`${styles.homeSectionFour} flex items-center pl-[15%] landscape:h-screen md:landscape:h-[80vh]`}
    >
      <div className='bg-white w-[80%] h-[80%] md:w-[400px] md:h-[350px] p-[2rem] rounded-md'>
        <p className='text-primary xxs:mb-2 mb-5'>We will keep you safe</p>
        <div
          className={`${styles.headerFourBlack} xxs:text-[0.8rem] xxs:mb-2 mb-4`}
        >
          Entrust Your Safety to Us
        </div>
        <p className='md:text-[1.2rem] mb-2'>
          Need Security Officers? For Immediate Support:
        </p>
        <div>
          <div className='flex items-center'>
            <GiSmartphone fontSize={30} className='text-primary mr-2' />{' '}
            <span className='font-bold md:text-[1.5rem] text-blackText'>
              +1 (510) 706-1906
            </span>
          </div>
          <div className='flex items-center'>
            <span className='font-bold md:text-[1.5rem] text-blackText'>
              +234 (813) 117-4459
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
