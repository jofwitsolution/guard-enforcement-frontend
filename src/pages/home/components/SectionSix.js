import React from 'react';
import { BsArrowRightSquareFill } from 'react-icons/bs';

import { images } from '../../../constants/images';
import styles from '../../../styles/tailwind';

const SectionSix = () => {
  return (
    <section className='py-[2rem] md:py-[2rem]'>
      <div
        className={`${styles.maxWidth} rounded-sm py-[34px] h-max bg-secondaryBackground mb-10 md:mb-20`}
      >
        <div className='flex flex-col md:flex-row items-center'>
          <div className='flex-1'>
            <img src={images.ge5} alt='guard enforcement 3' className='' />
          </div>
          <div className='flex-1 md:p-4 mt-8 md:mt-0'>
            <a href='/guardenforcement-usa'>
              <div className={`${styles.headerTwoPrimary} text-center`}>
                Guard Enforcement USA
              </div>
              <p className='mb-2'>
                We provide a range of security services in the United States.
                Our team of security professionals is trained to handle a
                variety of security-related tasks, including monitoring and
                protecting properties, enforcing rules and regulations, and
                responding to emergencies.
              </p>
              <p className='mb-2'>
                We are dedicated to providing high-quality, reliable security
                services to our clients and we are committed to maintaining the
                safety and security of our customers.
              </p>
              <div className='mt-5 w-max'>
                <span className='text-primary hover:text-black '>
                  <BsArrowRightSquareFill fontSize={30} />
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='flex-1 md:pr-4 mt-8 md:mt-0'>
            <a href='/guardenforcement-nigeria'>
              <div className={`${styles.headerTwoPrimary} text-center`}>
                Guard Enforcement Nigeria
              </div>
              <p className='mb-2'>
                We are dedicated to providing top-quality security services to
                our clients in Nigeria. We offer a range of security services,
                including armed and unarmed guard services, patrol services, and
                event security. No matter what your security needs may be, we
                have the expertise and resources to meet them.
              </p>
              <p>
                We are committed to maintaining the safety and security of our
                clients and are dedicated to delivering reliable and
                professional security services. Trust us to keep you, your
                property, and your assets safe and secure. Contact us today to
                learn more about how we can help protect you.
              </p>
              <div className='mt-5 w-max'>
                <span className='text-primary hover:text-black'>
                  <BsArrowRightSquareFill fontSize={30} />
                </span>
              </div>
            </a>
          </div>
          <div className='flex-1 order-[-1] md:order-1 mt-8 md:mt-0'>
            <img src={images.ge3} alt='guard enforcement 3' className='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
