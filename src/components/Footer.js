import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../constants/images';
import styles from '../styles/tailwind';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className=''>
      <div
        className={`${styles.footerBgImg} flex flex-col items-center pb-[5rem] md:pb-0 pt-[2rem] md:pt-[6rem]`}
      >
        <div className={`${styles.headerTwoWhite}`}>Recent clients</div>
        <div className={`${styles.maxWidth} mt-5 md:mt-10`}>
          <div className='flex flex-col md:flex-row justify-center items-center gap-8 '>
            <div>
              <img src={images.den} alt='den' />
            </div>
            <div>
              <img src={images.farm} alt='farm' />
            </div>
            <div>
              <img src={images.des} alt='des' />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [50, 0] }}
        transition={{ duration: 1, type: 'tween' }}
        className='xxs:w-[96%] md:w-[80%] xl:max-w-[1100px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 px-6 md:py-14 md:px-20 mb-20 -mt-[5rem] bg-secondaryBackground rounded-lg'
      >
        <div>
          <p className='text-primary font-bold mb-2 md:mb-4'>
            For every type of business
          </p>
          <div className={`${styles.headerFourBlack} xxs:text-[1rem] mb-0`}>
            Entrust Your Safety to Us And We <br /> Will Keep You Safe
          </div>
        </div>
        <div className='mt-5'>
          <a href='/contact' className={`${styles.buttonOne} text-white`}>
            CONTACT US
          </a>
        </div>
      </motion.div>
      <div className='xxs:w-[88%] md:w-[80%] xl:max-w-[1100px] mx-auto flex flex-wrap flex-col sm:flex-row justify-between items-start border-b-[1px] border-gray border-solid pb-5 sm:pb-14 mb-6'>
        <div className='mb-4 sm:mb-0'>
          <h4 className={`${styles.headerThreeBlack} mb-2 sm:mb-4`}>Company</h4>
          <ul className='text-[0.8rem] md:text-[1rem]'>
            <li className='mb-2'>
              <a
                href='/terms-and-conditions'
                className='text-black hover:text-primary'
              >
                Terms & Conditions
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='/privacy-policy'
                className='text-black hover:text-primary'
              >
                Privacy Policy
              </a>
            </li>
            <li className='mb-2'>
              <a href='/contact' className='text-black hover:text-primary'>
                Support
              </a>
            </li>
            <li className='mb-2'>
              <a href='/faq' className='text-black hover:text-primary'>
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className='mb-4 sm:mb-0'>
          <h4 className={`${styles.headerThreeBlack} mb-2 sm:mb-4`}>
            Quick Links
          </h4>
          <ul className='text-[0.8rem] md:text-[1rem]'>
            <li className='mb-2'>
              <a href='/our-company' className='text-black hover:text-primary'>
                About
              </a>
            </li>
            <li className='mb-2'>
              <a href='/services' className='text-black hover:text-primary'>
                Services
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='/guardenforcement-nigeria'
                className='text-black hover:text-primary'
              >
                Nigeria
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='/guardenforcement-usa'
                className='text-black hover:text-primary'
              >
                USA
              </a>
            </li>
          </ul>
        </div>
        <div className='mb-4 sm:mb-0'>
          <h4 className={`${styles.headerThreeBlack} mb-2 sm:mb-4`}>
            Subscribe
          </h4>
          <p className='text-[0.8rem]'>
            Subscribe to get latest news
            <br /> article and resources
          </p>
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='placeholder:text-[italic] bg-secondaryBackground h-10 pl-4 my-4 focus:border-2 focus:border-primary border-solid focus:outline-none shadow-sm'
              />
              <button
                type='submit'
                className={`${styles.buttonTwo} text-white text-[0.8rem]`}
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className='mb-4 sm:mb-0'>
          <h4 className={`${styles.headerThreeBlack} mb-2 sm:mb-4`}>
            Guard <span className='text-primary'>Enforcement</span>
          </h4>
          <ul className='text-[0.8rem] md:text-[1rem]'>
            <li className='mb-2'>
              <a
                href='mailto: info@guardenforcement.com'
                className='text-black hover:text-primary'
              >
                info@guardenforcement.com
              </a>
            </li>
            <li className='mb-2'>
              <a
                href='tel: +1 (510) 706-1906'
                className='text-primary hover:underline'
              >
                +1 (510) 706-1906
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='xxs:w-[88%] md:w-[80%] xl:max-w-[1100px] mx-auto flex flex-col sm:flex-row justify-between items-start pb-6 gap-4'>
        <div>Copyright © 2020</div>
        <div className='flex gap-5'>
          <a
            href='http://www.facebook.com'
            className='text-blackText hover:text-primary'
            target={'-blank'}
            rel='noreferrer'
          >
            <FaFacebookF fontSize={18} />{' '}
          </a>
          <a
            href='http://www.twitter.com'
            className='text-blackText hover:text-primary'
            target={'-blank'}
            rel='noreferrer'
          >
            <FaTwitter fontSize={18} />{' '}
          </a>
          <a
            href='http://www.instagram.com'
            className='text-blackText hover:text-primary'
            target={'-blank'}
            rel='noreferrer'
          >
            <AiFillInstagram fontSize={18} />{' '}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
