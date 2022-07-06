import React, { FunctionComponent, ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

export const FormItem: FunctionComponent<TProps> = ({ children }) => {
  return <div>{children}</div>;
};
