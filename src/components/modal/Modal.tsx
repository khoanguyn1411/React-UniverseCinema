import { Button } from "@/components";
import React, { FunctionComponent, ReactNode } from "react";

type TProps = {
  children: ReactNode;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const Modal: FunctionComponent<TProps> = ({
  children,
  onClose,
  className = "",
}) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-black opacity-20 h-[100vh] z-[100]"></div>
      <div
        className={`fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center z-[101] animate-scale`}
      >
        <div
          className={`w-[70%] rounded-[1rem] flex flex-col bg-white max-h-[90%] p-[1.5rem]  ${className}`}
        >
          {children}
          <Button
            onClick={onClose}
            hover
            className="self-end py-[0.5rem] mt-[1rem]"
          >
            Close
          </Button>
        </div>
      </div>
    </>
  );
};
