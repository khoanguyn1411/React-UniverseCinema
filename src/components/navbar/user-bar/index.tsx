import classNames from "classnames";
import React from "react";

type Prop = {
  isHomePage: Boolean;
};

export const UserBar: React.FC<Prop> = ({ isHomePage }) => {
  return (
    <div
      className={classNames(
        "font-bold cursor-pointer transition-all hover:text-orange hover:transition-all",
        {
          "text-shadow-sm": isHomePage,
        }
      )}
    >
      Đăng nhập
    </div>
  );
};
