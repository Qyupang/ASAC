import React from 'react';

const EventContent = ({ imgSrc, type1, type2, title, date }) => {
  return (
    <div className="event-content">
      <img src={imgSrc} alt="" className="event-content__image" />
      <div className="event-content__types">
        <span className="event-content__type">{type1}</span>
        <span className="event-content__type1">{type2}</span>
      </div>
      <span className="event-content__title">{title}</span>
      <span className="event-content__date">{date}</span>
    </div>
  );
};

export default EventContent;
