import React from "react";
import { Button } from "./Button";

type TProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const ButtonWatchmore: React.FC<TProps> = ({ onClick }) => {
  return (
    <div className="mt-[4rem] m-auto">
      <Button
        onClick={onClick}
        strokeBlack
        hover
        className="m-auto block border-[2px] font-bold"
      >
        Xem thêm
      </Button>
    </div>
  );
};
