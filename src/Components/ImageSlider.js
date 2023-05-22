import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assests/images/1.jpg';
import img2 from '../assests/images/2.jpg';
import img3 from '../assests/images/3.jpg';

const ImageSlider = () => {
    const images = [
        img1,
        img2,
        img3
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <Slider {...settings} Width="20%"
      height="20%">
        {images.map((image, index) => (
          <div key={index} >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    );
  };


  export default ImageSlider;