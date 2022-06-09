import { Button } from "@/components";
import { ItemMovie } from "@/components";
import { configs } from "@/configs";
import { updateActivePage } from "@/features";
import { useAppDispatch } from "@/hooks";
import { TMockDataMovies } from "@/types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MovieCates: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onplaying: number = 1;
  const incoming: number = 2;
  const [active, setActive] = useState<Number>(onplaying);
  const movies = configs.mockDataMovie;

  const [dataMovies, setDataMovies] = useState<TMockDataMovies[]>(
    movies.onplaying
  );

  const getTypeButton = (type: number): Object => {
    if (active === type) {
      return { orange: true };
    } else {
      return false;
    }
  };

  const handleSetActive = (type: number): void => {
    setActive(type);
    if (type === onplaying) {
      setDataMovies(movies.onplaying);
    } else {
      setDataMovies(movies.incoming);
    }
  };

  const handleClickWatchMore = (): void => {
    if (active === onplaying) {
      navigate(configs.routes.movieOnplayingPage);
    } else {
      navigate(configs.routes.movieIncomingPage);
    }
    dispatch(updateActivePage());
  };

  return (
    <div className="mb-[5rem]">
      <div className="wrapper flex justify-center mt-[4rem]">
        <Button
          {...getTypeButton(onplaying)}
          className={`rounded-tr-[0] rounded-br-[0] ${
            !getTypeButton(onplaying) && "hover:text-orange"
          }`}
          onClick={() => {
            handleSetActive(onplaying);
          }}
        >
          Phim đang chiếu
        </Button>
        <Button
          {...getTypeButton(incoming)}
          className={`rounded-tl-[0] rounded-bl-[0] ${
            !getTypeButton(incoming) && "hover:text-orange"
          }`}
          onClick={() => {
            handleSetActive(incoming);
          }}
        >
          Phim sắp chiếu
        </Button>
      </div>

      <div className=" wrapper grid grid-cols-3 mt-[4rem] gap-[3rem]">
        {dataMovies.map((movie, index) => (
          <ItemMovie key={index} data={movie} />
        ))}
      </div>

      <div className="mt-[4rem] m-auto">
        {/* <h1 className="w-fit m-auto text-s18 cursor-pointer select-none hover:text-orange transition-all font-bold">
          Xem thêm
        </h1> */}
        <Button
          onClick={() => handleClickWatchMore()}
          strokeBlack
          hover
          className="m-auto block border-[2px] font-bold"
        >
          Xem thêm
        </Button>
      </div>
    </div>
  );
};
