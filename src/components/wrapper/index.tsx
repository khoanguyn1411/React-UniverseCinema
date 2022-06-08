import React from "react";
import classNames from "classnames";

type Props = {
  classes: string;
  children: React.ReactNode;
};

export const DefaultWrapper: React.FC<Props> = (props) => {
  const { classes, children } = props;
  return (
    <div
      className={classNames(
        "shadow-default rounded-[0.3rem] p-[1.2rem]",
        classes
      )}
    >
      {children}
    </div>
  );
};
