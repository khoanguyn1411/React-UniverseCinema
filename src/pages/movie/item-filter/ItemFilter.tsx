import React, { FunctionComponent, ReactNode, useState } from "react";
import { icArrowDown, Icon } from "@/assets/icons";
import { Seperate } from "@/components";

type TProps = {
  children: ReactNode;
  title: string;
};

export const ItemFilter: FunctionComponent<TProps> = ({ children, title }) => {
  const [isShowContent, setIsShowContent] = useState<Boolean>(true);
  return (
    <div className="rounded-[0.5rem] shadow-default w-full mb-[1.5rem]">
      <div
        onClick={() => setIsShowContent(!isShowContent)}
        className="w-full select-none cursor-pointer p-[1rem] flex justify-between items-center"
      >
        <h1>{title}</h1>
        <Icon icon={icArrowDown} />
      </div>
      {isShowContent && (
        <div>
          <Seperate marginTop={1} />
          <div className="p-[1rem]">{children}</div>
        </div>
      )}
    </div>
  );
};
