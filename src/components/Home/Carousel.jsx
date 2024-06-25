import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const img23 =
  "https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2022/10/A8291-What-is-the-purpose-and-importance-of-an-art-exhibition-Image-4.jpg";
const img24 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSH6a86gVW-kuRkrvqwmF_zl6sHPYtVus_Q&s";

const img27 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nSFVvQbtipxaO4YrJjfFouwCLutItd7WmQ&s";

const img31 =
  "https://news.ohio.edu/sites/ohio.edu.news/files/2020-10/2015%20UJE_exhibition%20Display.jpg";
const img29 =
  "https://static01.nyt.com/images/2023/03/16/multimedia/16Kehinde-deYoung1-jwvk/16Kehinde-deYoung1-jwvk-articleLarge.jpg?quality=75&auto=webp&disable=upscale";
const img32 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6ZwdVK2CFyD7FmFRrB8JzrFVimogJXxmAA&s";
const img33 =
  "https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2022/10/A8291-What-is-the-purpose-and-importance-of-an-art-exhibition-Image-4.jpg";
const img34 =
  "https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2022/10/A8291-What-is-the-purpose-and-importance-of-an-art-exhibition-Image-4.jpg";

const img37 =
  "https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2022/10/A8291-What-is-the-purpose-and-importance-of-an-art-exhibition-Image-4.jpg";
const img38 =
  "https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2022/10/A8291-What-is-the-purpose-and-importance-of-an-art-exhibition-Image-4.jpg";
const img39 =
  "https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2022/10/A8291-What-is-the-purpose-and-importance-of-an-art-exhibition-Image-4.jpg";

function Carousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mainContainer">
      <h2> Exhibitions </h2>
      <Slider {...settings}>
        <div className="containerItem ">
          <h3>Grand Hall, Mumbai</h3>
          <img src={img37} />
        </div>

        <div className="containerItem ">
          <h3>Grand Hall, Mumbai</h3>
          <img src={img34} />
        </div>

        <div className="containerItem ">
          <h3>Grand Hall, Mumbai</h3>
          <img src={img29} />
        </div>
        <div className="containerItem ">
          <h3>Grand Hall, Mumbai</h3>
          <img src={img23} />
        </div>
        <div className="containerItem ">
          <h3>Grand Hall, Mumbai</h3>
          <img src={img32} />
        </div>
        <div className="containerItem ">
          <h3>Grand Hall, Mumbai</h3>
          <img src={img24} />
        </div>
        <div className="containerItem ">
          <h3>Grand Hall, Mumbai</h3>
          <img src={img27} />
        </div>
        <div className="containerItem ">
          <h3>Grand Hall, Mumbai</h3>
          <img src={img33} />
        </div>
        <div className="containerItem ">
          <h3>Grand Hall, Mumbai</h3>
          <img src={img31} />
        </div>
        <div className="containerItem ">
          <h3>Grand Hall, Mumbai</h3>
          <img src={img34} />
        </div>
        <div className="containerItem ">
          <h3>Grand Hall, Mumbai</h3>
          <img src={img38} />
        </div>
        <div className="containerItem ">
          <h3>Grand Hall, Mumbai</h3>
          <img src={img39} />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
