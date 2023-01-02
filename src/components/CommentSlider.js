import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const images = [
  {
    message:
      "“I'm the owner of a chain of grocery stores in the S.F Bay Area.G.E.S.P has been securing my location for five years now. Their staff is highly professional and courteous to my customers. I feel like I'm getting two for the price of one because not only do they provide security but also excellent customer service to both my employees and my customers....great guys!”.",
    name: 'Thomas Johnson',
    position: 'Executive Director, themefisher',
  },
  {
    message:
      "“I'm the owner of a chain of grocery stores in the S.F Bay Area.G.E.S.P has been securing my location for five years now. Their staff is highly professional and courteous to my customers. I feel like I'm getting two for the price of one because not only do they provide security but also excellent customer service to both my employees and my customers....great guys!”.",
    name: 'James Watson',
    position: 'Executive Director, themefisher',
  },
  {
    message:
      "“I'm the owner of a chain of grocery stores in the S.F Bay Area.G.E.S.P has been securing my location for five years now. Their staff is highly professional and courteous to my customers. I feel like I'm getting two for the price of one because not only do they provide security but also excellent customer service to both my employees and my customers....great guys!”.",
    name: 'Mickel Hussy',
    position: 'Executive Director, themefisher',
  },
];

function CommentSlider() {
  const [index, setIndex] = useState(0);
  // const [direction, setDirection] = useState(0);

  function nextStep() {
    // setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    // setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <div className='md:h-[70vh] flex justify-center items-center'>
      <div className='cs-slideshow'>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          transition={{ duration: 1, type: 'tween' }}
          className='cs-slides text-blackText flex justify-center items-center'
        >
          <div className='w-[94%] md:w-[60%] md:text-[1.3rem]'>
            <p className='italic'>{images[index]?.message}</p>
            <h4 className='font-extrabold mt-3'>{images[index]?.name}</h4>
            <h5>{images[index]?.position}</h5>
          </div>
        </motion.div>
        <button className='cs-btn cs-prevBtn' onClick={prevStep}>
          <BiLeftArrow />
        </button>
        <button className='cs-btn cs-nextBtn' onClick={nextStep}>
          <BiRightArrow />
        </button>
      </div>
    </div>
  );
}

export default CommentSlider;
