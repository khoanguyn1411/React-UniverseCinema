import { Button } from "@/components";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import SwiperCore, {
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

type TProps = {
  children: ReactNode;
  noViewmore?: Boolean;
  settings?: SwiperProps;
  data: any[];
  onAppSwiper?: (value: SwiperCore) => void;
};

const WrapperModule = styled.div`
  .swiper-wrapper {
    padding-bottom: 30px;
  }
  .swiper-slide {
    height: auto !important;
    padding-top: 8px;
    padding-left: 3px;
    padding-right: 3px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    &:first-child {
      @media screen and (max-width: 1023px) {
        margin-left: 1.7rem;
      }
    }
    &:last-child {
      @media screen and (max-width: 1023px) {
        margin-right: 2rem;
      }
    }
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
  noViewmore = true,
  settings,
  data,
  onAppSwiper,
}) => {
  SwiperCore.use([Scrollbar, Navigation, Keyboard, Pagination]);

  const [swiper, setSwiper] = useState<SwiperCore>();
  useEffect(() => {
    swiper?.slideTo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const settingInit: SwiperProps = {
    modules: [Navigation],
  };

  return (
    <WrapperModule>
      <div className="relative">
        <Swiper
          spaceBetween={10}
          slidesPerGroup={2}
          direction="horizontal"
          onSwiper={(swiper) => {
            setSwiper(swiper);
            onAppSwiper && onAppSwiper(swiper);
          }}
          slidesPerView={"auto"}
          {...settingInit}
          {...settings}
        >
          {children}
          {data.length > 15 && !noViewmore && (
            <SwiperSlide className="flex justify-center items-center">
              <Button hover>View more</Button>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </WrapperModule>
  );
};
