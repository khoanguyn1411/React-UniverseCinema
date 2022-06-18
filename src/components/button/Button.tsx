import { Icon } from "@/assets/icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import React, { forwardRef } from "react";
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
  iconOnly?: Boolean;
  rounded?: Boolean;
  ref?: React.LegacyRef<HTMLButtonElement>;
};

export const Button: React.FC<TButton> = forwardRef(
  (
    {
      children,
      className,
      onClick,
      black = false,
      orange = false,
      hover = false,
      strokeWhite = false,
      strokeBlack = false,
      transparent = false,
      iconOnly = false,
      icon,
      rounded = false,
    },
    ref
  ) => {
    if (!orange && !strokeWhite && !strokeBlack && !transparent) {
      black = true;
    }

    return (
      <button
        ref={ref}
        className={classes(
          className,
          "min-w-max cursor-pointer border-[0.15rem] rounded-[0.6rem] transition-all font-semibold",
          {
            "px-[3rem] py-[1rem] w-[20%]": !rounded,
            "rounded-[999px]": rounded,
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
            "hover:bg-orange hover:transition-all hover:border-orange":
              black && hover,
          }
        )}
        onClick={onClick}
      >
        {icon && (
          <span className={!iconOnly ? "mr-[0.5rem]" : undefined}>
            <Icon icon={icon} />
          </span>
        )}
        {children}
      </button>
    );
  }
);
