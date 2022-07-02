import { imgLogoTab } from "@/assets/images";

export const UserBar = () => {
  const isAuth = true;
  return (
    <>
      {isAuth && (
        <div className="">
          <div
            className="w-[3.2rem] cursor-pointer h-[3.2rem] bg-center bg-cover bg-no-repeat rounded-[999px]"
            style={{ backgroundImage: `url(${imgLogoTab})` }}
          ></div>
        </div>
      )}

      {!isAuth && (
        <div className="font-bold cursor-pointer transition-all hover:text-orange hover:transition-all">
          Đăng nhập
        </div>
      )}
    </>
  );
};
