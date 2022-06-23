import { AppPagination, ItemMovie } from "@/components";
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
};

const ItemContainerInit: FunctionComponent<TProps> = ({
  filterInfo,
  filterCondition,
}) => {
  console.log(filterCondition);
  const { filter, page } = useParams();
  const [activePage, setActivePage] = useState<number>(
    page ? Number.parseInt(page) : 1
  );
  const result = useCallAPI(
    filterInfo.routeAPI === "/discover/movie"
      ? funcs.getAPI(`/discover/movie?`, `&language=en-US&page=${activePage}`)
      : funcs.getAPI(
          `/movie/${filterInfo.routeAPI}?`,
          `&language=en-US&page=${activePage}`
        ),
    [filterInfo, activePage]
  );

  // console.log(
  //   funcs.getAPI("/movie/popular?", "&with_genres=35&language=en-US&page=1")
  // );

  useEffect(() => {
    setActivePage(page ? Number.parseInt(page) : 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const movies: IMovie[] = result?.results;

  return (
    <div>
      <div className="grid grid-cols-5 ml-[2rem] gap-4 gap-y-8">
        {movies &&
          movies.length > 0 &&
          movies.map((item, index) => (
            <ItemMovie key={index} noLineLimit movie={item} />
          ))}
      </div>

      <div className="flex justify-center mt-[5rem]">
        <AppPagination
          pageNumber={500}
          activePage={activePage}
          setActivePage={setActivePage}
          filterInfo={filterInfo}
        />
      </div>
    </div>
  );
};

export const ItemContainer = memo(ItemContainerInit);
