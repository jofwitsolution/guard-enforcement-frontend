import React from 'react';

const NigeriaMap = () => {
  return (
    <div>
      <div className='mapouter'>
        <div className='gmap_canvas'>
          <iframe
            src='https://maps.google.com/maps?q=62,%20Totoro%20Road,%20Totoro,%20Abeokuta,%20Ogun%20State&t=&z=13&ie=UTF8&iwloc=&output=embed'
            title='USA Office'
            id='gmap_canvas'
            width={'100%'}
            height={'100%'}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default NigeriaMap;
