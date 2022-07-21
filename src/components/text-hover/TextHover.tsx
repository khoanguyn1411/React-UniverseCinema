import { FunctionComponent } from "react";

type TProps = {
  className?: string;
  children: string;
  onClick?: React.MouseEventHandler<HTMLHeadingElement>;
};

export const TextHover: FunctionComponent<TProps> = ({
  className = "",
  onClick,
  children,
}) => {
  return (
    <h1
      onClick={onClick}
      className={`min-lg:hover:text-orange cursor-pointer transition-all ${className}`}
    >
      {children}
    </h1>
  );
};
