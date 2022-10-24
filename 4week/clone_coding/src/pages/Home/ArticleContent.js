import React from 'react';

const ArticleContent = ({ imgSrc, title, tag }) => {
  return (
    <div className="article-content">
      <img src={imgSrc} alt="" />
      <span className="article-content__title">{title}</span>
      <span className="article-content__tag">{tag}</span>
    </div>
  );
};

export default ArticleContent;
