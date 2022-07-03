import { AppPagination, ItemMovie, Loading, NoResult } from "@/components";
import { funcs, values } from "@/constants";
import { useCallAPI } from "@/hooks";
import { IMovie } from "@/types";
import { FunctionComponent, memo, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { IFilterCondition } from "../type";

interface IFilterInfo {
  title: string;
  routeAPI: string;
  root: string;
}

type TProps = {
  filterInfo: IFilterInfo;
  filterCondition: IFilterCondition;
  sortBy: string | number;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

const ItemContainerInit: FunctionComponent<TProps> = ({
  filterInfo,
  filterCondition,
  sortBy,
  activePage,
  setActivePage,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category, filter } = useParams();

  const [totalPage, setTotalPage] = useState<number>(500);

  const getGenres = () => {
    const listGenres = filterCondition.filterGenresList;
    if (listGenres.length === 0) return "";
    if (listGenres.length === 1) {
      return `&with_genres=${listGenres[0]}`;
    } else {
      const arrConditions = listGenres
        .map((item, index) => {
          if (index !== listGenres.length - 1) return item + ",";
          else return item;
        })
        .join("");

      return `&with_genres=${arrConditions}`;
    }
  };

  const getScore = () => {
    const minScore = filterCondition.rangeScore[0];
    const maxScore = filterCondition.rangeScore[1];
    return `vote_average.gte=${minScore}&vote_average.lte=${maxScore}`;
  };

  const getRuntime = () => {
    const minTime = filterCondition.rangeTime[0];
    const maxTime = filterCondition.rangeTime[1];
    return `with_runtime.gte=${minTime}&with_runtime.lte=${maxTime}`;
  };

  const getReleaseDateFrom = () => {
    const date = filterCondition.fromDate;
    if (!date) return "";
    if (category === values.MEDIA_TYPE.TVSHOWS)
      return `&first_air_date.gte=${funcs.formatDateWithoutSep(date)}`;
    return `&primary_release_date.gte=${funcs.formatDateWithoutSep(date)}`;
  };

  const getReleaseDateTo = () => {
    const date = filterCondition.toDate;
    if (!date) return "";
    if (category === values.MEDIA_TYPE.TVSHOWS)
      return `&first_air_date.lte=${funcs.formatDateWithoutSep(date)}`;
    return `&primary_release_date.lte=${funcs.formatDateWithoutSep(date)}`;
  };

  const getSortBy = () => {
    switch (sortBy) {
      case "Popularity Descending":
        return "popularity.desc";
      case "Popularity Ascending":
        return "popularity.asc";
      case "Rating Descending":
        return "vote_average.desc";
      case "Rating Ascending":
        return "vote_average.asc";
      case "Title (A-Z)":
        return "original_title.asc";
      case "Title (Z-A)":
        return "original_title.desc";
      default:
        return "popularity.desc";
    }
  };

  const getURL = () => {
    if (filterInfo.routeAPI === `/discover/${category}`) {
      return funcs.getAPI(
        `/discover/${category}?`,
        `${getGenres()}&language=en-US&sort_by=${getSortBy()}&page=${activePage}${getReleaseDateFrom()}${getReleaseDateTo()}&${getScore()}&${getRuntime()}`
      );
    } else {
      return funcs.getAPI(
        `/${category}/${filterInfo.routeAPI}?`,
        `${getGenres()}&language=en-US&sort_by=${getSortBy()}&page=${activePage}${getReleaseDateFrom()}${getReleaseDateTo()}&${getScore()}&${getRuntime()}`
      );
    }
  };

  const [result, isLoading] = useCallAPI(getURL(), [
    activePage,
    filterCondition,
  ]);

  useEffect(() => {
    if (result?.total_pages < 500) {
      setTotalPage(result?.total_pages);
    } else {
      setTotalPage(500);
    }
  }, [result?.total_pages]);

  useEffect(() => {
    setActivePage(
      searchParams.get("page") ? Number.parseInt(searchParams.get("page")) : 1
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, category, filterCondition]);

  useEffect(() => {
    if (activePage !== 1) {
      searchParams.set("page", `${activePage}`);
    } else {
      searchParams.delete("page");
    }
    setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  const movies: IMovie[] = result?.results;

  return (
    <div className="ml-[2rem] lg:ml-0">
      {isLoading && (
        <div className="h-[40rem]">
          <Loading />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="grid grid-cols-5 gap-4 gap-y-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {movies &&
              movies.length > 0 &&
              movies.map((item, index) => (
                <ItemMovie key={index} noLineLimit movie={item} noFixedWidth />
              ))}
          </div>
          {(result?.total_pages === 0 || !movies || movies.length === 0) && (
            <NoResult>We could not find any results</NoResult>
          )}

          {result?.total_pages > 1 && movies.length > 0 && (
            <div className="flex justify-center mt-[5rem]">
              <AppPagination
                pageNumber={totalPage}
                activePage={activePage}
                setActivePage={setActivePage}
                filterInfo={filterInfo}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export const ItemContainer = memo(ItemContainerInit);
