import {
  openOutline,
  openSharp,
  logoGithub,
  logoLinkedin,
} from "ionicons/icons";

interface MenuLink {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

export const menuLinks: MenuLink[] = [
  {
    title: "Source Code",
    url: "/",
    iosIcon: openOutline,
    mdIcon: openSharp,
  },
  {
    title: "Github",
    url: "https://github.com/sglass520",
    iosIcon: logoGithub,
    mdIcon: logoGithub,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/stephen-glass/",
    iosIcon: logoLinkedin,
    mdIcon: logoLinkedin,
  },
];
