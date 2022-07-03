import { Button } from "@/components";
import { configs } from "@/configs";
import { setErrorActivePage, updateActivePage } from "@/features";
import { useAppDispatch } from "@/hooks";
import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setErrorActivePage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMoveToHomePage = () => {
    navigate(configs.routes.homePage);
    dispatch(updateActivePage());
  };

  return (
    <div className="wrapper mb-[5rem] ">
      <div className="flex flex-col justify-center items-start h-full">
        <h1 className="font-bold text-[3rem]">
          Oops! We can't find the page you're looking for.
        </h1>
        <h1 className="text-s20">
          You tried to request a page that doesn't exist. If you believe this to
          be in error, let me know on Github.
        </h1>

        <Button
          onClick={handleMoveToHomePage}
          strokeBlack
          hover
          className="mt-[2rem]"
        >
          Go to homepage
        </Button>
      </div>
    </div>
  );
};
