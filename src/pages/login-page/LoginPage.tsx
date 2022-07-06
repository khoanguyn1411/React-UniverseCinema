import { FormItem, Input } from "@/components";
import { IFormLoginValue } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { FunctionComponent } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "./shema";

export const LoginPage: FunctionComponent = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormLoginValue>({ resolver: yupResolver(loginSchema) });
  const navigate = useNavigate();
  const onSubmit = async (data: IFormLoginValue) => {
    console.log("Do something!");
  };
  return (
    <div className="wrapper">
      <div>
        <h1 className="font-bold text-s20">Login to your account</h1>
        <p className="mt-[1rem]">
          Login to rate and add movies and tv shows to your wishlist. If you do
          not have an account, feel free to{" "}
          <span className="font-bold text-orange cursor-pointer">
            Register here.
          </span>
        </p>
      </div>
      <form className="mt-[1rem]" onSubmit={handleSubmit(onSubmit)}>
        <FormItem>
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <Input value={value} onChange={onChange} placeholder="Email" />
            )}
          />
        </FormItem>
      </form>
    </div>
  );
};
