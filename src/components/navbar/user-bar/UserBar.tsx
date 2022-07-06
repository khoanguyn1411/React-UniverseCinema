import { imgLogoTab } from "@/assets/images";
import { configs } from "@/configs";
import { updateActivePage } from "@/features";
import { useAppDispatch } from "@/hooks";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

export const UserBar: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const isAuth = false;
  const navigate = useNavigate();
  const handleMoveToLoginPage = () => {
    navigate(configs.routes.loginPage);
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
          <div
            onClick={handleMoveToLoginPage}
            className="font-bold cursor-pointer transition-all hover:text-orange hover:transition-all"
          >
            Login
          </div>

          <div
            onClick={handleMoveToLoginPage}
            className="font-bold cursor-pointer transition-all hover:text-orange hover:transition-all"
          >
            Sign up
          </div>
        </div>
      )}
    </>
  );
};
