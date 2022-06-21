import { RangeSlider, Select } from "@/components";
import { configs } from "@/configs";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ItemFilter } from "./item-filter/ItemFilter";

export const Movie = () => {
  const { filter } = useParams();
  const filterInfo = (function () {
    switch (filter) {
      case configs.routes.all.replace("/", ""):
        return {
          title: "All movies",
        };
      case configs.routes.upcoming.replace("/", ""):
        return {
          title: "Upcomming movies",
        };
      case configs.routes.popular.replace("/", ""):
        return {
          title: "Popular movies",
        };
      case configs.routes.toprated.replace("/", ""):
        return {
          title: "Top rated movies",
        };
      default:
        return {
          title: "All movies",
        };
    }
  })();

  const list = [
    "Popularity Descending",
    "Popularity Ascending",
    "Rating Descending",
    "Rating Ascending",
    "Title (A-Z)",
    "Title (Z-A)",
  ];

  const [activeSort, setActiveSort] = useState<number | string>(list[0]);
  const [range, setRange] = useState<number[]>([0, 10]);

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
            <RangeSlider range={range} setRange={setRange} minDistance={1} />

            <h1>Run time</h1>
            <RangeSlider range={range} setRange={setRange} minDistance={1} />
          </ItemFilter>
        </div>
        <div className="col-span-3">thjing</div>
      </div>
    </div>
  );
};
