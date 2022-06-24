import { AppPagination, ItemMovie, NoResult } from "@/components";
import { funcs } from "@/constants";
import { useCallAPI } from "@/hooks";
import { IMovie } from "@/types";
import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IFilterCondition } from "../type";
import { memo } from "react";

interface IFilterInfo {
  title: string;
  routeAPI: string;
  root: string;
}

type TProps = {
  filterInfo: IFilterInfo;
  filterCondition: IFilterCondition;
  sortBy: string | number;
};

const ItemContainerInit: FunctionComponent<TProps> = ({
  filterInfo,
  filterCondition,
  sortBy,
}) => {
  const { category, filter, page } = useParams();
  const [activePage, setActivePage] = useState<number>(
    page ? Number.parseInt(page) : 1
  );
  const [totalPage, setTotalPage] = useState<number>(500);

  const getGenres = () => {
    const listGenres = filterCondition.filterGenresList;
    if (listGenres.length === 0) return "";
    if (listGenres.length === 1) {
      return `with_genres=${listGenres[0]}`;
    } else {
      const arrConditions = listGenres
        .map((item, index) => {
          if (index !== listGenres.length - 1) return item + ",";
          else return item;
        })
        .join("");

      return `with_genres=${arrConditions}`;
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
    return `&release_date.gte=${funcs.formatDateWithoutSep(date)}`;
  };

  const getReleaseDateTo = () => {
    const date = filterCondition.toDate;
    if (!date) return "";
    return `&release_date.lte=${funcs.formatDateWithoutSep(date)}`;
  };

  // "Popularity Descending",
  // "Popularity Ascending",
  // "Rating Descending",
  // "Rating Ascending",
  // "Title (A-Z)",
  // "Title (Z-A)",

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

  const result = useCallAPI(
    filterInfo.routeAPI === `/discover/${category}`
      ? funcs.getAPI(
          `/discover/${category}?`,
          `&${getGenres()}&language=en-US&sort_by=${getSortBy()}&page=${activePage}${getReleaseDateFrom()}${getReleaseDateTo()}&${getScore()}&${getRuntime()}`
        )
      : funcs.getAPI(
          `/${category}/${filterInfo.routeAPI}?`,
          `&${getGenres()}&language=en-US&sort_by=${getSortBy()}&page=${activePage}${getReleaseDateFrom()}${getReleaseDateTo()}&${getScore()}&${getRuntime()}`
        ),
    [filterInfo, activePage, filterCondition, sortBy, category]
  );

  console.log(
    funcs.getAPI(
      `/${category}/${filterInfo.routeAPI}?`,
      `&${getGenres()}&language=en-US&sort_by=${getSortBy()}&page=${activePage}${getReleaseDateFrom()}${getReleaseDateTo()}&${getScore()}&${getRuntime()}`
    )
  );

  useEffect(() => {
    setActivePage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterCondition, category]);

  useEffect(() => {
    if (result?.total_pages < 500) {
      setTotalPage(result?.total_pages);
    } else {
      setTotalPage(500);
    }
  }, [result?.total_pages]);

  useEffect(() => {
    setActivePage(page ? Number.parseInt(page) : 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, category]);

  const movies: IMovie[] = result?.results;

  return (
    <div className="ml-[2rem]">
      <div className="grid grid-cols-5 gap-4 gap-y-8 ">
        {movies &&
          movies.length > 0 &&
          movies.map((item, index) => (
            <ItemMovie key={index} noLineLimit movie={item} />
          ))}
      </div>

      {result?.total_pages === 0 && (
        <NoResult>We could not find any results</NoResult>
      )}

      {result?.total_pages > 1 && (
        <div className="flex justify-center mt-[5rem]">
          <AppPagination
            pageNumber={totalPage}
            activePage={activePage}
            setActivePage={setActivePage}
            filterInfo={filterInfo}
          />
        </div>
      )}
    </div>
  );
};

export const ItemContainer = memo(ItemContainerInit);
