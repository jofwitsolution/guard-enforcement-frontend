import React from 'react';
import { motion } from 'framer-motion';
import { RiRegisteredFill } from 'react-icons/ri';

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
            <p className='mb-2'>
              Segun Ayanbajo is the CEO and founder of Guard Enforcement. With
              over 15 years of experience in the security industry, he is
              considered an expert in this field.
            </p>
            <p className='mb-2'>
              He has a deep understanding of the security challenges that
              individuals and organizations face, and has developed a reputation
              for being able to create effective and tailored security solutions
              to meet those challenges.
            </p>
            <p>
              He is known for his ability to conduct a comprehensive needs
              analysis and to design and implement customized security models
              that are tailored to the specific needs of his clients.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center gap-5 mt-9 md:mt-20'>
          <div className='md:w-[40%] lg:w-[30%]'>
            <div className='shadow-xl bg-primary text-white flex gap-5 py-5 p-4'>
              <div>
                <RiRegisteredFill fontSize={60} />
              </div>
              <div>
                {' '}
                <span className='inline-block text-[1.3rem] font-bold mb-2 text-center'>
                  Recruitments
                </span>
                <p>
                  Join the team at Guard Enforcement! We are seeking highly
                  skilled and dedicated security professionals to join our team.
                  If you have a passion for security and a commitment to
                  excellence, we want to hear from you.
                </p>
              </div>
            </div>
          </div>

          <div className='md:w-[40%] lg:w-[30%]'>
            <a href='/recruitments'>
              <motion.div
                whileInView={{ opacity: [0, 1], y: [100, 0] }}
                transition={{ duration: 1, type: 'tween' }}
                viewport={{ once: true }}
                className='shadow-xl bg-primary hover:bg-primaryAlt cursor-pointer text-white flex gap-5 py-5 p-4'
              >
                <div>
                  <RiRegisteredFill fontSize={60} />
                </div>
                <div>
                  {' '}
                  <span className='inline-block text-[1.3rem] font-bold mb-2 text-center'>
                    Recruitments
                  </span>
                  <p>
                    Apply now and take the first step in a rewarding career with
                    a leading private security company.
                  </p>
                </div>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
