import { Button, RangeSlider, Select } from "@/components";
import { configs } from "@/configs";
import { funcs } from "@/constants";
import { useCallAPI } from "@/hooks";
import { IGenres } from "@/types";
import { FunctionComponent, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemContainer } from "./item-container/ItemContainer";
import { ItemFilter } from "./item-filter/ItemFilter";
import { IFilterCondition } from "./type";

export const Movie: FunctionComponent = () => {
  const { filter } = useParams();

  const filterInfo = useMemo(
    function () {
      switch (filter) {
        case configs.routes.all.replace("/", ""):
          return {
            title: "All movies",
            routeAPI: "/discover/movie",
            root: configs.routes.all,
          };
        case configs.routes.upcoming.replace("/", ""):
          return {
            title: "Upcoming movies",
            routeAPI: "upcoming",
            root: configs.routes.upcoming,
          };
        case configs.routes.popular.replace("/", ""):
          return {
            title: "Popular movies",
            routeAPI: "popular",
            root: configs.routes.popular,
          };
        case configs.routes.toprated.replace("/", ""):
          return {
            title: "Top rated movies",
            routeAPI: "top_rated",
            root: configs.routes.toprated,
          };
        case configs.routes.nowplaying.replace("/", ""):
          return {
            title: "Now playing movies",
            routeAPI: "now_playing",
            root: configs.routes.nowplaying,
          };
        default:
          return {
            title: "All movies",
            routeAPI: "/discover/movie?",
            root: configs.routes.all,
          };
      }
    },
    [filter]
  );
  const genres: IGenres[] = useCallAPI(
    funcs.getAPI("/genre/movie/list?", "")
  )?.genres;
  const list = [
    "Popularity Descending",
    "Popularity Ascending",
    "Rating Descending",
    "Rating Ascending",
    "Title (A-Z)",
    "Title (Z-A)",
  ];

  const [activeSort, setActiveSort] = useState<number | string>(list[0]);
  const [rangeScore, setRangeScore] = useState<number[]>([0, 10]);
  const [rangeTime, setRangeTime] = useState<number[]>([0, 360]);

  const marksScore = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 6,
    },
    {
      value: 7,
    },
    {
      value: 8,
    },
    {
      value: 9,
    },
    {
      value: 10,
      label: "10",
    },
  ];

  const marksTime = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 60,
    },
    {
      value: 120,
      label: "120",
    },
    {
      value: 180,
    },
    {
      value: 240,
      label: "240",
    },
    {
      value: 300,
    },
    {
      value: 360,
      label: "360",
    },
  ];

  const [filterGenresList, setFilterGenresList] = useState<number[]>([]);
  const handleSetFilterGenresList = (item: number) => {
    setFilterGenresList((prev) => {
      if (prev.includes(item)) {
        return prev.filter((initItem) => item !== initItem);
      } else {
        return [...prev, item];
      }
    });
  };

  const [filterCondition, setFilterCondition] = useState<IFilterCondition>({
    rangeScore,
    rangeTime,
    filterGenresList,
  });
  const handleSetFilterCondition = () => {
    setFilterCondition({
      rangeScore,
      rangeTime,
      filterGenresList,
    });
  };

  return (
    <div className="wrapper flex flex-col">
      <div className="mt-[2rem] text-center text-[3rem] uppercase">
        <h1 className="font-bold">{filterInfo.title}</h1>
      </div>
      <div className="grid grid-cols-4 mt-[2rem]">
        <div className="col-span-1 flex flex-col">
          <ItemFilter title="Sort by">
            <Select active={activeSort} setActive={setActiveSort} list={list} />
          </ItemFilter>

          <ItemFilter title="Filters">
            <h1>User score</h1>
            <RangeSlider
              range={rangeScore}
              setRange={setRangeScore}
              minDistance={1}
              marks={marksScore}
              lableShow="Rated"
              minMax={[0, 10]}
              step={1}
            />

            <h1>Run time</h1>
            <RangeSlider
              range={rangeTime}
              setRange={setRangeTime}
              minDistance={10}
              lableShow="Time"
              step={10}
              minMax={[0, 360]}
              lableShowSuffix=" minute"
              marks={marksTime}
            />

            <h1>Genres</h1>
            <div className="mt-[1rem]">
              {genres &&
                genres.length > 0 &&
                genres.map((item) => {
                  const getStyle = () => {
                    if (filterGenresList.includes(item.id)) {
                      return { orange: true };
                    } else {
                      return { strokeBlack: true, hover: true };
                    }
                  };
                  return (
                    <Button
                      {...getStyle()}
                      className="mb-[1rem] mr-[0.5rem] py-[0.2rem] px-[1rem]"
                      key={item.id}
                      onClick={() => handleSetFilterGenresList(item.id)}
                    >
                      {item.name}
                    </Button>
                  );
                })}
            </div>

            <Button
              hover
              className="w-full mt-[1.5rem]"
              onClick={handleSetFilterCondition}
            >
              Search
            </Button>
          </ItemFilter>
        </div>
        <div className="col-span-3 mb-[5rem]">
          {
            <ItemContainer
              filterCondition={filterCondition}
              filterInfo={filterInfo}
            />
          }
        </div>
      </div>
    </div>
  );
};
