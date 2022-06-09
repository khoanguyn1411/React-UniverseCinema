import { icArrowLeft, icArrowRight, Icon } from "@/assets/icons";
import React from "react";
import Slider from "react-slick";
import "./slick.scss";

type TProps = {
  children: React.ReactNode;
};

export const BannerSlider: React.FC<TProps> = ({ children }) => {
  const slider = React.useRef<Slider>(null);
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots: React.ReactNode[]) => <ul>{dots}</ul>,
    customPaging: (i: number) => (
      <div className="slick-dots">
        <div className="ft-slick__dots--custom">
          <div className="loading" />
        </div>
      </div>
    ),
  };
  return (
    <div className="relative bg-black">
      <Slider ref={slider} {...settings}>
        {children}
      </Slider>
      <button
        className="absolute top-0 bottom-0 left-0 bg-gradient-to-l from from-transparent to-black opacity-50 transition-all hover:transition-all hover:opacity-100 p-[1.5rem]"
        onClick={() => slider?.current?.slickPrev()}
      >
        <span>
          <Icon className="text-white text-[3rem] " icon={icArrowLeft} />
        </span>
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 bg-gradient-to-r from from-transparent to-black opacity-50 transition-all hover:transition-all hover:opacity-100 p-[1.5rem]"
        onClick={() => slider?.current?.slickNext()}
      >
        <span>
          <Icon className="text-white text-[3rem]" icon={icArrowRight} />
        </span>
      </button>
    </div>
  );
};
