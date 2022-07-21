import React, { FunctionComponent, ReactNode } from "react";

type TProps = {
  children: ReactNode;
  error?: string;
};

export const FormItem: FunctionComponent<TProps> = ({ children, error }) => {
  return (
    <div>
      {children}
      {error && (
        <div className="mt-[0.5rem]">
          <span className="text-error">{error}</span>
        </div>
      )}
    </div>
  );
};
