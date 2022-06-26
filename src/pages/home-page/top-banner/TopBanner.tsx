import { apiURL } from "@/api";
import { Button, FullSlider, ImageContainer, Modal } from "@/components";
import { configs } from "@/configs";
import { funcs } from "@/constants";
import { updateActivePage } from "@/features";
import { useAppDispatch, useCallAPI } from "@/hooks";
import { IMovie, ITrailer } from "@/types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings } from "react-slick";

export const TopBanner: React.FC = () => {
  const banners: IMovie[] = useCallAPI(
    apiURL.displayService.BANNERS_API
  )?.results.slice(0, 5);
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
    const res = await fetch(funcs.getAPI(`/movie/${id}/videos?`, ""));
    const result = await res.json();
    setTrailer(result.results);
    setIsOpenModal(true);
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOpenDetail = (movie: IMovie) => {
    navigate(
      `${configs.routes.movieDetail}/${movie.id}-${
        (movie.name && encodeURI(movie.name.replaceAll("?", "4ch"))) ||
        (movie.original_title &&
          encodeURI(movie.original_title.replaceAll("?", "4ch")))
      }`
    );
    dispatch(updateActivePage());
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
                  className="h-[100vh] min-h-[50rem] max-h-[70rem]"
                />
              </ImageContainer>

              <div className="absolute bottom-0 flex w-[65%] h-[60%] top-0 left-0 right-0 wrapper ">
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
                  <h1 className="text-s16 text-white line-9">
                    {banner.overview}
                  </h1>

                  <div className="mt-[2rem]">
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
      </div>
    )
  );
};
