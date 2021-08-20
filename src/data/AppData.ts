import {
  paperPlaneOutline,
  paperPlaneSharp,
  homeOutline,
  homeSharp,
  personOutline,
  personSharp,
} from "ionicons/icons";
import { lazy } from "react";
import { AppSection } from "../interfaces/AppSection";
import { aboutData } from "./AboutData";

import IntroductionArea from "../components/IntroductionArea";
const AboutArea = lazy(() => import("../components/AboutArea"));

export const appSections: AppSection[] = [
  {
    title: "Home",
    url: "/home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
    component: IntroductionArea,
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
  // {
  //   title: "About2",
  //   url: "/about2",
  //   iosIcon: paperPlaneOutline,
  //   mdIcon: paperPlaneSharp,
  //   component: AboutArea,
  //   divider: true,
  // },
  // {
  //   title: "About3",
  //   url: "/about3",
  //   iosIcon: paperPlaneOutline,
  //   mdIcon: paperPlaneSharp,
  //   component: AboutArea,
  //   divider: true,
  // },
  // {
  //   title: "About4",
  //   url: "/about4",
  //   iosIcon: paperPlaneOutline,
  //   mdIcon: paperPlaneSharp,
  //   component: AboutArea,
  //   divider: true,
  // },
  // {
  //   title: "About5",
  //   url: "/about5",
  //   iosIcon: paperPlaneOutline,
  //   mdIcon: paperPlaneSharp,
  //   component: AboutArea,
  //   divider: true,
  // },
];
