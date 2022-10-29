import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CategoryButton from './CategoryButton';
import dummyForButton from '../../db/JobList/categoryButtonContent.json';

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
      {dummyForButton.contents.map((content, idx) => (
        <CategoryButton keyword={content.keyword} key={idx} />
      ))}
    </Slider>
  );
};

export default CategoryButtonSlider;
