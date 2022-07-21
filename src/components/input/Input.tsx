import { FunctionComponent } from "react";

type TProps = {
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
};

export const Input: FunctionComponent<TProps> = ({
  type,
  value = "",
  onChange,
  label,
}) => {
  return (
    <div className="mt-[1.5rem]">
      <h1>{label}</h1>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border-[1px] mt-[0.5rem] border-black rounded-[0.3rem] w-full px-[1rem] py-[0.5rem] "
      />
    </div>
  );
};
