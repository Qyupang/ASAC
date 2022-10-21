import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from './Banner';

export default class BannerSlider extends Component {
  render() {
    const settings = {
      className: '.banner',
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows: true, // 옆으로 이동하는 화살표 표시 여부
      dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
      autoplay: true, // 자동 스크롤 사용 여부
      autoplaySpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      pauseOnHover: true, // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
      vertical: false, //
      variableWidth: true,
    };
    return (
      <Slider {...settings}>
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
      </Slider>
    );
  }
}
