import React, { MouseEventHandler } from "react";
import classNames from "classnames";
type TProps = {
  children: JSX.Element;
  url: string;
  className?: string;
  onclick?: MouseEventHandler<HTMLElement>;
};

export const ImageContainer: React.FC<TProps> = ({
  url,
  className,
  children,
  onclick,
}) => {
  const errowImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-nOAglpmejsvQmil3kr19lwURHplsMvhv5A&usqp=CAU";

  const getUrl = () => {
    if (url?.includes(null)) {
      return `url(${errowImg})`;
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
