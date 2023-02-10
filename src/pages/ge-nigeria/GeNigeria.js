import React from 'react';
import {
  SectionFour,
  SectionOne,
  SectionThree,
  SectionTwo,
} from './components';
import Meta from '../../components/Meta';

const GeNigeria = () => {
  return (
    <div className='bg-secondaryBackground'>
      <Meta title={'Guard Enforcement Nigeria - Guard Enforcement'} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default GeNigeria;
