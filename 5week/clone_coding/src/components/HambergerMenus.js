import React from 'react';
import { Link } from 'react-router-dom';

const HambergerMenus = ({ setMouseOn }) => {
  const closeMenus = () => {
    setMouseOn(false);
    console.log('bye');
  };
  const retainMenus = () => {
    setMouseOn(true);
  };
  return (
    <div className="hamburger" onMouseOut={closeMenus}>
      <ul className="career-categories" onMouseOver={retainMenus}>
        <Link className="career-category" to="/wdlist">
          직군전체
        </Link>
        <li className="career-category">개발</li>
        <li className="career-category">경영·비지니스</li>
        <li className="career-category">마케팅·광고</li>
        <li className="career-category">디자인</li>
        <li className="career-category">영업</li>
        <li className="career-category">고객서비스·리테일</li>
        <li className="career-category">HR</li>
        <li className="career-category">게임 제작</li>
        <li className="career-category">미디어</li>
        <li className="career-category">엔지니어링·설계</li>
        <li className="career-category">금융</li>
        <li className="career-category">제조·생산</li>
        <li className="career-category">물류·무역</li>
        <li className="career-category">의료·제약·바이오</li>
        <li className="career-category">교육</li>
        <li className="career-category">식·음료</li>
        <li className="career-category">법률·법집행기관</li>
        <li className="career-category">건설·시설</li>
        <li className="career-category">공공·복지</li>
        <div className="freelancer-box">
          <li className="freelancer">프리랜서</li>
        </div>
      </ul>
    </div>
  );
};

export default HambergerMenus;
