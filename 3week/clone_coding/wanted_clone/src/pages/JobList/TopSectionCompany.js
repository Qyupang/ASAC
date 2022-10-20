import React from 'react';

const TopSectionCompany = ({ imgSrc, logoSrc, companyName, positionNum }) => {
  return (
    <div class="top-section__company">
      <div class="top-section__company-header">
        <img src={imgSrc} alt="" class="banner-image" />
        <img src={logoSrc} alt="" class="company-image" />
      </div>
      <div class="top-section__company-footer">
        <span class="company-name">{companyName}</span>
        <span class="position-num">{positionNum}</span>
      </div>
    </div>
  );
};

export default TopSectionCompany;
