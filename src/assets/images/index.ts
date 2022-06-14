import banner2 from "./img-home/BannerHome2.jpg";
import banner3 from "./img-home/BannerHome3.jpg";
import banner4 from "./img-home/BannerHome4.jpg";

import movieTest from "./img-movie/DemoMovie.jpg";
import movieTest2 from "./img-movie/DemoMovie2.jpg";
import movieTest3 from "./img-movie/DemoMovie3.jpg";
import movieTest4 from "./img-movie/DemoMovie4.jpg";
import movieTest5 from "./img-movie/DemoMovie5.jpg";
import movieTest6 from "./img-movie/DemoMovie6.jpg";

export const imgsHome = {
  banner2,
  banner3,
  banner4,
};

export const imgsMovie = {
  movieTest,
  movieTest2,
  movieTest3,
  movieTest4,
  movieTest5,
  movieTest6,
};

export const getBannerHomeList = () => {
  return Object.keys(imgsHome).map((key) => imgsHome[key]);
};

export const geIMovieTestList = () => {
  return Object.keys(imgsMovie).map((key) => imgsMovie[key]);
};
