import { FullSlider, Title } from "@/components";
import React from "react";
import { Settings } from "react-slick";
import styled from "styled-components";

const WrapperModule = styled.div`
  .slick-current {
    transform: scale(1.8);
    transition: 0.3s ease;
  }

  .slick-list {
    padding: 45px 60px !important;
    margin-left: 30px !important;
  }
`;

export const Promotions: React.FC = () => {
  const settings: Settings = {
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    infinite: true,
  };
  return (
    <WrapperModule className="bg-black pt-[2rem] mb-[3rem]">
      <div className="wrapper">
        <Title top="2rem" white>
          TIN KHUYẾN MÃI
        </Title>
      </div>

      <FullSlider settingConfig={settings}>
        <div className="h-[9rem] bg-orange"></div>
        <div className="h-[9rem] bg-white"></div>
        <div className="h-[9rem] bg-black"></div>
        <div className="h-[9rem] bg-white"></div>
        <div className="h-[9rem] bg-orange"></div>
      </FullSlider>
    </WrapperModule>
  );
};
