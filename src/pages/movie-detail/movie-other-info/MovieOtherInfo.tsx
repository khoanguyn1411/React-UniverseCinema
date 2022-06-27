import { icLink } from "@/assets/icons";
import { Button } from "@/components";
import { configs } from "@/configs";
import { funcs } from "@/constants";
import { FunctionComponent, ReactNode } from "react";
import { TProps } from "..";

type TPropsStatus = {
  title: string;
  children: ReactNode;
};
const Status: FunctionComponent<TPropsStatus> = ({ title, children }) => {
  return (
    <div className="mb-[3rem]">
      <h1 className="text-s20 font-bold">{title}</h1>
      <div className="text-s20">{children}</div>
    </div>
  );
};

export const MovieOtherInfo: FunctionComponent<TProps.noType> = ({ movie }) => {
  const handleNavigateToHomepage = () => {
    window.open(movie.homepage, "_blank");
  };
  return (
    <div className="mt-[2.5rem] mb-[3rem]">
      <Status title="Status">
        <h1>{movie.status}</h1>
      </Status>

      <Status title="Spoken language">
        {movie.spoken_languages?.map((item, index) => (
          <span key={index} className="text-s18">
            {item.english_name}
            {index !== movie.spoken_languages.length - 1 && ", "}
          </span>
        ))}
      </Status>

      {!!movie.budget && (
        <Status title="Budget">
          <h1>{funcs.formatCurrency(movie.budget)}</h1>
        </Status>
      )}

      {!!movie.revenue && (
        <Status title="Revenue">
          <h1>{funcs.formatCurrency(movie.revenue)}</h1>
        </Status>
      )}

      {movie.networks && (
        <Status title={"Networks"}>
          {movie.networks.map((item, index) => (
            <img
              key={index}
              src={configs.api.IMAGE_URL_SMALL + item.logo_path}
              alt={item.name}
              className="h-[3rem] mt-[1rem]"
            />
          ))}
        </Status>
      )}

      {movie.popularity && (
        <Status title={"Popularity"}>
          <h1>{movie.popularity}</h1>
        </Status>
      )}

      {!!movie.vote_count && (
        <Status title={"Vote count"}>
          <h1>{movie.vote_count}</h1>
        </Status>
      )}

      <div className="mt-[2rem]">
        <Button
          strokeBlack
          onClick={handleNavigateToHomepage}
          icon={icLink}
          hover
          className="font-bold w-full px-[1rem] min-w-min"
        >
          Visit Homepage
        </Button>
      </div>
    </div>
  );
};
