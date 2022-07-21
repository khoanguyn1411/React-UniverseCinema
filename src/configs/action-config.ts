import { icHeart, icList, icStar, icWatchlist } from "@/assets/icons";

const handleAddToList = (movie) => {};
const handleMarkAsFavorite = (movie) => {};
const handleAddToWatchlist = (movie) => {};
const handleRate = (movie) => {};

export const actionConfig = [
  {
    title: "Add to list",
    icon: icList,
    onClick: handleAddToList,
  },
  {
    title: "Mark as favorite",
    icon: icHeart,
    onClick: handleMarkAsFavorite,
  },
  {
    title: "Add to your wacthlist",
    icon: icWatchlist,
    onClick: handleAddToWatchlist,
  },
  {
    title: "Rate it",
    icon: icStar,
    onClick: handleRate,
  },
];
