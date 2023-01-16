import React from 'react';

const UsaMap = () => {
  return (
    <div>
      <div class='mapouter'>
        <div class='gmap_canvas'>
          <iframe
            src='https://maps.google.com/maps?q=433%20Callan%20Avenue%20Suite%20200,%20San%20Leandro,%20Carlifornia%2094577&t=&z=13&ie=UTF8&iwloc=&output=embed'
            title='USA Office'
            id='gmap_canvas'
            frameborder='0'
            scrolling='no'
            marginHeight='0'
            marginWidth='0'
            width={'100%'}
            height={'100%'}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default UsaMap;
