import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InsightButton from './InsightButton';

const InsightButtonSlider = () => {
  const settings = {
    slide: '.career-insight__button', //슬라이드 되어야 할 태그
    variableWidth: true,
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    dots: false,
    draggable: true, //드래그 가능 여부
  };
  return (
    <Slider {...settings}>
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
    </Slider>
  );
};

export default InsightButtonSlider;
