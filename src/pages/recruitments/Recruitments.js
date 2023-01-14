import React from 'react';

import { SectionOne, SectionThree, SectionTwo } from './components';
import Meta from '../../components/Meta';

const Recruitments = () => {
  return (
    <div>
      <Meta title={'Recruitments - Guard Enforcement'} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default Recruitments;
