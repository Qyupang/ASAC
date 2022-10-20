import React from 'react';

const VodContent = ({ imgSrc, runtime, maker, title, tag }) => {
  return (
    <div className="vod-content">
      <img src={imgSrc} alt="" className="vod-image" />
      <span className="runtime">{runtime}</span>
      <span className="vod-content__maker">{maker}</span>
      <span className="vod-content__title">{title}</span>
      <span className="vod-content__tag">{tag}</span>
    </div>
  );
};

export default VodContent;
