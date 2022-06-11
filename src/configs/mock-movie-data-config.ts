import { imgsMovie } from "@/assets/images";
import { TMockDataMovies } from "@/types";

const onplaying: TMockDataMovies[] = [
  {
    id: "MV01",
    nameVi: "Quá nhanh quá nguy hiểm",
    nameEn: "TestMovieEn",
    thumb: imgsMovie.movieTest,
    datePlay: "27/08/2022",
    time: 119,
  },
  {
    id: "MV02",
    nameVi: "Biệt đội báo thù: End game",
    nameEn: "TestMovieEn",
    thumb: imgsMovie.movieTest2,
    datePlay: "27/08/2022",
    time: 119,
  },
  {
    id: "MV03",
    nameVi: "Thần Hercules",
    nameEn: "TestMovieEn",
    thumb: imgsMovie.movieTest3,
    datePlay: "27/08/2022",
    time: 119,
  },
  {
    id: "MV04",
    nameVi: "Vali tình yêu",
    nameEn: "TestMovieEn",
    thumb: imgsMovie.movieTest4,
    datePlay: "27/08/2022",
    time: 119,
  },
  {
    id: "MV05",
    nameVi: "Quỷ yêu ma gì đâu không",
    nameEn: "TestMovieEn",
    thumb: imgsMovie.movieTest5,
    datePlay: "27/08/2022",
    time: 119,
  },
  {
    id: "MV06",
    nameVi: "Sinh vật tuyệt diệu",
    nameEn: "TestMovieEn",
    thumb: imgsMovie.movieTest6,
    datePlay: "27/08/2022",
    time: 119,
  },
];

const incoming: TMockDataMovies[] = [
  {
    id: "MV01",
    nameVi: "Quá nhanh quá nguy hiểm",
    nameEn: "TestMovieEn",
    thumb: imgsMovie.movieTest,
    datePlay: "27/08/2022",
    time: 119,
  },
  {
    id: "MV03",
    nameVi: "Thần Hercules",
    nameEn: "TestMovieEn",
    thumb: imgsMovie.movieTest3,
    datePlay: "27/08/2022",
    time: 119,
  },
  {
    id: "MV02",
    nameVi: "Biệt đội báo thù: End game",
    nameEn: "TestMovieEn",
    thumb: imgsMovie.movieTest2,
    datePlay: "27/08/2022",
    time: 119,
  },
  {
    id: "MV05",
    nameVi: "Quỷ yêu ma gì đâu không",
    nameEn: "TestMovieEn",
    thumb: imgsMovie.movieTest5,
    datePlay: "27/08/2022",
    time: 119,
  },
  {
    id: "MV04",
    nameVi: "Vali tình yêu",
    nameEn: "TestMovieEn",
    thumb: imgsMovie.movieTest4,
    datePlay: "27/08/2022",
    time: 119,
  },
  {
    id: "MV06",
    nameVi: "Sinh vật tuyệt diệu",
    nameEn: "TestMovieEn",
    thumb: imgsMovie.movieTest6,
    datePlay: "27/08/2022",
    time: 119,
  },
];

export const mockDataMoviesConfig = {
  onplaying,
  incoming,
  allMovies: [...onplaying, ...incoming],
};
