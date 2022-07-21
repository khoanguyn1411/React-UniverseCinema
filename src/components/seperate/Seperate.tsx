import React, { FunctionComponent } from "react";

type TProps = {
  marginTop?: string;
  className?: string;
};

export const Separate: FunctionComponent<TProps> = ({
  marginTop = "2",
  className = "",
}) => {
  return (
    <div
      className={`w-full h-[0.05rem] bg-grey mt-[${marginTop}rem] ${className}`}
    ></div>
  );
};
