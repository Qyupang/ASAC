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
      <a href="./recruit_detail.html">
        <img src={imgSrc} alt="" className="recruitment-image" />
        <i className="fa-solid fa-bookmark bookmark-icon"></i>
        <span className="recruitment-title">{recruitTitle}</span>
        <span className="recruitment-company">{companyName}</span>
        <div className="response-rate">{responseRate}</div>
        <span className="location">{location}</span>
        <span className="incentive">{incentive}</span>
      </a>
    </li>
  );
};

export default Recruit;
