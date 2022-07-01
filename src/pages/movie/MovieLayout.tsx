import {
  AppDatePicker,
  Button,
  RangeSlider,
  Select,
  Separate,
} from "@/components";
import { configs } from "@/configs";
import { funcs, values } from "@/constants";
import { useCallAPI } from "@/hooks";
import { IGenres } from "@/types";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ErrorPage } from "../error-page/ErrorPage";
import { ItemContainer } from "./item-container/ItemContainer";
import { ItemFilter } from "./item-filter/ItemFilter";
import { IFilterCondition } from "./type";

export const Movie: FunctionComponent = () => {
  const { category, filter } = useParams();

  useEffect(() => {
    document.title = `${
      category === values.MEDIA_TYPE.MOVIE ? "Movies" : "TV shows"
    } | Universe Cinema`;
  }, [category]);

  const isRightCategory =
    category === values.MEDIA_TYPE.MOVIE ||
    category === values.MEDIA_TYPE.TVSHOWS;

  const filterInfo = useMemo(
    function () {
      if (category === values.MEDIA_TYPE.MOVIE) {
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
            return null;
        }
      } else {
        switch (filter) {
          case configs.routes.all.replace("/", ""):
            return {
              title: "All TV Shows",
              routeAPI: "/discover/tv",
              root: configs.routes.all,
            };
          case configs.routes.airingToday.replace("/", ""):
            return {
              title: "Airing Today",
              routeAPI: "airing_today",
              root: configs.routes.airingToday,
            };
          case configs.routes.onTV.replace("/", ""):
            return {
              title: "On TV",
              routeAPI: "on_the_air",
              root: configs.routes.onTV,
            };
          case configs.routes.toprated.replace("/", ""):
            return {
              title: "Top Rated TV Shows",
              routeAPI: "top_rated",
              root: configs.routes.toprated,
            };

          default:
            return null;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filter, category]
  );

  const [result] = useCallAPI(funcs.getAPI(`/genre/${category}/list?`, ""), [
    category,
  ]);

  const genres: IGenres[] = result?.genres;
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
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

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
    fromDate,
    toDate,
  });
  const [searchParams, setSearchParam] = useSearchParams();

  const handleSetFilterCondition = () => {
    setFilterCondition({
      rangeScore,
      rangeTime,
      filterGenresList,
      fromDate,
      toDate,
    });
  };

  const handleClearFilter = () => {
    setRangeScore([0, 10]);
    setRangeTime([0, 360]);
    setFilterGenresList([]);
    setFromDate(null);
    setToDate(null);
    setFilterCondition({
      rangeScore: [0, 10],
      rangeTime: [0, 360],
      filterGenresList: [],
      fromDate: null,
      toDate: null,
    });
  };

  // var searchParams = new URLSearchParams();
  // searchParams.append("stat", "a");
  // searchParams.append("stat", "b");

  return filterInfo && isRightCategory ? (
    <div className="wrapper flex flex-col">
      <div className="text-center text-[3rem] uppercase">
        <h1 className="font-bold">{filterInfo.title}</h1>
      </div>
      <div className="grid grid-cols-4 mt-[2rem]">
        <div className="col-span-1 flex flex-col bg-white lg:col-span-4 ">
          {filter === configs.routes.all.replace("/", "") && (
            <ItemFilter title="Sort by">
              <div className="p-[1rem]">
                <Select
                  active={activeSort}
                  setActive={setActiveSort}
                  list={list}
                />
              </div>
            </ItemFilter>
          )}

          <ItemFilter title="Filters">
            <div className="p-[1rem]">
              <h1>User score</h1>
              <RangeSlider
                range={rangeScore}
                setRange={setRangeScore}
                minDistance={1}
                marks={marksScore}
                labelShow="Rated"
                minMax={[0, 10]}
                step={1}
              />
            </div>

            <Separate marginTop="0" />
            <div className="p-[1rem]">
              <h1 className="mt-[1rem]">Run time</h1>
              <RangeSlider
                range={rangeTime}
                setRange={setRangeTime}
                minDistance={10}
                labelShow="Time"
                step={10}
                minMax={[0, 360]}
                labelShowSuffix=" minute"
                marks={marksTime}
              />
            </div>

            <Separate marginTop="0" />

            <div className="p-[1rem]">
              <h1 className="mt-[1rem]">From date</h1>

              <AppDatePicker
                className="mt-[1rem]"
                value={fromDate}
                setValue={setFromDate}
              />
              <h1 className="mt-[1rem]">To date</h1>

              <AppDatePicker
                className="mt-[1rem] mb-[1rem]"
                value={toDate}
                setValue={setToDate}
              />
            </div>

            <Separate marginTop="0" />

            <div className="p-[1rem]">
              <h1 className="mt-[1rem]">Genres</h1>
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
            </div>

            <div className="px-[1rem] pb-[1rem]">
              <Button
                hover
                strokeBlack
                className="mb-[1rem] w-full"
                onClick={handleClearFilter}
              >
                Clear filter
              </Button>

              <Button
                hover
                className="w-full"
                onClick={handleSetFilterCondition}
              >
                Search
              </Button>
            </div>
          </ItemFilter>
        </div>
        <div className="col-span-3 mb-[5rem] lg:col-span-4">
          {
            <ItemContainer
              filterCondition={filterCondition}
              filterInfo={filterInfo}
              sortBy={activeSort}
            />
            // <ItemTest
            //   filterCondition={filterCondition}
            //   filterInfo={filterInfo}
            //   sortBy={activeSort}
            // />
          }
        </div>
      </div>
    </div>
  ) : (
    <ErrorPage />
  );
};
