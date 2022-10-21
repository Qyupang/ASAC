import React from 'react';
import '../styles/style.css';

function Header() {
  return (
    <header>
      <div className="header">
        <div className="left-side">
          <i className="fa-solid fa-bars cursor"></i>
          <h1 className="logo cursor">
            <a href="index.html">wanted</a>
          </h1>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <span className="none">
                <a href="recruit.html">채용</a>
              </span>
            </li>
            <li>
              <span className="none">이벤트 </span>
            </li>
            <li>
              <span className="none">직군별 연봉 </span>
            </li>
            <li>
              <span className="none">이력서 </span>
            </li>
            <li>
              <span className="sup-new">커뮤니티 </span>
            </li>
            <li>
              <span className="none">프리랜서 </span>
            </li>
            <li>
              <span className="sup-beta">AI 합격예측 </span>
            </li>
          </ul>
        </nav>
        <div className="right-side">
          <i className="fa-solid fa-magnifying-glass cursor"></i>
          <span className="cursor login-button">회원가입/로그인</span>
          <span className="bar">|</span>
          <a
            href="https://www.wanted.co.kr/dashboard/welcome"
            className="cursor"
          >
            기업 서비스
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
