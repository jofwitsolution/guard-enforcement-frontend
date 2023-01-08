import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../../constants/images';
import styles from '../../../styles/tailwind';

const callouts = [
  {
    name: 'We assess',
    description:
      'Immediately, we enter into a contractual agreement with  a client, we deploy a team of dedicated professionals to do a comprehensive Needs Assessment of the client’s security requirements.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Guard Enforcement',
    href: '#',
  },
  {
    name: 'We give the best',
    description:
      'Based on this Needs Analysis, we come up with a security model tailored to their specific needs to meet the client’s  security situation.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Guard Enforcement',
    href: '#',
  },
  {
    name: 'We are outstanding',
    description:
      'Unlike other security outfits,we do not believe in one size fits all. Our analysis may include a SOFTWARE solution based on the peculiarities of the client’s security situation.',
    imageSrc: images.ge6,
    imageAlt: 'Guard Enforcement',
    href: '#',
  },
];

const SectionFour = () => {
  return (
    <section className=''>
      <div className={`${styles.maxWidth}`}>
        <div className='bg-gray-100'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
              <h2 className='text-2xl font-bold text-gray-900'>
                How We Operate
              </h2>

              <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
                {callouts.map((callout) => (
                  <div key={callout.name} className='group relative'>
                    <div className='relative w-full overflow-hidden sm:rounded-lg bg-white group-hover:opacity-75 max-h-64'>
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <h3 className='mt-6 text-sm text-gray-500'>
                      <a href={callout.href}>
                        <span className='absolute inset-0' />
                        {callout.name}
                      </a>
                    </h3>
                    <p className='text-base font-semibold text-gray-900'>
                      {callout.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [200, 0] }}
          transition={{ duration: 1, type: 'tween' }}
          className='w-[90%] md:w-[70%] bg-primary py-5 px-4 sm:px-10'
        >
          <div className='text-white text-[1.5rem] sm:text-[2rem] leading-[1.2]'>
            Thank you for considering Guard Enforcement for your security needs
          </div>

          <motion.a
            initial={{ opacity: 0, visibility: 'hidden' }}
            whileInView={{ opacity: [0, 1], visibility: 'visible' }}
            transition={{ delay: 1, duration: 1, type: 'tween' }}
            href='/contact'
          >
            <p className='text-white mt-2'>
              Contact us today to learn more about our services and how we can
              help protect you and your business.
            </p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFour;
