import React from 'react';
import BannerDescript from './BannerDescript';

const Banner = ({ imgSrc, title, descript }) => {
  return (
    <div className="banner">
      <img
        src={imgSrc}
        alt=""
        width="100%"
        height="300px"
        className="banner-image"
      />
      <BannerDescript title descript />
    </div>
  );
};

export default Banner;
