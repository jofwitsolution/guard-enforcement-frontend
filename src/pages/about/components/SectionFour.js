import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../../constants/images';
import styles from '../../../styles/tailwind';

const SectionFour = () => {
  return (
    <section className='bg-secondaryBackground py-[2rem] md:py-[5rem] mt-8 mx-3 rounded-md'>
      <div className={`${styles.maxWidth}`}>
        <div className='text-center'>
          <span className='inline-block font-bold mb-4 md:mb-6 text-[1.3rem]'>
            Executive
          </span>
        </div>
        <div className='shadow-xl md:rounded-tl-[5rem] bg-white p-[2rem] flex flex-col md:flex-row gap-6'>
          <div className='flex-[30%] circle'>
            <img src={images.CEO} alt='Guard Enforcement CEO' className='' />
          </div>
          <div className='flex-[70%]'>
            <span className='inline-block text-[1.3rem] font-bold mb-2'>
              Ayanbajo Segun
            </span>
            <span className='block font-bold text-primary mb-2'>
              Founder & CEO
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae rerum earum at ducimus quasi blanditiis omnis sit libero
              iusto nostrum dicta magnam qui fuga, distinctio harum voluptates
              quia deleniti voluptatum. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Molestiae rerum earum at ducimus quasi
              blanditiis omnis sit libero iusto nostrum dicta magnam qui fuga,
              distinctio harum voluptates quia deleniti voluptatum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
