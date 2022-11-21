import React from 'react';
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';
import SearchButton from './SearchButton';
import Hamburger from './Hamburger';
import LoggedUserIcon from './LoggedUserIcon';
import { useSelector } from 'react-redux';

function Header() {
  const isLogined = useSelector((state) => state.login.logged);

  return (
    <header>
      <div className="header">
        <div className="left-side">
          <Hamburger />
          <h1 className="logo cursor">
            <Link to="/">wanted</Link>
          </h1>
        </div>
        <nav className="header-nav">
          <ul>
            <Link to="/wdlist">
              <li>
                <span className="none">채용</span>
              </li>
            </Link>
            <li>
              <span className="none">이벤트</span>
            </li>
            <li>
              <span className="none header-wage">직군별 연봉 </span>
            </li>
            <li>
              <span className="none header-resume">이력서 </span>
            </li>
            <li>
              <span className="sup-new">커뮤니티 </span>
            </li>
            <li>
              <span className="none header-freelancer">프리랜서 </span>
            </li>
            <li>
              <span className="sup-beta">AI 합격예측 </span>
            </li>
          </ul>
        </nav>
        <div className="right-side">
          <SearchButton />
          {isLogined ? <LoggedUserIcon /> : <LoginButton />}
          <span className="bar">|</span>
          <a
            href="https://www.wanted.co.kr/dashboard/welcome"
            className="cursor corporate-service"
          >
            기업 서비스
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
