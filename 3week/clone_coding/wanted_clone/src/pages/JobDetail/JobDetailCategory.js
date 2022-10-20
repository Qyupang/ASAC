import React from 'react';

const JobDetailCategory = () => {
  return (
    <section class="category">
      <div class="category-wrap">
        <div class="category-top">
          <div class="category-top__career">
            <div class="category-top__career-type">
              <span>개발</span>
              <div class="button">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <div class="bar">|</div>
            <div class="category-top__career-detail">
              <span>개발 전체</span>
              <div class="button">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div class="category-top__selections">
            <div class="category-top__selection-left">
              <div class="category-top__selection-region">
                <span>지역</span>
                <span class="blue">한국</span>
                <span class="category-top__selected-num">1</span>
              </div>
              <div class="category-top__selection-career">
                <div class="career-all">
                  경력
                  <span class="blue">전체</span>
                  <i class="fa-solid fa-sort-down"></i>
                </div>
              </div>
              <div class="category-top__selection-tech">
                <div class="tech">
                  기술스택 <i class="fa-solid fa-sort-down"></i>
                </div>
              </div>
            </div>
            <div class="category-top__selection-right">
              <select name="sorting" id="sorting">
                <option value="response">응답률순</option>
                <option value="recently">최신순</option>
                <option value="incentive">보상금순</option>
                <option value="hot">인기순</option>
              </select>
            </div>
          </div>
        </div>
        <div class="category-bottons">
          <button class="category-botton keyword">연봉이 최고의 복지 💰</button>
          <button class="category-botton keyword">재택근무 🏠</button>
          <button class="category-botton keyword">퇴사율 10% 이하 📍</button>
          <button class="category-botton keyword">급성장 중 📈</button>
          <button class="category-botton keyword">병역특례 🧑</button>
          <button class="category-botton keyword">50인 이하 🔽</button>
          <button class="category-botton keyword">50인 이상 🔼</button>
          <button class="category-botton keyword">업력 5년 이상 🏢</button>
          <button class="category-botton keyword">유연근무 🕰</button>
          <button class="category-botton keyword">자유로운 휴가 🌴</button>
          <button class="category-botton keyword">일한만큼 받는 보상 💵</button>
          <button class="category-botton keyword">수평적인 문화 🙌</button>
          <button class="category-botton keyword">요즘 뜨는 산업 😮</button>
          <button class="category-botton keyword">식사·간식 제공 ☕️</button>
        </div>
      </div>
    </section>
  );
};
