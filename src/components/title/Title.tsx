import React, { ReactNode } from "react";
import classNames from "classnames";
const classes = classNames;

type TProps = {
  children: ReactNode;
  className?: string;
  white?: Boolean;
  top?: string;
};

export const Title: React.FC<TProps> = ({
  children,
  className,
  white,
  top,
}) => {
  return (
    <div
      className={classes(className, `w-fit py-[1rem] pt-[${top}]`, {
        "text-white": white,
      })}
    >
      <div className="m-auto w-fit">
        <h1 className="w-fit font-bold text-[2.3rem]">{children}</h1>
        <div className="h-[0.4rem] bg-orange w-full" />
      </div>
    </div>
  );
};
