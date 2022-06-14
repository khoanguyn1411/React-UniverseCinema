import { Icon } from "@/assets/icons";
import { configs } from "@/configs";
import { updateActivePage } from "@/features";
import { useAppDispatch } from "@/hooks";
import React from "react";
import { useNavigate } from "react-router-dom";

type TContactInfo = {
  title: string;
  content: string;
};

type TTypePath = {
  internal: string;
  external: string;
};

export const Footer = () => {
  const navigateLinks = configs.linksFooter;
  const socialMedias = configs.socialMedia;

  const typePath: TTypePath = {
    internal: "internal",
    external: "external",
  };

  const contactInfo: TContactInfo[] = [
    {
      title: "Email",
      content:
        "Số 669 Quốc lộ 1, khu phố 3, phường Linh Xuân, quận Thủ Đức, Thành phố Hồ Chí Minh ",
    },
    {
      title: "Email",
      content: "support@universecinema.com",
    },
    {
      title: "Hotline",
      content: "0123456789",
    },
  ];

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSwitchPage = (path: string, type: string) => {
    if (type === typePath.internal) {
      navigate(path);
      dispatch(updateActivePage());
    } else {
      window.open(path, "_blank");
    }
  };
  return (
    <div>
      <div className="h-[1rem] bg-orange" />
      <div className="bg-black text-white  ">
        <div className="wrapper py-[3.5rem]">
          <div className="flex">
            {navigateLinks.map((parent, index) => (
              <div key={index} className="flex flex-col flex-1 pr-[1.5rem]">
                <h1 className="font-bold text-s18 mb-[1rem]">{parent.title}</h1>
                {parent.children.map((child, indexChild) => (
                  <div className="flex my-[0.3rem]" key={indexChild}>
                    <div className="mt-[0.5rem] min-w-[1rem] h-[1rem]  bg-orange rounded-default mr-[1.3rem]" />
                    <h1
                      className="hover:font-bold cursor-pointer select-none transition-all hover:transition-all"
                      onClick={() =>
                        handleSwitchPage(child.to, typePath.internal)
                      }
                    >
                      {child.title}
                    </h1>
                  </div>
                ))}
              </div>
            ))}

            <div className="flex-1">
              <h1 className="font-bold text-s18 mb-[1rem]">
                Kết nối với chúng tôi
              </h1>
              {socialMedias.persoanl.map((media, index) => (
                <span
                  key={index}
                  onClick={() => {
                    handleSwitchPage(media.to, typePath.external);
                  }}
                >
                  <Icon
                    icon={media.icon}
                    className="text-[3rem] mr-[1.8rem] cursor-pointer transition-all hover:text-orange hover:transition-all"
                  />
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white w-full h-[0.2rem] my-[2rem]" />
          <div className="flex">
            <div className="flex flex-col flex-[2]">
              <h1 className="font-bold text-s18 mb-[1rem]">
                Thông tin liên hệ
              </h1>
              {contactInfo.map((contactType, indexType) => (
                <div className="flex my-[0.3rem]" key={indexType}>
                  <div className="mt-[0.5rem] min-w-[1rem] h-[1rem]  bg-orange rounded-default mr-[1.3rem]" />
                  <h1 className="font-bold">
                    {contactType.title}:{" "}
                    <span className="font-normal ml-[0.3rem]">
                      {contactType.content}
                    </span>
                  </h1>
                </div>
              ))}
            </div>
            <div className="flex-1">Logo</div>
          </div>
        </div>
      </div>
    </div>
  );
};
