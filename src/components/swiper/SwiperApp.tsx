import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { SwiperOptions } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperProps } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Button } from "../button/Button";
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
} from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";

type TProps = {
  children: ReactNode;
  length: number;
  noViewmore?: Boolean;
  settings?: SwiperOptions | SwiperProps;
};

const WrapperModule = styled.div`
  .swiper-wrapper {
    padding-bottom: 30px;
  }
  .swiper-slide {
    height: auto !important;
    padding-top: 5px;
    padding-left: 3px;
    padding-right: 3px;
    width: 15.8rem;
  }
  .swiper-scrollbar-horizontal {
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .swiper-scrollbar-drag {
    background-color: black;
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const SwiperApp: FunctionComponent<TProps> = ({
  children,
  length,
  noViewmore = true,
  settings,
}) => {
  SwiperCore.use([Scrollbar, Navigation, Keyboard, Pagination]);

  return (
    <WrapperModule>
      <div className="relative">
        <Swiper
          spaceBetween={10}
          slidesPerGroup={2}
          slidesPerView={"auto"}
          {...settings}
        >
          {children}
          {length > 15 && !noViewmore && (
            <SwiperSlide className="flex justify-center items-center">
              <Button hover>View more</Button>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </WrapperModule>
  );
};
