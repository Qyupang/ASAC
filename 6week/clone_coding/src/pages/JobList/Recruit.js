import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Recruit = ({ company }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/wd/${company.id}`);
  };

  const [isBookMarked, setIsBookMarked] = useState(false);

  return (
    <li className="recruitment">
      <img
        src={company.imgSrc}
        alt=""
        className="recruitment-image"
        onClick={onClick}
      />
      <i
        className="fa-solid fa-bookmark bookmark-icon"
        onClick={() => {
          isBookMarked
            ? setIsBookMarked(!isBookMarked)
            : setIsBookMarked(!isBookMarked);
        }}
        style={isBookMarked ? { color: 'blue' } : null}
      />
      <span className="recruitment-title" onClick={onClick}>
        {company.position}
      </span>
      <span className="recruitment-company" onClick={onClick}>
        {company.companyName}
      </span>
      <div className="response-rate" onClick={onClick}>
        {company.responseRate}
      </div>
      <span className="location" onClick={onClick}>
        {company.location}
      </span>
      <span className="incentive" onClick={onClick}>
        채용보상금
        {company.incentive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      </span>
    </li>
  );
};

export default Recruit;
