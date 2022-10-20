import React from 'react';
import '../../styles/style.css';
import InsightContent from './InsightContent';
import ArticleContent from './ArticleContent';
import VodContent from './VodContent';
import EventContent from './EventContent';
import InsightButton from './InsightButton';
import CareerNav from './CareerNav';
import Banner from './Banner';

const Section = () => {
  return (
    <div>
      <main>
        <section className="main-banner">
          <div className="banners">
            <Banner
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.jpg&w=1060&q=100"
              title="
                    기업이 원하는 프론트엔드 개발자 되기
                  "
              descript="
                    프리온보딩 프론트엔드 코스
                  "
            />
            <Banner
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1825%2Fb93ecf4e.jpg&w=1060&q=100"
              title="
                    마키나락스에 세로 들어와!
                  "
              descript="
                    적극 채용 중인 포지션을 영상으로 확인하세요!
                  "
            />
            <Banner
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1852%2F41073f1a.jpg&w=1060&q=100"
              title="
                    단 4주! 백엔드 신입딱지 떼기
                  "
              descript="프리온보딩 백엔드 코스"
            />
            <Banner
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1843%2F6e4ca95f.jpg&w=1060&q=100"
              title="
                    원티드긱스 <개발자의 달>
                  "
              descript="프리랜서 개발자를 위한 이벤트"
            />
            <Banner
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1791%2F19d8e5bf.jpg&w=1060&q=100"
              title="
                    우리 회사를 소개합니다
                  "
              descript="원티드가 들려주는 진짜 회사이야기"
            />
            <Banner
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1835%2F487d8bb0.jpg&w=1060&q=100"
              title="
                    Startup Lead Gruop Coaching
                  "
              descript="스타트업 팀장을 위한 그룹 코칭"
            />
            <Banner
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1850%2F43625ed8.jpg&w=1060&q=100"
              title="
                    10월 원티드살롱
                  "
              descript="HR담당자를 위한 네트워킹"
            />
            <Banner
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1844%2F3d999be3.jpg&w=1060&q=100"
              title="
                    [FREE] GDSC Job Fair Live
                  "
              descript="국내 최고 스타트업 채용소식을 볼 수 있는 기회!"
            />
            <Banner
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1853%2F2464b111.jpg&w=1060&q=100"
              title="
                    리텐션 높이는 '아하 모먼트'를 찾아서
                  "
              descript="성공을 리드하는 번개장터 마케터"
            />
            <Banner
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1826%2F849c1703.jpg&w=1060&q=100"
              title="
                    롯데헬스케어에 세로들어와!
                  "
              descript="적극 채용 중인 포지션을 영상으로 확인하세요!"
            />
          </div>
        </section>
        {/* <!-- <section className="slide"></section> --> */}
        <section className="career-insight">
          <span className="title">
            나에게 필요한 커리어 인사이트
            <i className="fa-regular fa-circle-question"></i>
          </span>
          <div className="career-insight__buttons">
            <InsightButton content="리더십" />
            <InsightButton content="라이프스타일" />
            <InsightButton content="인간관계" />
            <InsightButton content="취업/이직" />
            <InsightButton content="회사생활" />
            <InsightButton content="IT/기술" />
            <InsightButton content="커리어고민" />
            <InsightButton content="조직문화" />
            <InsightButton content="개발" />
            <InsightButton content="데이터" />
            <InsightButton content="MD" />
            <InsightButton content="HR" />
            <InsightButton content="UX/UI" />
            <InsightButton content="노무" />
            <InsightButton content="디자인" />
            <InsightButton content="서비스기획" />
            <InsightButton content="브랜딩" />
            <InsightButton content="마케팅" />
            <InsightButton content="경영/전략" />
            <InsightButton content="콘텐츠 제작" />
          </div>
          <div className="career-insight__contents">
            <InsightContent
              imgSrc="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FcK73%2Fimage%2FjpGay3WOoMl_URviAArdk0P6Urk.JPG&w=500&q=75"
              title="스타트업과 횡령"
              content="내가 100% 지분을 소유하고 있고, 내가 대표이사로 있는 회사, 내 자식처럼, 내 몸처럼 소중합니..."
              logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
              author="법무법인 미션"
            />
            <InsightContent
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220204%2F6%2F64155495.jpg&w=500&q=75"
              title="경영기획&전략기획 지침서 07 - 관리회계"
              content="실질분석, 손익분석 등 회사마다 쓰는 용어의 차이에 대해 알아봅니다. 용어에 대해 알아본 뒤 공통..."
              logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
              author="조로, 메이, 쌤, 앨리스"
            />
            <InsightContent
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2FUp5kLCTC5PQ%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLAczGsjeN_G4SHTEXgLQjPpC0RMpg&w=500&q=75"
              title="토스 | 스타트업 서바이벌 FOUND - EP 5.UNLOCK [도전을 선보이다]"
              content=""
              logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fyoutube_opengraph.png&w=60&q=90"
              author="토스"
            />
            <InsightContent
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220204%2F6%2F33372120.jpg&w=500&q=75"
              title="경영기획&전략이획 지침서 06 - 예산관리"
              content="
                예산 관리는 경영기획 업무 중에서도 중요한 영역인데요, 제조업과
                서비스업의 산업군별 case를 살펴봅...
              "
              logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
              author="조로, 메이, 쌤, 앨리스"
            />
            <InsightContent
              imgSrc="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FVZ4%2Fimage%2FlbRNcRrfnvVBOI34jRXaFeaZCcw.png&w=500&q=75"
              title="행사 기획/운영 노하우 및 협업 효율 향상 Notion"
              content="
                오프라인 행사나 온라인 행사를 개최해보신 적이 있으신가요? 그때
                어떤 협업 도구를 이용했었나요? 저는...
              "
              logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
              author="Brown Jeon"
            />
            <InsightContent
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220204%2F6%2F89798825.jpg&w=500&q=75"
              title="경영기획&전략기획 지침서 03 - 기획의 꽃 경영게획 수립 2편"
              content="
                기획의 꽃, 경영계획 수립 2편! 회사별 best/worst case, 지주/
                자회사와의 업무 협의, 실무자로서의 어...
              "
              logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
              author="조로, 라이언, 쌤, 앨리스"
            />
            <InsightContent
              imgSrc="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F1J9E%2Fimage%2F8aGdQPrEamkfcfEHQiOsIHcyItg.png&w=500&q=75"
              title="쇼피파이가 네이버에게 전합니다"
              content="
                아래 글은 2022년 02월 23일에 발행된 뉴스레터에 실린 글입니다.
                전체 뉴스레터를 보시려면 옆의 링크...
              "
              logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
              author="기묘한"
            />
            <InsightContent
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220204%2F6%2F79566772.jpg&w=500&q=75"
              title="경영기획&전략기획 지침서 01 - 경영기획/경영관리 정의 및 업무개괄"
              content="
                회사의 기획 직군에서는 어떤 일을 하고 있을까요?금융/화학/화장품
                등 다양한 산업군에서 경영기획 업..."
              logoSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
              author="조로, 라이언, 메이, 쌤, 앨리스"
            />
          </div>
          <button className="career-insight__more">
            더 많은 콘텐츠 보기 <i className="fa-solid fa-chevron-down"></i>
          </button>
        </section>
        <section className="article">
          <span className="section-title">3분만에 읽는 Wanted+ 아티클</span>
          <span className="section-all">아티클 전체보기 {`>`}</span>
          <div className="article-contents">
            <ArticleContent
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2427%2F9d71c6cc.jpg&w=800&q=75"
              title="애써 모셔온 시니어, 우리 조직엔 안 맞는 사람?"
              tag="#HR #조직문화 #리더십"
            />
            <ArticleContent
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2429%2Ffca14c2b.jpg&w=800&q=75"
              title="LG전자 | 애플에서 8년은 일하는 방법을 가르쳐 준 시간"
              tag="#개발 #IT/기술 #데이터"
            />
            <ArticleContent
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75"
              title="리걸 테크 산업을 이끌어 나가는 로앤컴퍼니 AI 팀"
              tag="#개발 #IT/기술 #취업/이직"
            />
            <ArticleContent
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2422%2Ffeb067d4.jpg&w=800&q=75"
              title="기업의 성공을 리드하는 번개장터 마케터의 데이터"
              tag="#마케팅·광고 #브랜딩 #데이터"
            />
          </div>
        </section>
        <section className="vod">
          <span className="section-title">직장인을 위한 Wanted+ VOD</span>
          <span className="section-all">VOD 전체보기 {`>`}</span>
          <div className="vod-contents">
            <VodContent
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210713%2F1%2F22621559.jpg&w=800&q=75"
              runtime="1:29:15"
              maker="인터비즈 팀장클럽 김진영"
              title="팀장으로 산다는 건"
              tag="팀장으로 산다는 건: Live Talk #30"
            />
            <VodContent
              imgSrc="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211111%2F10%2F24788089.jpg&w=800&q=75"
              runtime="58:29"
              maker="퍼플밴드 권순관, 드림어스 제정민"
              title="신입 개발자의 취업 성공기"
              tag="신입 개발자의 취업 성공기: Live Talk #50"
            />
            <VodContent
              imgSrc="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210512%2F2%2F32385576.jpg&w=800&q=75"
              runtime="39:34"
              maker="애프터모멘트 박창선"
              title="터지는 콘텐츠는 이렇게 만듭니다 Part3 : 위트와 무리수레벨
                조절하기 - 박..."
              tag="터지는 콘텐츠는 이렇게 만듭니다 : Wanted..."
            />
            <VodContent
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210618%2F2%2F34753914.jpg&w=800&q=75"
              runtime="1:34:40"
              maker="노무법인 예담HR컨설팅 장내석"
              title="회사를 구하는 인사"
              tag="회사를 구하는 인사: Live Talk #27"
            />
          </div>
        </section>
        <button className="recommendation">
          직군/직무를 입력하면 관련 콘텐츠를 추천해드려요.👀 {`>`}
        </button>
        <section className="event">
          <span className="section-title">커리어 성장을 위한 맞춤 이벤트</span>
          <span className="section-all">이벤트 전체보기 {`>`}</span>
          <div className="event-contents">
            <EventContent
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2431%2Ff6fb0b1c.jpg&w=1200&q=100"
              type1="온라인"
              type2="VOD"
              title="
                [무료] 이력서, 포트폴리오, 면접을 부탁해 by 원티드
              "
              date="2022.10.31(월)"
            />
            <EventContent
              imgSrc="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2406%2F6aae1a5c.jpg&w=1200&q=100"
              type1="온라인"
              type2="VOD"
              title="
                [무료] 인간관계, 회사생활, 커리어고민 1분만에 해결하기
              "
              date=""
            />
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
              <button className="subscribe-button">
                ✓ 첫 구독 0원 신청하기
              </button>
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
    </div>
  );
};

export default Section;
