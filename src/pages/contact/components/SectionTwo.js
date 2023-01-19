import React from 'react';

import styles from '../../../styles/tailwind';
import UsaMap from '../../../components/UsaMap';
import NigeriaMap from '../../../components/NigeriaMap';

const SectionTwo = () => {
  return (
    <section className='pb-2 md:pb-[3rem]'>
      <div className={`${styles.maxWidth}`}>
        <div className='flex flex-col md:flex-row gap-8 md:gap-8 items-center'>
          <div className='flex-[50%] shadow-xl rounded-xl p-4'>
            <span className='inline-block text-primary font-bold text-[1.2rem] mb-2 md:mb-4'>
              USA Office
            </span>
            <div className='mb-2 md:mb-4'>
              <UsaMap />
            </div>
            <p>
              433 Callan Avenue Suite 200, San Leandro, Carlifornia 94577,
              United State of America.
            </p>
            <p>
              Tel:
              <a href='tel: +15107061906'> +15107061906</a>
            </p>
            <p>Fax: +15103157071</p>
          </div>
          <div className='flex-[50%] shadow-xl rounded-xl p-4'>
            <span className='inline-block text-primary font-bold text-[1.2rem] mb-2 md:mb-4'>
              Nigeria Office
            </span>
            <div className='mb-2 md:mb-4'>
              <NigeriaMap />
            </div>
            <p>62, Totoro Road, Totoro, Abeokuta, Ogun State.</p>
            <p>
              Off. 1st Avenue, Victory Estate, Opposite Crescent University,
              Adehun, Abeokuta-Ayetoro Road, Abeokuta, Ogun State.
            </p>
            <p>
              Tel:
              <a href='tel: +2348131174459'> +2348131174459</a>
              <a href='tel: +2348164845232'> +2348164845232</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
