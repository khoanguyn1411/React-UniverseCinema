import { Icon, icSearch } from "@/assets/icons";
import { configs } from "@/configs";
import { updateActivePage } from "@/features";
import { useAppDispatch } from "@/hooks";
import { Link, useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSwitchPage = (path: string) => {
    navigate(path);
    dispatch(updateActivePage());
  };
  return (
    <div className="bg-black text-white select-none">
      <div className="wrapper h-[6rem] flex flex-row justify-between items-center">
        <div className="flex-1 flex items-center h-[50%]">LOGO</div>
        <div className="flex-[1.5] relative rounded-[0.35rem] h-[60%] border-[0.15rem] border-transparent focus-within:border-orange focus-within:border-[0.15rem]">
          <input
            type="search"
            className={`w-full rounded-default h-full p-[1rem] pr-[5.5rem] text-black outline-none`}
            placeholder="Tìm tên phim, diễn viên ..."
          />
          <div className="absolute rounded-tr-default rounded-br-default flex justify-center items-center right-0 w-[5rem] cursor-pointer top-0 bg-orange h-full">
            <Icon icon={icSearch} className="text-s16 text-black" />
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <h1
            className="font-bold hover:text-orange transition-all cursor-pointer"
            onClick={() => handleSwitchPage(configs.routes.aboutUs)}
          >
            Về chúng tôi
          </h1>
          <div className="ml-[3rem] font-bold">
            <span className="cursor-pointer">EN</span>
            <span>/</span>
            <span className="cursor-pointer text-orange">VI</span>
          </div>
        </div>
      </div>
    </div>
  );
};
