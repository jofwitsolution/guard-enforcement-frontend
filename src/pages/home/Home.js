import React from 'react';
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  SectionSix,
} from './components';
import Meta from '../../components/Meta';

const home = () => {
  return (
    <div>
      <Meta title={'Guard Enforcement'} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionSix />
      <SectionFour />
      <SectionFive />
    </div>
  );
};

export default home;
