import { getBannerHomeList, imgsHome } from "@/assets/images";
import { FullSlider } from "@/components";
import React from "react";
import { Settings } from "react-slick";

export const TopBanner: React.FC = () => {
  const banners = [...getBannerHomeList(), imgsHome.banner3];
  const settings: Settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    adaptiveHeight: true,
  };
  return (
    <div>
      <FullSlider settingConfig={settings}>
        {banners.map((banner, index) => (
          <div className="w-full m-auto block" key={index}>
            <div className="m-auto w-full max-w-[170rem]">
              <img
                alt={`bannerHome${index}`}
                src={banner}
                className="w-full block"
              />
            </div>
          </div>
        ))}
      </FullSlider>
    </div>
  );
};
