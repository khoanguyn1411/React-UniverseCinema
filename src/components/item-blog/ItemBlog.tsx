import { icEye, icLike } from "@/assets/icons";
import { TMockBlogData } from "@/types";
import React from "react";
import { Button } from "../button/Button";
import { WrapperDefault } from "../wrapper";

type TTrops = {
  data: TMockBlogData;
};

export const ItemBlog: React.FC<TTrops> = ({ data }) => {
  return (
    <WrapperDefault className="group flex mb-[3rem] rounded-default h-[17rem]">
      <div
        style={{ backgroundImage: `url(${data.thumb})` }}
        className="bgImg flex-1 cursor-pointer"
      >
        <img src={data.thumb} alt={data.title} />
      </div>
      <div className="flex-[3] p-[1.5rem] text-s18">
        <h1 className="w-fit group-hover:text-orange group-hover:transition-all transition-all font-bold only2line cursor-pointer">
          {data.title}
        </h1>
        <div className="my-[0.5rem] flex">
          <Button
            icon={icLike}
            className="bg-[#59AEFD] w-[10%] px-[2rem] min-w-fit py-[0.2rem]"
          >
            Thích
          </Button>
          <Button
            icon={icEye}
            className="w-[10%] min-w-fit px-[2rem] m py-[0.2rem] ml-[1rem]"
            orange
          >
            {data.views}
          </Button>
        </div>
        <p className="only2line">{data.des}</p>
      </div>
    </WrapperDefault>
  );
};
