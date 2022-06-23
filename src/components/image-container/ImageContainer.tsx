import { imgNoAvatar } from "@/assets/images";
import classNames from "classnames";
import React, { MouseEventHandler } from "react";
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
  onclick,
  type,
  children,
}) => {
  const getUrl = () => {
    if (url?.includes(null)) {
      if (type === "people") {
        return;
      }
      return {
        path: `url(${imgNoAvatar})`,
        boolean: false,
      };
    } else {
      return {
        path: `url(${url})`,
        boolean: true,
      };
    }
  };
  return (
    <div
      className={classNames(className, "bgImg")}
      onClick={onclick}
      style={{
        backgroundImage: getUrl().path,
      }}
    >
      {getUrl().boolean ? (
        children
      ) : (
        <img src={imgNoAvatar} alt={"No poster img"} className="h-full" />
      )}
    </div>
  );
};
