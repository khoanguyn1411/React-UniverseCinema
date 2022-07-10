import { apiURL } from "@/api";
import { appAxios } from "@/axios";
import {
  Button,
  FullSlider,
  ImageContainer,
  Loading,
  Modal,
} from "@/components";
import { configs } from "@/configs";
import { funcs } from "@/constants";
import { updateActivePage } from "@/features";
import { useAppDispatch, useCallAPI } from "@/hooks";
import { IMovie, ITrailer } from "@/types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings } from "react-slick";

export const TopBanner: React.FC = () => {
  const [result, isLoading] = useCallAPI(apiURL.displayService.BANNERS_API);
  const banners: IMovie[] = result?.results.slice(0, 5);

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

  const pathYoutube = "https://www.youtube.com/embed/";
  const [isOpenModal, setIsOpenModal] = useState<Boolean>(false);
  const [trailer, setTrailer] = useState<ITrailer[]>(null);

  const handleWatchTrailer = async (id: number) => {
    let result: any;
    try {
      result = await appAxios.get(`/movie/${id}/videos`);
    } catch (error) {
      result = error as Error;
    }
    if (result instanceof Error) {
      try {
        result = await appAxios.get(`/tv/${id}/videos`);
      } catch (error: unknown) {
        throw new Error("Error" + error);
      }
    }
    setTrailer(result.results);
    setIsOpenModal(true);
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOpenDetail = (movie: IMovie) => {
    navigate(
      `${configs.routes.movieDetail}/${movie.id}-${
        (movie.name && funcs.removeAccent(movie.name)) ||
        (movie.original_title && funcs.removeAccent(movie.original_title))
      }`
    );
    dispatch(updateActivePage());
  };

  return (
    <>
      {isLoading && (
        <div className="w-full bg-black h-screen flex items-center justify-center">
          <Loading />
        </div>
      )}
      {banners && (
        <div>
          {!isLoading && (
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
                      className="h-screen min-h-[50rem] max-h-[80rem]"
                    />
                  </ImageContainer>

                  <div className="absolute bottom-0 lg:items-center flex w-[65%] h-[60%] lg:h-auto top-0 left-0 right-0 wrapper lg:w-full lg:p-[5rem] sm:px-[2rem]">
                    <ImageContainer
                      url={configs.api.IMAGE_URL_SMALL + banner.poster_path}
                      className="h-full w-fit rounded-[1rem] sm:hidden lg:h-1/2"
                    >
                      <img
                        className="h-full"
                        alt={banner.name || banner.original_title}
                        src={configs.api.IMAGE_URL_SMALL + banner.poster_path}
                      />
                    </ImageContainer>

                    <div className=" flex flex-col flex-1 justify-center pl-[3rem] sm:pl-0">
                      <h1 className="text-[2.5rem] font-bold text-white mb-[1rem] sm:text-center">
                        {banner.name || banner.original_title}
                      </h1>
                      <h1 className="text-s16 text-white line-9 sm:text-center">
                        {banner.overview}
                      </h1>

                      <div className="mt-[2rem] sm:flex sm:items-center sm:justify-center">
                        <Button
                          strokeWhite
                          hover
                          className="w-[13rem] px-[1rem]"
                          onClick={() => handleWatchTrailer(banner.id)}
                        >
                          View trailer
                        </Button>
                        <Button
                          strokeWhite
                          hover
                          className="w-[13rem] px-[1rem]  ml-[2rem]"
                          onClick={() => handleOpenDetail(banner)}
                        >
                          Detail
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </FullSlider>
          )}

          {isOpenModal && (
            <Modal onClose={() => setIsOpenModal(false)}>
              {trailer && trailer.length > 0 ? (
                <iframe
                  key={trailer[0].id}
                  title={trailer[0].key}
                  src={pathYoutube + trailer[0].key}
                  className="w-full h-[72vh] rounded-[1rem]"
                />
              ) : (
                "This movie does not have any trailer yet"
              )}
            </Modal>
          )}
          <div className="h-[0.4rem] w-full bg-orange"></div>
        </div>
      )}
    </>
  );
};
