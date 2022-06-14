import { apiURL } from "@/api";
import { FullSlider, ImageContainer } from "@/components";
import { configs } from "@/configs";
import { useCallAPI } from "@/hooks";
import React from "react";
import { Settings } from "react-slick";
import { IMovie } from "@/types";

export const TopBanner: React.FC = () => {
  const banners: IMovie[] = useCallAPI(
    apiURL.displayService.BANNERS_API
  )?.results.splice(0, 5);
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
    banners && (
      <div>
        <FullSlider settingConfig={settings}>
          {banners.map((banner, index) => (
            <div className="w-full m-auto block relative" key={index}>
              <ImageContainer
                url={configs.api.IMAGE_URL_LARGE + banner.backdrop_path}
                className="m-auto w-full max-w-[170rem] opacity-50"
              >
                <img
                  alt={`bannerHome${index}`}
                  src={configs.api.IMAGE_URL_LARGE + banner.backdrop_path}
                  className="h-[50rem]"
                />
              </ImageContainer>
              <div className="absolute h-[80%] bottom-[5rem] left-0 right-0 wrapper flex flex-col justify-end">
                <ImageContainer
                  url={configs.api.IMAGE_URL_SMALL + banner.poster_path}
                  className=" mb-[2rem] rounded-[1rem] shadow-lg h-[60%] w-fit"
                >
                  <img
                    className="h-full"
                    alt={banner.name || banner.original_title}
                    src={configs.api.IMAGE_URL_SMALL + banner.poster_path}
                  />
                </ImageContainer>
                <div className=" flex justify-end flex-col">
                  <h1 className="text-[2.5rem] font-bold text-white mb-[1rem]">
                    {banner.name || banner.original_title}
                  </h1>
                  <h1 className="text-s16 text-white text-justify line-4">
                    {banner.overview}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </FullSlider>
      </div>
    )
  );
};
