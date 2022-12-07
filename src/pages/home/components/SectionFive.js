import React from 'react';
import CommentSlider from '../../../components/CommentSlider';

import styles from '../../../styles/tailwind';

const SectionFive = () => {
  return (
    <section className='py-[2rem] md:py-[6rem]'>
      <div className={`${styles.maxWidth}`}>
        <p className='text-primary font-bold mb-2 md:mb-4'>
          Clients testimonial
        </p>
        <div className={`${styles.headerTwoBlack}`}>
          See what our clients say <br /> about us
        </div>
        <CommentSlider />
      </div>
    </section>
  );
};

export default SectionFive;
