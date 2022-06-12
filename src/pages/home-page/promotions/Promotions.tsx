import { getBannerHomeList, imgsHome } from "@/assets/images";
import { FullSlider, Title } from "@/components";
import React from "react";
import { Settings } from "react-slick";
import styled from "styled-components";

const WrapperModule = styled.div`
  .slick-slide {
    opacity: 0.7;
    transition: 0.3s ease;
    padding: 90px 0;
  }

  .slick-slide > div {
    // margin: 0 20px;
  }

  .slick-center {
    transition: 0.3s ease;
    opacity: 1;
    transform: scale(2);
    position: relative;
    z-index: 1;
  }
`;

export const Promotions: React.FC = () => {
  const promotionsList = [...getBannerHomeList(), ...getBannerHomeList()];
  const settings: Settings = {
    autoplay: true,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    slidesToShow: 3,
    infinite: true,
    centerPadding: "60px",
    adaptiveHeight: true,
  };
  return (
    <WrapperModule className="bg-black py-[3rem] mb-[3rem] pb-[7rem]">
      <div className="wrapper">
        <Title top="2rem" white>
          TIN KHUYẾN MÃI
        </Title>
      </div>

      <FullSlider
        className="max-w-[150rem] m-auto mt-[1rem]"
        settingConfig={settings}
        positionDots={-3}
      >
        {promotionsList.map((item, index) => (
          <div
            key={index}
            className="border-[2px] border-white m-auto h-[14rem]"
          >
            <div
              style={{ backgroundImage: `url('${item}')` }}
              className="h-full bgImg"
            >
              <img
                src={item}
                alt={`pros${index}`}
                className="opacity-0 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </FullSlider>
    </WrapperModule>
  );
};
