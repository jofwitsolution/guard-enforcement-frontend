import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

function TopProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className='fixed top-0 left-0 right-0 h-[5px] bg-red-600 origin-[0%]'
      style={{ scaleX }}
    />
  );
}

export default TopProgressBar;
