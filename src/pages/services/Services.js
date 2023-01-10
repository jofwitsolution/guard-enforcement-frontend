import React from 'react';
import {
  SectionFour,
  SectionOne,
  SectionThree,
  SectionTwo,
} from './components';
import Meta from '../../components/Meta';

const Services = () => {
  return (
    <div>
      <Meta title={'Services - Guard Enforcement'} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default Services;
