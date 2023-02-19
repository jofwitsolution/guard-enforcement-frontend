import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const DashboardLoading = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div>
        <RotatingLines
          strokeColor='red'
          strokeWidth='5'
          animationDuration='0.75'
          width='40'
          visible={true}
        />
      </div>
    </div>
  );
};

export default DashboardLoading;
