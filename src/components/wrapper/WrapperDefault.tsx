import React from "react";
import classNames from "classnames";
const classes = classNames;

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const WrapperDefault: React.FC<Props> = (props) => {
  const { className, children } = props;
  return <div className={classes("shadow-default", className)}>{children}</div>;
};
