import { Button, ImageContainer, Modal } from "@/components";
import { configs } from "@/configs";
import { funcs } from "@/constants";
import { ISeason } from "@/types";
import { FunctionComponent, useEffect, useRef, useState } from "react";

type TProps = {
  season: ISeason;
  movieName: string;
};

export const ItemSeason: FunctionComponent<TProps> = ({
  season,
  movieName,
}) => {
  const pathImg = configs.api.IMAGE_URL_SMALL + season.poster_path;
  const overviewRef = useRef(null);
  const [isShowButton, setIsShowButton] = useState<Boolean>(false);
  const [isShowFullOverview, setIsShowFullOverview] = useState<Boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<Boolean>(false);

  useEffect(() => {
    const height = overviewRef?.current?.offsetHeight - 2.5 * 2;
    const lineHeight = parseInt(overviewRef?.current?.style.lineHeight) * 10;
    if (height / lineHeight > 2) {
      setIsShowFullOverview(true);
      setIsShowButton(true);
    }
  }, []);

  return (
    <>
      <div
        key={season.id}
        className="flex mb-[1.5rem] shadow-default rounded-[1rem]"
      >
        <ImageContainer
          url={pathImg}
          className="w-[15rem] h-[21rem] rounded-l-[1rem]"
        >
          <img src={pathImg} alt={season.name} />
        </ImageContainer>
        <div className="flex-1 p-[1.2rem] flex flex-col">
          <h1 className="font-bold text-s20">{season.name}</h1>
          <h1 className="font-semibold mt-[0.5rem]">
            On air date:{" "}
            <span className="font-normal">
              {funcs.formatDate(season.air_date)}
            </span>
          </h1>
          <h1 className="font-semibold">
            Total episodes:{" "}
            <span className="font-normal">{season.episode_count}</span>
          </h1>

          <h1 className="font-semibold mt-[1rem]">
            Overview:{" "}
            <span
              ref={overviewRef}
              className={`font-normal text-justify ${
                isShowFullOverview ? "line-2" : "block"
              }`}
              style={{
                lineHeight: "2.25rem",
              }}
            >
              {season.overview || `This is ${season.name} of ${movieName}`}
            </span>
          </h1>
          {isShowButton && (
            <h1
              onClick={() => {
                setIsOpenModal(true);
              }}
              className="w-fit py-0 self-center cursor-pointer underline hover:text-orange hover:transition-all transition-all italic mt-[0.5rem]"
            >
              View more
            </h1>
          )}

          {isOpenModal && (
            <Modal onClose={() => setIsOpenModal(false)}>
              <h1 className="font-bold text-s20 mb-[1rem] text-orange">
                {season.name}
              </h1>
              <h1 className="font-bold">Overview:</h1>
              <h1 className="overflow-auto text-justify">{season.overview}</h1>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};
