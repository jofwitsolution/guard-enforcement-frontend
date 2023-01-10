import React from 'react';
import {
  SectionFour,
  SectionOne,
  SectionThree,
  SectionTwo,
} from './components';
import Meta from '../../components/Meta';

const About = () => {
  return (
    <div>
      <Meta title={'Our Company - Guard Enforcement'} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default About;
