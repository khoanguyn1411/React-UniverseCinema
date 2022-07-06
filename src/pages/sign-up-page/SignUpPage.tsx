import { FunctionComponent } from "react";

export const SignUpPage: FunctionComponent = () => {
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
      </div>
    </div>
  );
};
