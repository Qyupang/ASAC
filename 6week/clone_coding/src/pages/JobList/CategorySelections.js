import React from 'react';

const CategorySelections = () => {
  return (
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
  );
};

export default CategorySelections;
