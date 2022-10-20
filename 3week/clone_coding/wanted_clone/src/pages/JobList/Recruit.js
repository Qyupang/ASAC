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
    <li class="recruitment">
      <a href="./recruit_detail.html">
        <img src={imgSrc} alt="" class="recruitment-image" />
        <i class="fa-solid fa-bookmark bookmark-icon"></i>
        <span class="recruitment-title">{recruitTitle}</span>
        <span class="recruitment-company">{companyName}</span>
        <div class="response-rate">{responseRate}</div>
        <span class="location">{location}</span>
        <span class="incentive">{incentive}</span>
      </a>
    </li>
  );
};

export default Recruit;
