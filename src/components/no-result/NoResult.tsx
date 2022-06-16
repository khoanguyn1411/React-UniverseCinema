import React, { FunctionComponent, ReactNode } from "react";

type TProps = {
  children: ReactNode;
  className?: string;
};

export const NoResult: FunctionComponent<TProps> = ({
  children,
  className = "",
}) => {
  return (
    <div>
      <h1 className={`${className}`}>{children}</h1>
    </div>
  );
};
