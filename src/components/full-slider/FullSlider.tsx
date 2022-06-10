import { icArrowLeft, icArrowRight, Icon } from "@/assets/icons";
import React from "react";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";

type TProps = {
  children: React.ReactNode;
  settingConfig: Settings;
};

const WrapperModule = styled.section`
  @keyframes loading {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }

  .ft-slick__dots--custom {
    height: 0.8rem;
    width: 1rem;
    background-color: white;
    border-radius: 4px;
    bottom: 3.5rem;
    opacity: 0.7;
    position: relative;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
  }

  .slick-slide * {
    display: block !important;
  }

  .slick-dots li {
    width: 1rem;
    margin: 0 0.5rem;
    transition: width 0.3s ease-in-out;
    bottom: 3rem;
    cursor: default;
  }

  .slick-dots .slick-active {
    width: 4rem;
    transition: width 0.3s ease-in-out;
  }

  .slick-dots .slick-active .ft-slick__dots--custom {
    width: 4rem;
    opacity: 1;

    // .loading {
    //     height: 8px;
    //     animation: loading 4s ease-in;
    //     background: orange;
    //     display: inline-block;
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     border-radius: 4px;
    // }
  }
`;

export const FullSlider: React.FC<TProps> = ({ children, settingConfig }) => {
  const slider = React.useRef<Slider>(null);
  const settings: Settings = {
    ...settingConfig,
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
    <WrapperModule className="relative bg-black">
      <Slider ref={slider} {...settings}>
        {children}
      </Slider>
      <button
        className="absolute top-0 bottom-0 left-0 bg-gradient-to-l from from-transparent to-black opacity-50 transition-all hover:transition-all hover:opacity-100 p-[1.5rem]"
        onClick={() => slider?.current?.slickPrev()}
      >
        <span>
          <Icon className="text-white text-[3rem]" icon={icArrowLeft} />
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
    </WrapperModule>
  );
};
