import { Button, ImageContainer, UserScore } from "@/components";
import { configs } from "@/configs";
import { IMovie } from "@/types";
import { FunctionComponent } from "react";

type TProps = {
  movie: IMovie;
};

export const MovieInfo: FunctionComponent<TProps> = ({ movie }) => {
  const yearMovie = new Date(
    movie?.first_air_date || movie?.release_date || null
  );
  const formatRunTime = (minuteVar: number): string => {
    let hour = Math.floor(minuteVar / 60);
    const minute = minuteVar % 60;
    if (hour === 0) {
      return minute + "m";
    } else {
      if (minute === 0) {
        return `${hour}h`;
      } else {
        return `${hour}h${minute % 60}m`;
      }
    }
  };

  return (
    movie && (
      <div className="relative bg-black">
        <ImageContainer
          className="absolute w-full h-full"
          url={configs.api.IMAGE_URL_LARGE + movie.backdrop_path}
        >
          <img
            src={configs.api.IMAGE_URL_LARGE + movie.backdrop_path}
            alt={`bd_${movie.name || movie.original_title}`}
            className="h-full"
          />
        </ImageContainer>

        <div
          className="absolute h-full w-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #090909 150px, rgba(31.5, 31.5, 52.5, 0.84) 100%)",
          }}
        />

        <div className="wrapper h-full w-full py-[4rem] flex relative z-20">
          <ImageContainer
            url={configs.api.IMAGE_URL_LARGE + movie.poster_path}
            className="h-[46rem] w-[32rem] bg-orange rounded-[1rem]"
          >
            <img
              src={configs.api.IMAGE_URL_LARGE + movie.poster_path}
              alt={`${movie.name || movie.original_title}`}
            />
          </ImageContainer>
          <div className="flex-[2.5] text-white font-bold pl-[4rem] flex flex-col justify-center">
            {/* Main content */}
            <div className="flex justify-between">
              <div className="min-h-[25rem]">
                <h1 className="text-[3rem] text-orange">
                  {movie.name || movie.original_title}
                  <span className="text-[3rem] font-normal">
                    {yearMovie && ` (${yearMovie.getFullYear()})`}
                  </span>
                </h1>
                <h1 className="font-normal italic">{movie.tagline}</h1>
                <h1 className="mt-[2rem]">
                  {(movie.release_date && (
                    <>
                      <span className="font-normal">Release date:</span>
                      <span> {movie.release_date} </span>
                    </>
                  )) ||
                    (movie.first_air_date && (
                      <>
                        <span className="font-normal">First air date:</span>
                        <span> {movie.first_air_date} </span>
                      </>
                    ))}
                  {movie.origin_country && (
                    <span>{"(" + movie.origin_country + ")"}</span>
                  )}
                </h1>
                <div className="">
                  <span className="font-normal">Genres: </span>
                  {movie.genres?.map((item, index) => (
                    <span
                      key={index}
                      className="cursor-pointer hover:text-orange hover:transition-all transition-all"
                    >
                      {item.name}
                      {index !== movie.genres?.length - 1 && (
                        <span className="text-white">, </span>
                      )}
                    </span>
                  ))}
                </div>

                {(movie.episode_run_time || movie.runtime) && (
                  <div>
                    <span className="font-normal">Running time: </span>
                    <span>
                      {(movie.episode_run_time &&
                        `${formatRunTime(movie.episode_run_time)}/ episode`) ||
                        formatRunTime(movie.runtime)}
                    </span>
                  </div>
                )}

                <div className="w-fit flex items-center">
                  <div className="w-[7rem] mt-[2rem] cursor-pointer hover:scale-110 hover:transition-all transition-all">
                    <UserScore score={movie?.vote_average} />
                  </div>
                  <h1 className="w-fit ml-[1.5rem] mt-[1.8rem]">
                    Average
                    <br />
                    Score
                  </h1>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                {configs.actions.map((button, index) => (
                  <Button
                    key={index}
                    icon={button.icon}
                    hover
                    iconOnly
                    onClick={() => button.onClick(movie)}
                    rounded
                    className="rounded-[100%] w-[5rem] h-[5rem]"
                  />
                ))}
              </div>
            </div>

            <div className="mt-[2rem]">
              <h1 className="text-s20 text-orange">Overview</h1>
              <h1 className="font-normal mt-[0.5rem] text-justify">
                {movie.overview}
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
