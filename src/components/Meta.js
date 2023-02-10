import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Guard Enforcement',
  description: `Founded in 2010, We are an indigenious private security 
  company with tentacles in the United States of America. Guard Enforcement 
  Security and Patrol is highly commited to protecting people and properties 
  while providing complete peace of mind.  We are dedicated to keeping your people, 
  properties and assets
    through deep understanding and mitigation of security risks.
    With our combined expertise and resource, we effectively deliver
    security services and solutions in a wide array of industries.`,
  keywords:
    'Guard Enforcement Security and Patrol, Guard Enforcement, Security Company',
};

export default Meta;
