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
      className={classes(
        className,
        ` flex items-center py-[1rem] pt-[${top}]`,
        {
          "text-white": white,
        }
      )}
    >
      <div className="bg-orange w-[1.5rem] block h-[3rem] mr-[1.5rem] lg:hidden" />
      <h1 className=" font-bold text-[2.3rem] ">{children}</h1>
    </div>
  );
};
