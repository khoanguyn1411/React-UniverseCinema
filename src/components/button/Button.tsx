import classNames from "classnames";
import React from "react";
const classes = classNames;

type TButton = {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  orange?: Boolean;
  black?: Boolean;
  hover?: Boolean;
  strokeWhite?: Boolean;
  strokeBlack?: Boolean;
};

export const Button: React.FC<TButton> = ({
  children,
  className,
  onClick,
  black = false,
  orange = false,
  hover = false,
  strokeWhite = false,
  strokeBlack = false,
}) => {
  if (!orange && !strokeWhite) {
    black = true;
  }

  return (
    <button
      className={classes(
        "px-[3rem] py-[1rem] min-w-max cursor-pointer rounded-[0.6rem] transition-all w-[20%] font-semibold",
        className,
        {
          "bg-orange text-white": orange,
          "bg-black text-white": black,
          "bg-transparent text-white border-white border-[0.15rem] ":
            strokeWhite,
          "bg-transparent text-black border-black border-[0.15rem] ":
            strokeBlack,
          "hover:bg-white hover:text-black hover:transition-all":
            strokeWhite && hover,
          "hover:bg-orange hover:text-white hover:border-orange hover:transition-all":
            strokeBlack && hover,
          "hover:bg-black hover:transition-all": orange && hover,
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
