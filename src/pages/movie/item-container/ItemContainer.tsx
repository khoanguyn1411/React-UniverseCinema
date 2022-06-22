import { ItemMovie } from "@/components";
import { funcs } from "@/constants";
import { useCallAPI } from "@/hooks";
import { IMovie } from "@/types";
import React, { FunctionComponent, useState } from "react";
import PaginateDemo from "../paginateDemo/PaginateDemo";

type TProps = {
  filter: string;
};

export const ItemContainer: FunctionComponent<TProps> = ({ filter }) => {
  const [activePage, setActivePage] = useState<number>(1);
  const result = useCallAPI(
    filter === "/discover/movie"
      ? funcs.getAPI(`/discover/movie?`, `&language=en-US&page=${activePage}`)
      : funcs.getAPI(`/movie/${filter}?`, `&language=en-US&page=${activePage}`),
    [filter, activePage]
  );

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
        <PaginateDemo
          pageNumber={500}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
    </div>
  );
};
