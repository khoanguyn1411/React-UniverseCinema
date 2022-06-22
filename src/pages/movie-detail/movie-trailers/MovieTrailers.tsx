import { Modal, NoResult, Seperate, Title } from "@/components";
import { funcs } from "@/constants";
import { useCallAPI } from "@/hooks";
import { ITrailer } from "@/types";
import React, { FunctionComponent, useState } from "react";
import { TProps } from "..";

export const MovieTrailers: FunctionComponent<TProps.withType> = ({
  movie,
  type,
}) => {
  const result = useCallAPI(funcs.getAPI(`/${type}/${movie.id}/videos?`, ""), [
    movie,
  ]);
  const pathYoutube = "https://www.youtube.com/embed/";
  const trailerList: ITrailer[] = result?.results;
  const [isOpenModal, setIsOpenModal] = useState<Boolean>(false);

  return (
    <>
      <Title className="mb-[1rem] mt-[1.5rem]">Trailers</Title>
      {trailerList && trailerList.length > 0 ? (
        <div className="flex flex-col">
          {trailerList.slice(0, 2).map((trailer) => (
            <div key={`trailer_${trailer.id}`} className="mb-[2rem]">
              <h1 className="font-bold text-s18 mb-[1rem]">{trailer.name}</h1>
              <iframe
                key={trailer.id}
                title={trailer.key}
                src={pathYoutube + trailer.key}
                className="w-full h-[75vh] max-h-[50rem] rounded-[1rem] shadow-default"
              />
            </div>
          ))}
          {trailerList.length > 2 && (
            <h1
              onClick={() => setIsOpenModal(true)}
              className="self-center italic underline font-bold hover:text-orange hover:transition-all transition-all cursor-pointer"
            >
              View all trailers
            </h1>
          )}
          {isOpenModal && (
            <Modal onClose={() => setIsOpenModal(false)} className="">
              <div className=" overflow-auto">
                {trailerList.map((trailer) => (
                  <div
                    key={`trailerFull_${trailer.id}`}
                    className="mb-[2rem] mr-[1rem]"
                  >
                    <h1 className="font-bold text-s18 mb-[1rem]">
                      {trailer.name}
                    </h1>
                    <iframe
                      key={trailer.id}
                      title={trailer.key}
                      src={pathYoutube + trailer.key}
                      className="w-full h-[72vh] rounded-[1rem]"
                    />
                  </div>
                ))}
              </div>
            </Modal>
          )}
        </div>
      ) : (
        <NoResult>There is no trailer available yet.</NoResult>
      )}
      <Seperate />
    </>
  );
};
