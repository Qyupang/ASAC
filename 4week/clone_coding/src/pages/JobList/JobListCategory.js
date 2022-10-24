import React from 'react';
import CategoryButtonSlider from './CategoryButtonSlider';

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
          <div className="category-top__selections">
            <div className="category-top__selection-left">
              <div className="category-top__selection-region">
                <span>지역 </span>
                <span className="blue">한국</span>
                <span className="category-top__selected-num">1</span>
              </div>
              <div className="category-top__selection-career">
                <div className="career-all">
                  <span>경력 </span>
                  <span className="blue">전체 </span>
                  <i className="fa-solid fa-sort-down"></i>
                </div>
              </div>
              <div className="category-top__selection-tech">
                <div className="tech">
                  기술스택 <i className="fa-solid fa-sort-down"></i>
                </div>
              </div>
            </div>
            <div className="category-top__selection-right">
              <select name="sorting" id="sorting">
                <option value="response">응답률순</option>
                <option value="recently">최신순</option>
                <option value="incentive">보상금순</option>
                <option value="hot">인기순</option>
              </select>
            </div>
          </div>
        </div>
        <div className="category-buttons">
          <CategoryButtonSlider />
        </div>
      </div>
    </section>
  );
};

export default JobListCategory;
