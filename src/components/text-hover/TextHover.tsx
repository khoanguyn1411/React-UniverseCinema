import { FunctionComponent } from "react";

type TProps = {
  className?: string;
  children: string;
};

export const TextHover: FunctionComponent<TProps> = ({
  className = "",
  children,
}) => {
  return (
    <h1
      className={`min-lg:hover:text-orange cursor-pointer transition-all ${className}`}
    >
      {children}
    </h1>
  );
};
