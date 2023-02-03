import React from 'react';
import { images } from '../../../constants/images';
import styles from '../../../styles/tailwind';

const SectionThree = () => {
  return (
    <section className='py-[2rem] md:py-[5rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className=' flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-start shadow-lg p-5 md:p-0'>
          <div className=''>
            <img src={images.ge11} alt='Guard Enforcement' className='' />
          </div>
          <div className='md:w-[50%]'>
            <p>
              As a security professional at Guard Enforcement, you will have the
              opportunity to work on a variety of projects and to gain
              experience in different areas of the security industry. We provide
              ongoing training and development opportunities to help you reach
              your full potential, and we offer a competitive salary and
              benefits package.
            </p>
          </div>
        </div>
        <div className='mt-10'>
          <p>
            For the position of security guard, the following are the
            application requirements:
          </p>

          <div className='ml-5 mt-5'>
            <ul className='list-disc'>
              <li>
                Education: SSCE/NCE/OND/HND/Bachelor's degree/any equivalent
              </li>
              <li>
                Applicant must have two guarantor; a Clergy person and Police
                statement
              </li>
              <li>Minimum height of 5ft and maximum weight of 90kg</li>
            </ul>
          </div>
          <div className='flex items-center my-5'>
            click{' '}
            <a
              href='https://forms.gle/C9Rx1ovrcStqS1vG8'
              className={`${styles.buttonOne} mx-2 text-white`}
              target={'_blank'}
              rel={'noreferrer'}
            >
              Apply Now
            </a>{' '}
            to apply
          </div>

          <p>
            Other positions should send their CV to
            recruitment@guardenforcement.com. Qualified applicants will be
            contacted after their CV has been reviewed by our recruitment team.
          </p>

          <div className='my-5'>
            For recruitment enquiries contact;
            <div>
              WhatsApp:{' '}
              <a
                href='https://wa.me/2348137192766'
                target={'_blank'}
                rel='noreferrer'
                className='text-primary hover:text-primaryAlt'
              >
                +2348137192766
              </a>
            </div>
            <div>
              WhatsApp:{' '}
              <a
                href='https://wa.me/2348077050852'
                target={'_blank'}
                rel='noreferrer'
                className='text-primary hover:text-primaryAlt'
              >
                +2348077050852
              </a>
            </div>
            <div>
              Email:{' '}
              <a
                href='mailto: info@guardenforcement.com'
                target={'_blank'}
                rel='noreferrer'
                className='text-primary hover:text-primaryAlt'
              >
                info@guardenforcement.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
