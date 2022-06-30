import React, { FunctionComponent, ReactNode, useState } from "react";
import { icArrowDown, Icon } from "@/assets/icons";
import { Separate } from "@/components";

type TProps = {
  children: ReactNode;
  title: string;
};

export const ItemFilter: FunctionComponent<TProps> = ({ children, title }) => {
  const [isShowContent, setIsShowContent] = useState<Boolean>(() => {
    return window.innerWidth > 1023;
  });
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
          <Separate marginTop={"1"} />
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};
