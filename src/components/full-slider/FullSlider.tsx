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
    dots: true,
    arrows: false,
  };
  return (
    <WrapperModule positionDots={positionDots} className="relative bg-black">
      <Slider className={className} ref={slider} {...settings}>
        {children}
      </Slider>
      <button
        className="absolute top-0 bottom-0 left-0 bg-gradient-to-l from from-transparent to-black opacity-50 transition-all hover:transition-all hover:opacity-100 p-[1.5rem]"
        onClick={() => slider?.current?.slickPrev()}
      >
        <span>
          <Icon className="text-white text-[3rem]" icon={icArrowLeft} />
        </span>
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 bg-gradient-to-r from from-transparent to-black opacity-50 transition-all hover:transition-all hover:opacity-100 p-[1.5rem]"
        onClick={() => slider?.current?.slickNext()}
      >
        <span>
          <Icon className="text-white text-[3rem]" icon={icArrowRight} />
        </span>
      </button>
    </WrapperModule>
  );
};
