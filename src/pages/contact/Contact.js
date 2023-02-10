import React from 'react';
import { SectionOne, SectionThree, SectionTwo } from './components';
import Meta from '../../components/Meta';

const Contact = () => {
  return (
    <div>
      <Meta title={'Contact us - Guard Enforcement'} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default Contact;
