import { IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/sanjivrajah",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sanjivrajah-m-3b285b209/",
    icon: FiLinkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/sanjivrajah",
    icon: FiTwitter,
  },
  {
    name: "Email",
    url: "mailto:sanjiv@sanjivrajah.com",
    icon: FiMail,
  },
];
