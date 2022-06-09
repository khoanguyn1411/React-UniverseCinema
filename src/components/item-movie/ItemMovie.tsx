import { configs } from "@/configs";
import { funcs } from "@/constants";
import { updateActivePage } from "@/features";
import { useAppDispatch } from "@/hooks";
import { TMockDataMovies } from "@/types";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button/Button";
import { DefaultWrapper } from "../wrapper/Wrapper";

type TItemMovie = {
  data: TMockDataMovies;
};

export const ItemMovie: React.FC<TItemMovie> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleBookTicket = (): void => {
    navigate(
      `${configs.routes.detailMoviePage}/${funcs.removeAccent(data.nameVi)}`
    );
    dispatch(updateActivePage());
  };

  return (
    <DefaultWrapper className="group transition-all rounded-[0.5rem] p-0 text-white">
      <div
        style={{ backgroundImage: `url(${data.thumb})` }}
        onClick={handleBookTicket}
        className="h-[25rem] cursor-pointer rounded-tl-[0.5rem] rounded-tr-[0.5rem] bg-grey overflow-x-hidden relative bg-no-repeat bg-cover bg-center"
      >
        <div className="hidden h-full w-full top-0 absolute opacity-50 bg-black group-hover:block group-hover:animate-scale" />
        <div className="items-center justify-center hidden h-full w-full top-0 absolute group-hover:flex group-hover:animate-scale">
          <Button strokeWhite hover onClick={handleBookTicket}>
            Đặt vé ngay
          </Button>
        </div>
      </div>
      <div className="p-[1.3rem] rounded-bl-[0.5rem] rounded-br-[0.5rem] bottom-0 bg-black">
        <h1
          onClick={handleBookTicket}
          className="cursor-pointer w-fit font-bold uppercase text-s20 only1line text-orange "
        >
          {data.nameVi}
        </h1>
        <h1 className="text-s14 mt-[0.5rem]">{data.nameEn}</h1>
      </div>
    </DefaultWrapper>
  );
};
