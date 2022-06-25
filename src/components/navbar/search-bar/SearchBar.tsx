import { icClose, icFilm, icFilm2, Icon, icSearch } from "@/assets/icons";
import { Separate } from "@/components";
import { configs } from "@/configs";
import { funcs } from "@/constants";
import { updateActivePage } from "@/features";
import { useAppDispatch, useDebounce } from "@/hooks";
import { IMovie } from "@/types";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IResult {
  movie: IMovie[];
  tv: IMovie[];
}

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debounceValue = useDebounce(searchValue);
  const [result, setResult] = useState<IResult>({ movie: [], tv: [] });

  const [isShowSearchFunction, setIsShowSearchFunction] =
    useState<Boolean>(false);

  const [iconSearch, setIconSearch] = useState<IconDefinition>(icSearch);

  const handleToggleSearch = () => {
    setIsShowSearchFunction(!isShowSearchFunction);
  };

  const dispacth = useAppDispatch();
  const navigate = useNavigate();
  const handleSwitchToDetailMovie = (film: IMovie) => {
    navigate(
      `${configs.routes.movieDetail}/${film.id}-${
        (film.name && encodeURI(film.name)) ||
        (film.original_title && encodeURI(film.original_title))
      }`
    );
    setIsShowSearchFunction(false);
    setSearchValue("");
    dispacth(updateActivePage());
  };

  useEffect(() => {
    if (debounceValue === "") return;

    const getResultMovie = fetch(
      funcs.getAPI(
        `/search/movie?`,
        `&language=en-US&query=${debounceValue}&page=1&include_adult=false`
      )
    ).then((res) => res.json());

    const getResultTV = fetch(
      funcs.getAPI(
        `/search/tv?`,
        `&language=en-US&query=${debounceValue}&page=1&include_adult=false`
      )
    ).then((res) => res.json());

    Promise.all([getResultMovie, getResultTV]).then((result) =>
      setResult({ movie: result[0].results, tv: result[1].results })
    );
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
    <div className="ml-[2rem] text-black">
      <Icon
        icon={iconSearch}
        className="text-s18 cursor-pointer text-white w-[2rem] hover:text-orange transition-all"
        onClick={handleToggleSearch}
        forwardedRef={toggleRef}
      />

      {isShowSearchFunction && (
        <div
          ref={searchRef}
          className="absolute bottom-0 translate-y-full left-0 right-0 bg-white border-black"
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
            <h1
              onClick={() => {
                setSearchValue("");
              }}
              className="cursor-pointer font-bold hover:text-orange transition-all"
            >
              Clear
            </h1>
          </div>
          <Separate marginTop="0" />

          <div className="max-h-[30rem] overflow-auto">
            {result?.movie &&
              searchValue &&
              result.movie.length > 0 &&
              result.movie.slice(0, 5).map((movie) => (
                <div
                  key={`movie_${movie.id}`}
                  className="hover:bg-grey cursor-pointer transition-all"
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
                  className="hover:bg-grey cursor-pointer transition-all"
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
