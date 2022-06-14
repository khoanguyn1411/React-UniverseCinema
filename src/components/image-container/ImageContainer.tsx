import React, { MouseEventHandler } from "react";
import classNames from "classnames";
import { imgNoAvatar } from "@/assets/images";
type TProps = {
  children: JSX.Element;
  url: string;
  className?: string;
  onclick?: MouseEventHandler<HTMLElement>;
  type?: string;
};

export const ImageContainer: React.FC<TProps> = ({
  url,
  className,
  children,
  onclick,
  type,
}) => {
  const getUrl = () => {
    if (url?.includes(null)) {
      if (type === "people") {
        return;
      }
      return `url(${imgNoAvatar})`;
    } else {
      return `url(${url})`;
    }
  };
  return (
    <div
      className={classNames(className, "bgImg")}
      onClick={onclick}
      style={{
        backgroundImage: getUrl(),
      }}
    >
      {children}
    </div>
  );
};
