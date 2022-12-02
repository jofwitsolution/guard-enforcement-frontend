import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

function Component() {
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log('Page scroll: ', latest);
    });
  }, [scrollYProgress]);

  return <motion.div className='' />;
}

export default Component;
