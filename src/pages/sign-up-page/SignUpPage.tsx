import { configs } from "@/configs";
import { updateActivePage } from "@/features";
import { useAppDispatch } from "@/hooks";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleMoveToLoginPage = () => {
    navigate(configs.routes.loginPage);
    dispatch(updateActivePage());
  };
  return (
    <div className="wrapper mb-[5rem]">
      <div>
        <h1 className="font-bold text-s20">Sign up for an account</h1>
        <p className="mt-[1rem]">
          Signing up for an account is free and easy. Please visit The Movie
          Database website (TMDB) to sign up for an account.{" "}
        </p>

        <p className="mt-[0.5rem]">
          The link of the website is here:{" "}
          <a
            href="https://www.themoviedb.org/signup"
            className="font-bold text-orange cursor-pointer underline"
          >
            The Movie Database
          </a>
        </p>

        <p className="mt-[1rem]">
          If you have already got an account, please{" "}
          <span
            className="font-bold text-orange cursor-pointer"
            onClick={handleMoveToLoginPage}
          >
            Login here.
          </span>
        </p>
      </div>
    </div>
  );
};
