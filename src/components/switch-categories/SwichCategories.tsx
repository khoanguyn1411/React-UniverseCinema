import classNames from "classnames";
import React from "react";
import { Button } from "../button/Button";

type TProps = {
  categories: string[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

export const SwichCategories: React.FC<TProps> = ({
  categories,
  active,
  setActive,
}) => {
  const getBackgroundButton = (cate: string) => {
    if (active === cate) {
      return { black: true };
    } else {
      return { transparent: true };
    }
  };
  return (
    <div className="flex w-fit shadow-md border-[2px] border-black rounded-[0.6rem]">
      {categories.map((cate, index) => (
        <Button
          {...getBackgroundButton(cate)}
          key={index}
          className={classNames(
            "rounded-[0] flex-1 min-w-[14rem] py-[0.5rem] first:rounded-l-[0.4rem] last:rounded-r-[0.4rem]",
            {
              "text-orange": active === cate,
            }
          )}
          onClick={() => setActive(cate)}
        >
          {cate}
        </Button>
      ))}
    </div>
  );
};
