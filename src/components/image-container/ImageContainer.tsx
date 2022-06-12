import React, { ReactNode } from "react";
type TProps = {
  children: JSX.Element;
  url: string;
  className?: string;
};

export const ImageContainer: React.FC<TProps> = ({
  url,
  className,
  children,
}) => {
  const errowImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-nOAglpmejsvQmil3kr19lwURHplsMvhv5A&usqp=CAU";

  const getUrl = () => {
    if (url.includes(null)) {
      return `url(${errowImg})`;
    } else {
      return `url(${url})`;
    }
  };
  return (
    <div
      className={className}
      style={{
        backgroundImage: getUrl(),
      }}
    >
      {children}
    </div>
  );
};
