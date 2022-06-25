import { configs } from "@/configs";
import { updateActivePage } from "@/features";
import { useAppDispatch } from "@/hooks";
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
  return <div></div>;
};
