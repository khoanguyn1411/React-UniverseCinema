import { Icon } from "@/assets/icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
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
  transparent?: Boolean;
  icon?: IconDefinition;
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
  transparent = false,
  icon,
}) => {
  if (!orange && !strokeWhite && !strokeBlack && !transparent) {
    black = true;
  }

  return (
    <button
      className={classes(
        className,
        "px-[3rem] py-[1rem] min-w-max cursor-pointer  border-[0.15rem] rounded-[0.6rem] transition-all w-[20%] font-semibold",
        {
          "bg-orange text-white border-orange": orange,
          "bg-black text-white border-black": black,
          "bg-transparent text-black border-transparent": transparent,
          "bg-transparent text-white border-white": strokeWhite,
          "bg-transparent text-black border-black": strokeBlack,
          "hover:bg-white hover:text-black hover:transition-all":
            strokeWhite && hover,
          "hover:bg-orange hover:text-white hover:border-orange hover:transition-all":
            strokeBlack && hover,
          "hover:bg-black hover:transition-all": orange && hover,
        }
      )}
      onClick={onClick}
    >
      {icon && (
        <span className="mr-[0.5rem]">
          <Icon icon={icon} />
        </span>
      )}
      {children}
    </button>
  );
};
