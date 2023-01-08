import React from 'react';
import { motion } from 'framer-motion';

import styles from '../../../styles/tailwind';

const SectionTwo = () => {
  return (
    <section className='py-[4rem] md:py-[10rem]'>
      <div className={`${styles.maxWidth}`}>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [-100, 0] }}
          transition={{ duration: 1, type: 'tween' }}
          viewport={{ once: true }}
        >
          <span className={`${styles.headerTwoBlack} font-normal font-sans`}>
            &ldquo;At Guard Enforcement, we pride ourselves on providing
            top-quality security solutions to individuals and organizations in
            the United States and Nigeria. With over 15 years of experience in
            the security industry, we have the expertise and resources to meet
            all of your security needs.&rdquo;
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTwo;
