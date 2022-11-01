import React from 'react';
import '../../styles/style.css';
import InsightContent from './InsightContent';
import ArticleContent from './ArticleContent';
import VodContent from './VodContent';
import EventContent from './EventContent';
import InsightButtonSlider from './InsightButtonSlider';
import CareerNav from './CareerNav';
import BannerSlider from './BannerSlider';
import dummyForContent from '../../db/MainPage/insightContent.json';
import dummyForArticle from '../../db/MainPage/articleContent.json';
import dummyForVod from '../../db/MainPage/vodContent.json';
import dummyForEvent from '../../db/MainPage/eventContent.json';

const Section = () => {
  return (
    <main>
      <section className="main-banner">
        <div className="banners">
          <BannerSlider />
        </div>
      </section>
      <section className="career-insight">
        <span className="title">
          나에게 필요한 커리어 인사이트
          <span> </span>
          <i className="fa-regular fa-circle-question"></i>
        </span>
        <div className="career-insight__buttons">
          <InsightButtonSlider />
        </div>
        <div className="career-insight__contents">
          {dummyForContent.contents.map((content) => (
            <InsightContent
              imgSrc={content.imgSrc}
              title={content.title}
              content={content.content}
              logoSrc={content.logoSrc}
              author={content.author}
            />
          ))}
        </div>
        <button className="career-insight__more">
          더 많은 콘텐츠 보기 <i className="fa-solid fa-chevron-down"></i>
        </button>
      </section>
      <section className="article">
        <span className="section-title">3분만에 읽는 Wanted+ 아티클</span>
        <span className="section-all">아티클 전체보기 {`>`}</span>
        <div className="article-contents">
          {dummyForArticle.contents.map((content) => (
            <ArticleContent
              imgSrc={content.imgSrc}
              title={content.title}
              tag={content.tag}
            />
          ))}
        </div>
      </section>
      <section className="vod">
        <span className="section-title">직장인을 위한 Wanted+ VOD</span>
        <span className="section-all">VOD 전체보기 {`>`}</span>
        <div className="vod-contents">
          {dummyForVod.contents.map((content) => (
            <VodContent
              imgSrc={content.imgSrc}
              runtime={content.runtime}
              maker={content.maker}
              title={content.title}
              tag={content.tag}
            />
          ))}
        </div>
      </section>
      <button className="recommendation">
        직군/직무를 입력하면 관련 콘텐츠를 추천해드려요.👀 {`>`}
      </button>
      <section className="event">
        <span className="section-title">커리어 성장을 위한 맞춤 이벤트</span>
        <span className="section-all">이벤트 전체보기 {`>`}</span>
        <div className="event-contents">
          {dummyForEvent.contents.map((content) => (
            <EventContent
              imgSrc={content.imgSrc}
              type1={content.type1}
              type2={content.type2}
              title={content.title}
              date={content.date}
            />
          ))}
        </div>
      </section>
      <section className="subscribe">
        <div className="subscribe-wrap">
          <div className="subscribe-left">
            <div className="subscribe-left__text">
              <span className="subscribe-title">
                <span className="strong">wanted +</span> 구독해야하는 이유
              </span>
              <span className="subscribe-descript">
                구독자의 서류 합격률이 비구독자보다 1.5배 높아요!
              </span>
            </div>
            <button className="subscribe-button">✓ 첫 구독 0원 신청하기</button>
          </div>
          <div className="subscribe-right">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90"
              alt=""
              className="subscribe-img"
            />
          </div>
        </div>
      </section>
      <section className="info">
        <nav className="nav-carear-info">
          <span className="section-title">채용 정보를 찾고 계셨나요?</span>
          <div className="nav-career-menu">
            <CareerNav
              link="https://www.wanted.co.kr/wdlist?country=kr&job_sort=company.response_rate_order&years=-1&locations=all"
              icon="fa-solid fa-magnifying-glass"
              title="채용공고 >"
            />
            <CareerNav
              link="https://www.wanted.co.kr/login?redirect_url=%2Fprofile"
              icon="fa-solid fa-user"
              title="내 프로필 >"
            />
            <CareerNav
              link="https://www.wanted.co.kr/jobsfeed"
              icon="fa-light fa-building"
              title="매치업 >"
            />
            <CareerNav
              link="https://www.wanted.co.kr/salary"
              icon="fa-solid fa-sliders"
              title="직군별 연봉 >"
            />
          </div>
        </nav>
      </section>
    </main>
  );
};

export default Section;
