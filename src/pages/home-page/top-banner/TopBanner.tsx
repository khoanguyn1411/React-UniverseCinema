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
            <div className="w-full m-auto relative" key={index}>
              <ImageContainer
                url={configs.api.IMAGE_URL_LARGE + banner.backdrop_path}
                className="m-auto w-full max-w-[170rem] opacity-30"
              >
                <img
                  alt={`bannerHome${index}`}
                  src={configs.api.IMAGE_URL_LARGE + banner.backdrop_path}
                  className="h-[50rem]"
                />
              </ImageContainer>

              <div className="absolute py-[4rem] bottom-0 flex w-[70%] top-0 left-0 right-0 wrapper h-full">
                <ImageContainer
                  url={configs.api.IMAGE_URL_SMALL + banner.poster_path}
                  className="h-full w-fit rounded-[1rem]"
                >
                  <img
                    className="h-full"
                    alt={banner.name || banner.original_title}
                    src={configs.api.IMAGE_URL_SMALL + banner.poster_path}
                  />
                </ImageContainer>

                <div className=" flex flex-col flex-1 justify-center pl-[3rem]">
                  <h1 className="text-[2.5rem] font-bold text-white mb-[1rem]">
                    {banner.name || banner.original_title}
                  </h1>
                  <h1 className="text-s16 text-white text-justify line-9">
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
