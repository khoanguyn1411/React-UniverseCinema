import { imgLogoTab } from "@/assets/images";
import { TextHover } from "@/components/text-hover/TextHover";
import { configs } from "@/configs";
import { updateActivePage } from "@/features";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

export const UserBar: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const activePage = useAppSelector((state) => state.activePage.value);
  const isAuth = false;
  const navigate = useNavigate();
  const handleMoveToLoginPage = () => {
    navigate(configs.routes.loginPage);
    dispatch(updateActivePage());
  };

  const handleMoveToSignUpPage = () => {
    navigate(configs.routes.signUpPage);
    dispatch(updateActivePage());
  };
  return (
    <>
      {isAuth && (
        <div className="">
          <div
            className="w-[3.2rem] cursor-pointer h-[3.2rem] bg-center bg-cover bg-no-repeat rounded-[999px]"
            style={{ backgroundImage: `url(${imgLogoTab})` }}
          ></div>
        </div>
      )}

      {!isAuth && (
        <div className="flex gap-8">
          <TextHover
            onClick={handleMoveToLoginPage}
            className={`font-bold ${
              activePage === configs.routes.loginPage ? "text-orange" : ""
            }`}
          >
            Login
          </TextHover>

          <TextHover
            onClick={handleMoveToSignUpPage}
            className={`font-bold ${
              activePage === configs.routes.signUpPage ? "text-orange" : ""
            }`}
          >
            Sign up
          </TextHover>
        </div>
      )}
    </>
  );
};
