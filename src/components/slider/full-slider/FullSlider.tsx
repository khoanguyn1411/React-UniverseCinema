import { icArrowLeft, icArrowRight, Icon } from "@/assets/icons";
import React from "react";
import Slider, { Settings } from "react-slick";
import { WrapperModule } from "./WrapperModule";

type TProps = {
  children: React.ReactNode;
  settingConfig: Settings;
  className?: string;
  positionDots?: number;
};

export const FullSlider: React.FC<TProps> = ({
  children,
  settingConfig,
  className,
  positionDots = 1,
}) => {
  const slider = React.useRef<Slider>(null);
  const settings: Settings = {
    ...settingConfig,
    arrows: false,
  };
  return (
    <WrapperModule positionDots={positionDots} className="relative bg-black">
      <Slider className={className} ref={slider} {...settings}>
        {children}
      </Slider>
      <button
        className="group absolute top-0 bottom-0 left-0 p-[1.5rem] sm:hidden"
        onClick={() => slider?.current?.slickPrev()}
      >
        <span>
          <Icon
            className="text-white text-[3rem] opacity-50 group-hover:opacity-100 group-hover:transition-all"
            icon={icArrowLeft}
          />
        </span>
      </button>
      <button
        className="group absolute top-0 bottom-0 right-0 p-[1.5rem] sm:hidden"
        onClick={() => slider?.current?.slickNext()}
      >
        <span>
          <Icon
            className="group-hover:opacity-100 group-hover:transition-all opacity-50 transition-all text-white text-[3rem]"
            icon={icArrowRight}
          />
        </span>
      </button>
    </WrapperModule>
  );
};
