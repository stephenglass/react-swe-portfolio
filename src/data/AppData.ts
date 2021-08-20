import {
  paperPlaneOutline,
  paperPlaneSharp,
  homeOutline,
  homeSharp,
  personOutline,
  personSharp,
} from "ionicons/icons";
import { lazy } from "react";
import { aboutData } from "./AboutData";
import { introductionData } from "./IntroductionData";

import IntroductionArea from "../components/IntroductionArea";
const AboutArea = lazy(() => import("../components/AboutArea"));

interface AppSection {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  divider?: boolean;
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
];
