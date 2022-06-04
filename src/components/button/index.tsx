import React from "react";

type Props = {
  children?: JSX.Element | string;
};

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <div>
      Button
      {children}
    </div>
  );
};
