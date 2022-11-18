import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from './Banner';
import dummyForBanner from '../../db/MainPage/banner.json';

const BannerSlider = () => {
  const settings = {
    className: '.banner',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: false, // 옆으로 이동하는 화살표 표시 여부
    dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, //
    variableWidth: true,
  };
  return (
    <Slider {...settings}>
      {dummyForBanner.banners.map((banner) => (
        <Banner
          imgSrc={banner.imgSrc}
          title={banner.title}
          descript={banner.descript}
        />
      ))}
    </Slider>
  );
};

export default BannerSlider;
