import {
  homeOutline,
  homeSharp,
  personOutline,
  personSharp,
  starOutline,
  starSharp,
} from "ionicons/icons";
import { lazy } from "react";
import { aboutData } from "./AboutData";
import { introductionData } from "./IntroductionData";
import { featuredProjectsData } from "./FeaturedProjectsData";

import IntroductionArea from "../components/IntroductionArea";
const AboutArea = lazy(() => import("../components/AboutArea"));
const FeaturedProjectsArea = lazy(
  () => import("../components/FeaturedProjectsArea")
);

interface AppSection {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  divider?: boolean;
  info?: string;
  component: React.FC<any> | React.LazyExoticComponent<React.FC<any>>;
  props?: React.ComponentProps<any>;
}

export const appSections: AppSection[] = [
  {
    title: "Home",
    url: "/home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
    component: IntroductionArea,
    props: introductionData,
  },
  {
    title: "About",
    url: "/about",
    iosIcon: personOutline,
    mdIcon: personSharp,
    component: AboutArea,
    props: aboutData,
    divider: true,
  },
  {
    title: "Sponsored Projects",
    url: "/projects",
    iosIcon: starOutline,
    mdIcon: starSharp,
    component: FeaturedProjectsArea,
    props: featuredProjectsData,
    divider: true,
    info: "Projects paid as consultant or freelancer",
  },
];
