import React, { FunctionComponent } from "react";

type TProps = {
  marginTop?: number;
};

export const Seperate: FunctionComponent<TProps> = ({ marginTop = "2" }) => {
  return <div className={`w-full h-[0.05rem] bg-grey mt-[${marginTop}]`}></div>;
};
