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

  return (
    <WrapperModule>
      <div className="relative">
        <Swiper
          spaceBetween={10}
          slidesPerGroup={2}
          onSwiper={(swiper) => {
            setSwiper(swiper);
            onAppSwiper && onAppSwiper(swiper);
          }}
          slidesPerView={"auto"}
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
