import React, { ReactNode } from "react";
import styled from "styled-components";

type TProps = {
  positionDots?: number;
  children: ReactNode;
  className?: string;
};

const InitComponent: React.FC<TProps> = ({
  positionDots = 0,
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};

export const WrapperModule = styled(InitComponent)`
  @keyframes loading {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }

  .slick-slide {
    padding: 15px 0;
  }

  .slick-slide:last-child {
    margin: 0 0;
  }

  .slick-dots {
    position: absolute;
    bottom: ${(props) => props.positionDots}rem;
  }

  .slick-dots li {
    height: 0.8rem;
    width: 1rem;
    background-color: white;
    border-radius: 4px;
    opacity: 0.7;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
  }

  .slick-slide * {
    display: block !important;
  }

  .slick-dots .slick-active {
    width: 4rem;
    opacity: 1;
    transition: width 0.3s ease-in-out;
  }
`;
