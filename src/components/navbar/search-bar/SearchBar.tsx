import { icClose, icFilm, Icon, icSearch } from "@/assets/icons";
import { Separate } from "@/components";
import { funcs } from "@/constants";
import { useDebounce } from "@/hooks";
import { IMovie } from "@/types";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useRef, useState } from "react";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debounceValue = useDebounce(searchValue);
  const [resultMovies, setResultMovies] = useState<IMovie[]>([]);

  const [isShowSearchFunction, setIsShowSearchFunction] =
    useState<Boolean>(false);

  const [iconSearch, setIconSearch] = useState<IconDefinition>(icSearch);

  const handleToggleSearch = () => {
    setIsShowSearchFunction(!isShowSearchFunction);
  };

  useEffect(() => {
    console.log(debounceValue);
    if (debounceValue !== "") {
      const getValuesAsync = async () => {
        const res = await fetch(
          funcs.getAPI(
            `/search/movie?`,
            `&language=en-US&query=${debounceValue}&page=1&include_adult=false`
          )
        );

        const resultMovies = await res.json();
        setResultMovies(resultMovies.results);
      };
      getValuesAsync();
    }
  }, [debounceValue]);

  useEffect(() => {
    if (!isShowSearchFunction) {
      setIconSearch(icSearch);
    } else {
      setIconSearch(icClose);
    }
  }, [isShowSearchFunction]);

  const searchRef = useRef(null);
  const toggleRef = useRef(null);

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
        className="text-s18 cursor-pointer w-[2rem] hover:text-orange transition-all"
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
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>
          <Separate marginTop="0" />

          <div className="max-h-[30rem] overflow-auto">
            {resultMovies &&
              searchValue &&
              resultMovies.length > 0 &&
              resultMovies.map((movie) => (
                <div
                  key={`movie_${movie.id}`}
                  className="hover:bg-grey cursor-pointer transition-all"
                >
                  <div className="wrapper flex items-center">
                    <Icon icon={icFilm} />
                    <h1 className="ml-[1rem] py-[1rem]">
                      {movie.name || movie.original_title}
                    </h1>
                  </div>
                </div>
              ))}

            {(!resultMovies || resultMovies.length === 0) && (
              <div className="wrapper flex justify-center p-[1rem]">
                <h1 className="text-s20 font-bold">NO RESULT</h1>
              </div>
            )}
          </div>
          <Separate marginTop="0" />
        </div>
      )}
    </div>
  );
};
