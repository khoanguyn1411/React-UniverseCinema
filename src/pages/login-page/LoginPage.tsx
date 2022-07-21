import { Button, FormItem, Input, TextHover } from "@/components";
import { configs } from "@/configs";
import { updateActivePage } from "@/features";
import { useAppDispatch } from "@/hooks";
import { IFormLoginValue } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { FunctionComponent } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "./loginSchema";

export const LoginPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleMoveToSignUpPage = () => {
    navigate(configs.routes.signUpPage);
    dispatch(updateActivePage());
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormLoginValue>({ resolver: yupResolver(loginSchema) });
  const onSubmit = async (data: IFormLoginValue) => {};
  return (
    <div className="wrapper mb-[5rem]">
      <div>
        <h1 className="font-bold text-s20">Login to your account</h1>
        <p className="mt-[1rem]">
          Login to rate and add movies and tv shows to your wishlist. If you do
          not have an account, feel free to{" "}
          <span
            className="font-bold text-orange cursor-pointer"
            onClick={handleMoveToSignUpPage}
          >
            Register here.
          </span>
        </p>
      </div>
      <form className="mt-[1rem]" onSubmit={handleSubmit(onSubmit)}>
        <FormItem error={errors.email?.message}>
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <Input value={value} onChange={onChange} label="Email" />
            )}
          />
        </FormItem>

        <FormItem error={errors.password?.message}>
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <Input value={value} onChange={onChange} label="Password" />
            )}
          />
        </FormItem>
        <div className="flex mt-[3rem] items-center">
          <Button
            hover
            orange
            className="w-[12rem]"
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
          <TextHover className="font-bold ml-[2rem]">Reset password</TextHover>
        </div>
      </form>
    </div>
  );
};
