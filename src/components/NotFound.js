import React from 'react';
import Meta from './Meta';

const NotFound = () => {
  return (
    <div className='h-screen grid place-content-center'>
      <Meta title={'Page Not Found'} />
      <h1 className='mb-10 text-[2rem]'>Error Loading Page</h1>
      <p className='mb-3 text-[1.2rem]'>
        The page your are looking for does not exist.
      </p>
      <p className='text-[1.2rem]'>Check the URL and try again.</p>
    </div>
  );
};

export default NotFound;
