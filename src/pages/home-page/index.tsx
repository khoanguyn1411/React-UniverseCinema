import { imgsHome } from "@/assets/images";
import React from "react";
import { BannerSlider } from "./banner-slider";

export const HomePage: React.FC = () => {
  const banners = [imgsHome.banner2, imgsHome.banner3, imgsHome.banner2];
  return (
    <div className="mt-[-4.8rem] w-full">
      <BannerSlider>
        {banners.map((banner, index) => (
          <div className="w-full m-auto block ">
            <div className="m-auto w-full max-w-[170rem]">
              <img
                alt={`bannerHome${index}`}
                src={banner}
                className="w-full block"
              />
            </div>
          </div>
        ))}
      </BannerSlider>
    </div>
  );
};
