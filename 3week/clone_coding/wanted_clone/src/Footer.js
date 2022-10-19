import React from 'react';
import './css/style.css';

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top__left">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
            alt=""
            className="logo"
          />
          <nav className="footer-nav">
            <ul>
              <li>기업소개</li>
              <li>이용약관</li>
              <li>개인정보 처리방침</li>
              <li>고객센터</li>
            </ul>
          </nav>
        </div>
        <div className="footer-top__right">
          <div className="sns">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=100"
              alt=""
              className="insta"
            />
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=100"
              alt=""
              className="youtube"
            />
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=100"
              alt=""
              className="facebook"
            />
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&w=20&q=100"
              alt=""
              className="naver-blog"
            />
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&w=19&q=100"
              alt=""
              className="kakao"
            />
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&w=20&q=100"
              alt=""
              className="naver-post"
            />
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=100"
              alt=""
              className="apple"
            />
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&w=17&q=100"
              alt=""
              className="play-store"
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="company-description">
          <span>
            (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
            롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
          </span>
          <span>
            유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
            (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 |
            02-539-7118
          </span>
          <span> © Wantedlab, Inc. </span>
        </div>
        <select name="language" id="select-lang">
          <option value="kor">🇰🇷 한국 (한국어)</option>
          <option value="jap">🇯🇵 日本 (日本語)</option>
          <option value="eng">🌎 wordlwide (English)</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
