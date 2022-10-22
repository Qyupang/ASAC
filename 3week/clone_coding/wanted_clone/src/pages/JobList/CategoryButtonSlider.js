import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CategoryButton from './CategoryButton';

const CategoryButtonSlider = () => {
  const settings = {
    className: 'category-buttons', //슬라이드 되어야 할 태그
    variableWidth: true,
    dots: false,
    draggable: true, //드래그 가능 여부
    vertical: false,
  };
  return (
    <Slider {...settings}>
      <CategoryButton keyword="연봉이 최고의 복지 💰" />
      <CategoryButton keyword="재택근무 🏠" />
      <CategoryButton keyword="퇴사율 10% 이하 📍" />
      <CategoryButton keyword="급성장 중 📈" />
      <CategoryButton keyword="병역특례 🧑" />
      <CategoryButton keyword="50인 이하 🔽" />
      <CategoryButton keyword="50인 이상 🔼" />
      <CategoryButton keyword="업력 5년 이상 🏢" />
      <CategoryButton keyword="유연근무 🕰" />
      <CategoryButton keyword="자유로운 휴가 🌴" />
      <CategoryButton keyword="일한만큼 받는 보상 💵" />
      <CategoryButton keyword="수평적인 문화 🙌" />
      <CategoryButton keyword="요즘 뜨는 산업 😮" />
      <CategoryButton keyword="식사·간식 제공 ☕️" />
    </Slider>
  );
};

export default CategoryButtonSlider;
