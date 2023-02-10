import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export default function RotatingLinesLoader() {
  return (
    <>
      <RotatingLines
        strokeColor='white'
        strokeWidth='5'
        animationDuration='0.75'
        width='25'
        visible={true}
      />
    </>
  );
}
