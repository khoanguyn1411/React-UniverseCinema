import React, { FunctionComponent } from "react";
import { IActors } from "@/types";
import { ImageContainer } from "../image-container/ImageContainer";
import { configs } from "@/configs";
import { imgNoAvatar } from "@/assets/images";

type TProps = {
  actor: IActors;
};

export const ItemActor: FunctionComponent<TProps> = ({ actor }) => {
  let urlImg: string;
  console.log(actor);
  if (actor.profile_path === null) {
    urlImg = imgNoAvatar;
  } else {
    urlImg = configs.api.IMAGE_URL_SMALL + actor.profile_path;
  }
  return (
    <div className="shadow-default rounded-[1rem] h-full cursor-pointer">
      <ImageContainer url={urlImg} className="rounded-t-[1rem]">
        <img alt={actor.name} src={urlImg} />
      </ImageContainer>
      <div className="p-[1rem]">
        <h1 className="font-bold">{actor.name || actor.original_name}</h1>
        <h1 className="text-s14">{actor.character}</h1>
      </div>
    </div>
  );
};
