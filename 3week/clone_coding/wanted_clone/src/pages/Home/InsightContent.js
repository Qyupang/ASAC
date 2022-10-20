import React from 'react';

const InsightContent = ({ imgSrc, title, content, logoSrc, author }) => {
  return (
    <div className="career-insight__content">
      <img src={imgSrc} alt="" width="250" height="170" />
      <span className="career-insight__content-title">{title}</span>
      <p className="career-insight__content-main">{content}</p>
      <div className="career-insight__content-info">
        <div className="content-info__logo">
          <img src={logoSrc} alt="" />
        </div>
        <span className="content-info__author">{author}</span>
      </div>
    </div>
  );
};

export default InsightContent;
