import React from 'react';
import Recruit from './Recruit';
import TopSectionCompany from './TopSectionCompany';

const JobDetailMain = () => {
  return (
    <main>
      <section class="top-section">
        <div class="bookmark">
          <i class="fa-solid fa-bookmark"></i>
          북마크 모아보기 &gt;
        </div>
        <span class="top-section__title"> 적극 채용 중인 회사 </span>
        <div class="top-setion__companies">
          <TopSectionCompany
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F216%2Fpdgjch6eg5ajfdfm__400_400.jpg&w=400&q=75"
            logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.799382a7.jpg&w=100&q=75"
            companyName="화해(버드뷰)"
            positionNum="16개 포지션"
          />
          <TopSectionCompany
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F1355%2F16906_2_0.__400_400.jpg&w=400&q=75"
            logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5_01c06ee3-c3ec-4c81-8f3f-ab7418f1d75a.jpg&w=100&q=75"
            companyName="탭조이코리아(Tapjoy)"
            positionNum="8개 포지션"
          />
          <TopSectionCompany
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F805%2Fqmeqtcb0lrqseulw__400_400.png&w=400&q=75"
            logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.e2774c2c.jpg&w=100&q=75"
            companyName="해줌"
            positionNum="5개 포지션"
          />
          <TopSectionCompany
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F35903%2Fxbk7aqiygykq2crq__400_400.jpg&w=400&q=75"
            logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.5654364d.jpg&w=100&q=75"
            companyName="롱기스트"
            positionNum="3개 포지션"
          />
          <TopSectionCompany
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F7111%2Fydhlckrrli3dyd3i__400_400.jpg&w=400&q=75"
            logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.e2e8ebd6.jpg&w=100&q=75"
            companyName="세컨신드롬"
            positionNum="18개 포지션"
          />
        </div>
      </section>
      <section class="recruitment-announcement">
        <ul class="recruitments">
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Feh1mycy7nnltf5ah__1080_790.jpg&w=1000&q=75"
            recruitTitle="웹 프론트엔드 개발자(React)"
            companyName="블루비커"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F24827%2Fsfygensszfn8g8gt__400_400.jpg&w=400&q=75"
            recruitTitle="iOS 개발자 (iOS Developer)"
            companyName="다큐브(daquv)"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F35490%2Fri4mmve51yszgclk__400_400.jpg&w=400&q=75"
            recruitTitle="자바 개발 팀장"
            companyName="시큐어레터"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F33258%2F2ndaiiurzpxktqnd__400_400.jpg&w=400&q=75"
            recruitTitle="ASP.NET Core 백엔드 개발자 "
            companyName="클라우드호스피탈"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
        </ul>
        <ul class="recruitments">
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22152%2Fzfcvnwqkqwrddima__400_400.png&w=400&q=75"
            recruitTitle="머신러닝 엔지니어"
            companyName="비팩토리(B Factory)"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F31829%2Fjnpo0nc96whq3m5x__400_400.jpg&w=400&q=75"
            recruitTitle="F/W 개발 엔지니어 (for RADAR system)"
            companyName="모본"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F31829%2Fjnpo0nc96whq3m5x__400_400.jpg&w=400&q=75"
            recruitTitle="RADAR 알고리즘 개발 엔지니어"
            companyName="모본"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F18482%2Fk3wjsyzzomlui7yq__400_400.jpg&w=400&q=75"
            recruitTitle="iOS 앱 개발자"
            companyName="딥파인"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
        </ul>
        <ul class="recruitments">
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F18482%2Fk3wjsyzzomlui7yq__400_400.jpg&w=400&q=75"
            recruitTitle="로봇 응용 S/W 엔지니어 (선임-책임급)"
            companyName="로아스"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F34549%2Fpgg6syhaiistu9ws__400_400.jpg&w=400&q=75"
            recruitTitle="
              로봇 응용 S/W FAE (Field Application Engineer)
            "
            companyName="로아스"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F34549%2Fpgg6syhaiistu9ws__400_400.jpg&w=400&q=75"
            recruitTitle="
              로봇 응용 S/W 엔지니어 (선임-책임급)
            "
            companyName="로아스"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F34549%2Fpgg6syhaiistu9ws__400_400.jpg&w=400&q=75"
            recruitTitle="
              로봇 응용 S/W 엔지니어 (책임-수석급)
            "
            companyName="로아스"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
        </ul>
        <ul class="recruitments">
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F5821%2Fe162mnkzotucvaju__400_400.jpg&w=400&q=75"
            recruitTitle="iOS 개발자
            "
            companyName="서밋코퍼레이션"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F5821%2Fe162mnkzotucvaju__400_400.jpg&w=400&q=75"
            recruitTitle="개발PM"
            companyName="서밋코퍼레이션"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F5821%2Fe162mnkzotucvaju__400_400.jpg&w=400&q=75"
            recruitTitle="Android/iOS APP 운영 개발자"
            companyName="서밋코퍼레이션"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
          <Recruit
            imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F23336%2Ft28za5k3wbbm52oc__400_400.jpeg&w=400&q=75"
            recruitTitle="
              Mobile Application 개발(Robot Software Engineer)
            "
            companyName="플라잎"
            responseRate="응답률 매우 높음"
            location="서울·한국"
            incentive="채용보상금 1,000,000원"
          />
        </ul>
      </section>
    </main>
  );
};

export default JobDetailMain;
