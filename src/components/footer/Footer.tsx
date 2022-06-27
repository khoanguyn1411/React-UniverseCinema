import { Icon } from "@/assets/icons";
import { imgFooterBg, imgLogoLight } from "@/assets/images";
import { configs } from "@/configs";

export const Footer = () => {
  const handleSwitchPage = (path: string) => {
    window.open(path, "_blank");
  };
  return (
    <>
      <div className="h-[0.5rem] w-full bg-orange"></div>
      <div
        className="h-[30rem]"
        style={{ backgroundImage: `url(${imgFooterBg})` }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <img src={imgLogoLight} alt="imgLogoLight" />
          <h1 className="text-white font-bold mt-[1rem] text-s20">
            A movie review website
          </h1>
          <h1 className="text-white mt-[0.2rem]">Made by Khoa Nguyen</h1>
          <div className="flex text-white mt-[1rem] ">
            {configs.socialMedia.persoanl.map((item, index) => {
              return (
                <Icon
                  key={index}
                  className={`text-[2.5rem] cursor-pointer hover:text-orange transition-all ${
                    index === 1 && "mx-5"
                  }`}
                  onClick={() => handleSwitchPage(item.to)}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
