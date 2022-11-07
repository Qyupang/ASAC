import React from 'react';

const TopSectionCompany = ({ imgSrc, logoSrc, companyName, positionNum }) => {
  return (
    <div className="top-section__company">
      <div className="top-section__company-header">
        <img src={imgSrc} alt="" className="banner-image" />
        <img src={logoSrc} alt="" className="company-image" />
      </div>
      <div className="top-section__company-footer">
        <span className="company-name">{companyName}</span>
        <span className="position-num">{positionNum}</span>
      </div>
    </div>
  );
};

export default TopSectionCompany;
