import React from 'react';

const CareerNav = ({ link, icon, title }) => {
  return (
    <a href={link} className="nav-career__box">
      <i className={icon}></i>
      <span className="nav-career__text">{title}</span>
    </a>
  );
};

export default CareerNav;
