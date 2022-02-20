import Slider from 'react-slick';
import React from 'react';

interface SlickSliderProps {
  children: React.ReactNode;
  totalData: number;
}

const SlickSlider: React.FC<SlickSliderProps> = ({ children, totalData }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: totalData <= 4 ? 4 : 4.5,
    slidesToScroll: 1,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SlickSlider;
