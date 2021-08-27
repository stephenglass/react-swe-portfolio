import {
  openOutline,
  openSharp,
  logoGithub,
  logoLinkedin,
} from "ionicons/icons";
import { MenuLink } from "../components/menu/Menu";
import { FooterLink } from "../components/footer-area/FooterArea";

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

export const footerLinks: FooterLink[] = [
  {
    url: "#",
    iosIcon: logoGithub,
    mdIcon: logoGithub,
  },
];
