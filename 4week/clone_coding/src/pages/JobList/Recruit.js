import React from 'react';

const Recruit = ({
  imgSrc,
  recruitTitle,
  companyName,
  responseRate,
  location,
  incentive,
}) => {
  return (
    <li className="recruitment">
      <img src={imgSrc} alt="" className="recruitment-image" />
      <i className="fa-solid fa-bookmark bookmark-icon"></i>
      <span className="recruitment-title">{recruitTitle}</span>
      <span className="recruitment-company">{companyName}</span>
      <div className="response-rate">{responseRate}</div>
      <span className="location">{location}</span>
      <span className="incentive">
        채용보상금 {incentive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        원
      </span>
    </li>
  );
};

export default Recruit;
