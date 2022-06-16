import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Button } from "../button/Button";

type TProps = {
  children: ReactNode;
  length: number;
};

const WrapperModule = styled.div`
  .swiper-slide {
    height: auto !important;
    padding-bottom: 10px;
    padding-top: 5px;
    padding-left: 3px;
    padding-right: 3px;
    width: 15rem;
  }
`;

export const SwiperApp: FunctionComponent<TProps> = ({ children, length }) => {
  return (
    <WrapperModule>
      <div className="relative">
        <Swiper spaceBetween={10} slidesPerGroup={2} slidesPerView={"auto"}>
          {children}
          {length > 15 && (
            <SwiperSlide className="flex justify-center items-center">
              <Button hover>View more</Button>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </WrapperModule>
  );
};
