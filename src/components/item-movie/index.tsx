import { TMockDataMovies } from "@/types";
import React from "react";
import { Button } from "../button";
import { DefaultWrapper } from "../wrapper";

type TItemMovie = {
  data: TMockDataMovies;
};

export const ItemMovie: React.FC<TItemMovie> = ({ data }) => {
  return (
    <DefaultWrapper className="group transition-all rounded-[0.5rem] p-0 text-white">
      <div
        style={{ backgroundImage: `url(${data.thumb})` }}
        className="h-[25rem] cursor-pointer rounded-tl-[0.5rem] rounded-tr-[0.5rem] bg-grey overflow-x-hidden relative bg-no-repeat bg-cover bg-center"
      >
        <div className="hidden h-full w-full top-0 absolute opacity-50 bg-black group-hover:block group-hover:animate-scale" />
        <div className="items-center justify-center hidden h-full w-full top-0 absolute group-hover:flex group-hover:animate-scale">
          <Button strokeWhite hover>
            Đặt vé ngay
          </Button>
        </div>
      </div>
      <div className="p-[1.3rem] rounded-bl-[0.5rem] rounded-br-[0.5rem] bottom-0 bg-black">
        <h1 className="cursor-pointer w-fit font-bold uppercase text-s20 only1line text-orange ">
          {data.nameVi}
        </h1>
        <h1 className="text-s14 mt-[0.5rem]">{data.nameEn}</h1>
      </div>
    </DefaultWrapper>
  );
};
