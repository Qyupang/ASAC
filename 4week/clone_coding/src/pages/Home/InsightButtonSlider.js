import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InsightButton from './InsightButton';
import dummyForButton from '../../db/MainPage/insightButton.json';

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
      {dummyForButton.buttons.map((button) => (
        <InsightButton content={button.content} />
      ))}
    </Slider>
  );
};

export default InsightButtonSlider;
