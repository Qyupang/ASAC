import React from 'react';

const BannerDescript = ({ title, descript }) => {
  return (
    <div className="banner-descript">
      <div className="banner-descript__text">
        <span className="banner-descript__title">{title}</span>
        <span className="banner-descript__descript">{descript}</span>
        <div className="line">1</div>
        <a href="#" className="banner-link">
          바로가기 {`>`}
        </a>
      </div>
    </div>
  );
};

export default BannerDescript;
