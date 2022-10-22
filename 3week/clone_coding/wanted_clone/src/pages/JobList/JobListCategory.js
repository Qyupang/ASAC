import React from 'react';
import CategoryButton from './CategoryButton';

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
        <div className="category-bottons">
          <CategoryButton keyword="연봉이 최고의 복지 💰" />
          <CategoryButton keyword="재택근무 🏠" />
          <CategoryButton keyword="퇴사율 10% 이하 📍" />
          <CategoryButton keyword="급성장 중 📈" />
          <CategoryButton keyword="병역특례 🧑" />
          <CategoryButton keyword="50인 이하 🔽" />
          <CategoryButton keyword="50인 이상 🔼" />
          <CategoryButton keyword="업력 5년 이상 🏢" />
          <CategoryButton keyword="유연근무 🕰" />
          <CategoryButton keyword="자유로운 휴가 🌴" />
          <CategoryButton keyword="일한만큼 받는 보상 💵" />
          <CategoryButton keyword="수평적인 문화 🙌" />
          <CategoryButton keyword="요즘 뜨는 산업 😮" />
          <CategoryButton keyword="식사·간식 제공 ☕️" />
        </div>
      </div>
    </section>
  );
};

export default JobListCategory;
