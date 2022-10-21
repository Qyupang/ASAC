import React from 'react';
import Slider from 'react-slick';
// import SliderContent from './SlideContent';
// import styled from 'styled-componnents';

const Slick = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    nextArrow: (
      <Div>
        <Next />
      </Div>
    ),
    prevArrow: (
      <DivPre>
        <Prev />
      </DivPre>
    ),
  };

  return <div></div>;
};

export default Slick;
