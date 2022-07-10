import { icClose, icFilm, icFilm2, Icon, icSearch } from "@/assets/icons";
import { Separate, Loading, TextHover } from "@/components";
import { configs } from "@/configs";
import { funcs } from "@/constants";
import { updateActivePage } from "@/features";
import { useAppDispatch, useDebounce } from "@/hooks";
import { IMovie } from "@/types";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IResult {
  movie: IMovie[];
  tv: IMovie[];
}

export const SearchBar: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debounceValue = useDebounce(searchValue);
  const [result, setResult] = useState<IResult>({ movie: [], tv: [] });

  const [isShowSearchFunction, setIsShowSearchFunction] =
    useState<Boolean>(false);

  const [iconSearch, setIconSearch] = useState<IconDefinition>(icSearch);

  const handleToggleSearch = () => {
    setIsShowSearchFunction(!isShowSearchFunction);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSwitchToDetailMovie = (film: IMovie) => {
    navigate(
      `${configs.routes.movieDetail}/${film.id}-${
        (film.name && funcs.removeAccent(film.name)) ||
        (film.original_title && funcs.removeAccent(film.original_title))
      }`
    );
    setIsShowSearchFunction(false);
    setSearchValue("");
    dispatch(updateActivePage());
  };

  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    if (debounceValue === "") return;

    setIsLoading(true);
    const getResultMovie = fetch(
      funcs.getAPI(
        `/search/movie`,
        `&language=en-US&query=${encodeURIComponent(
          debounceValue
        )}&page=1&include_adult=false`
      )
    )
      .then((res) => res.json())
      .catch((error) => {
        throw new Error("Something is wrong when search for movie: " + error);
      });

    const getResultTV = fetch(
      funcs.getAPI(
        `/search/tv`,
        `&language=en-US&query=${encodeURIComponent(
          debounceValue
        )}&page=1&include_adult=false`
      )
    )
      .then((res) => res.json())
      .catch((error) => {
        throw new Error("Something is wrong when search for tv: " + error);
      });

    Promise.all([getResultMovie, getResultTV])
      .then((result) => {
        setResult({ movie: result[0].results, tv: result[1].results });
        setIsLoading(false);
      })
      .catch((error) => {
        throw new Error("Something is wrong in search API: " + error);
      });
  }, [debounceValue]);

  useEffect(() => {
    if (!isShowSearchFunction) {
      setIconSearch(icSearch);
    } else {
      setIconSearch(icClose);
    }
  }, [isShowSearchFunction]);

  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    inputRef?.current && inputRef.current.focus();
  });
  console.log(result);

  useEffect(() => {
    const elementList = searchRef?.current;
    const elementDisplay = toggleRef?.current;
    if (elementList && elementDisplay) {
      const handleCloseListDiv = (event: Event) => {
        if (
          !elementList.contains(event.target) &&
          !elementDisplay.contains(event.target)
        ) {
          setIsShowSearchFunction(false);
        }
      };
      window.addEventListener("click", handleCloseListDiv);
      return () => {
        window.removeEventListener("click", handleCloseListDiv);
      };
    }
  }, [isShowSearchFunction]);

  return (
    <div className="ml-[2rem]">
      <Icon
        icon={iconSearch}
        className="text-[2rem] cursor-pointer w-[2rem] hover:text-orange transition-all"
        onClick={handleToggleSearch}
        forwardedRef={toggleRef}
      />

      {isShowSearchFunction && (
        <div
          ref={searchRef}
          className="absolute bottom-0 text-black translate-y-full left-0 right-0 bg-white border-black"
        >
          <Separate marginTop="0" />
          <div className="wrapper py-[1.5rem] flex items-center">
            <Icon icon={icSearch} className="text-black" />
            <input
              className="outline-none text-black ml-[1.5rem] flex-1"
              placeholder="Search for a movie or a tv show ..."
              value={searchValue}
              ref={inputRef}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <div className="flex flex-row relative">
              {isLoading && (
                <div className="left-[-4rem] top-[-1.4rem] w-fit absolute">
                  <Loading.Search />
                </div>
              )}
              <TextHover
                onClick={() => {
                  setSearchValue("");
                  inputRef?.current.focus();
                }}
                className="cursor-pointer font-bold hover:text-orange transition-all"
              >
                Clear
              </TextHover>
            </div>
          </div>
          <Separate marginTop="0" />

          <div className="max-h-[30rem] overflow-auto">
            {result.movie &&
              searchValue &&
              result.movie.length > 0 &&
              result.movie.slice(0, 5).map((movie) => (
                <div
                  key={`movie_${movie.id}`}
                  className="min-lg:hover:bg-grey cursor-pointer transition-all"
                  onClick={() => {
                    handleSwitchToDetailMovie(movie);
                  }}
                >
                  <div className="wrapper flex items-center">
                    <Icon icon={icFilm} />
                    <h1 className="ml-[1rem] py-[1rem]">
                      {movie.name || movie.original_title}
                    </h1>
                  </div>
                </div>
              ))}

            {result?.tv &&
              searchValue &&
              result.tv.length > 0 &&
              result.tv.slice(0, 5).map((tv) => (
                <div
                  key={`tv_${tv.id}`}
                  className="min-lg:hover:bg-grey cursor-pointer transition-all"
                  onClick={() => {
                    handleSwitchToDetailMovie(tv);
                  }}
                >
                  <div className="wrapper flex items-center">
                    <Icon icon={icFilm2} />
                    <h1 className="ml-[1rem] py-[1rem]">
                      {tv.name || tv.original_title}
                    </h1>
                  </div>
                </div>
              ))}
          </div>

          {(!result || (result.movie.length === 0 && result.tv.length === 0)) &&
            searchValue && (
              <div className="wrapper flex justify-center p-[1rem]">
                <h1 className="text-s20 font-bold">NO RESULT</h1>
              </div>
            )}
          <Separate marginTop="0" />
        </div>
      )}
    </div>
  );
};
