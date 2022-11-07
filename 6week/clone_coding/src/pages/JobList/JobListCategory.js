import React from 'react';
import CategoryButtonSlider from './CategoryButtonSlider';
import CategorySelections from './CategorySelections';

const JobListCategory = () => {
  return (
    <section className="category">
      <div className="category-wrap">
        <div className="category-top">
          <div className="category-top__career">
            <div className="category-top__career-type">
              <span>개발</span>
              <div className="button">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <div className="bar">|</div>
            <div className="category-top__career-detail">
              <span>개발 전체</span>
              <div className="button">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <CategorySelections />
        </div>
        <div className="category-buttons">
          <CategoryButtonSlider />
        </div>
      </div>
    </section>
  );
};

export default JobListCategory;
