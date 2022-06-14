import {
  icFacebook,
  icInstagram,
  icYoutube,
  icLink,
  icTwitter,
} from "@/assets/icons";
import { ISocialMedia } from "@/types";

const socialMediaPersonalConfig: ISocialMedia[] = [
  {
    title: "Facebook",
    icon: icFacebook,
    to: "https://www.facebook.com/khoa.nguynn1411/",
  },
  {
    title: "Youtube",
    icon: icYoutube,
    to: "https://www.facebook.com/khoa.nguynn1411/",
  },
  {
    title: "Instagram",
    icon: icInstagram,
    to: "https://www.facebook.com/khoa.nguynn1411/",
  },
];

const socialMediaFilmConfig: ISocialMedia[] = [
  {
    title: "Facebook",
    icon: icFacebook,
  },
  {
    title: "Twitter",
    icon: icTwitter,
  },
  {
    title: "Instagram",
    icon: icInstagram,
  },
  {
    title: "Homepage",
    icon: icLink,
  },
];

export const socialMediaConfig = {
  film: socialMediaFilmConfig,
  persoanl: socialMediaPersonalConfig,
};
