import {
  icFacebook,
  icInstagram,
  icYoutube,
  icLink,
  icTwitter,
  icGithub,
  icLinkedIn,
} from "@/assets/icons";
import { ISocialMedia } from "@/types";

const socialMediaPersonalConfig: ISocialMedia[] = [
  {
    title: "Facebook",
    icon: icFacebook,
    to: "https://www.facebook.com/khoa.nguynn1411/",
  },
  {
    title: "Github",
    icon: icGithub,
    to: "https://github.com/khoanguyn1411",
  },
  {
    title: "LinkedIn",
    icon: icLinkedIn,
    to: "https://www.linkedin.com/in/khoanguyn1411/",
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
