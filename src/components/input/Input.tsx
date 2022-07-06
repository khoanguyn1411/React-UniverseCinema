import { FunctionComponent } from "react";

type TProps = {
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

export const Input: FunctionComponent<TProps> = ({
  type,
  value = "",
  onChange,
  placeholder,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border-[1px] border-black rounded-[0.3rem] w-full px-[1rem] py-[0.5rem] "
    />
  );
};
