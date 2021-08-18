import {
  paperPlaneOutline,
  paperPlaneSharp,
  homeOutline,
  homeSharp,
  personOutline,
  personSharp,
} from "ionicons/icons";
import React, { lazy } from "react";

import IntroductionArea from "../components/IntroductionArea";
const AboutArea = lazy(() => import("../components/AboutArea"));

interface AppSection {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  divider?: boolean;
  component: React.FC;
}

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
    divider: true,
  },
  {
    title: "About2",
    url: "/about2",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
    component: AboutArea,
    divider: true,
  },
  {
    title: "About3",
    url: "/about3",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
    component: AboutArea,
    divider: true,
  },
  {
    title: "About4",
    url: "/about4",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
    component: AboutArea,
    divider: true,
  },
  {
    title: "About5",
    url: "/about5",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
    component: AboutArea,
    divider: true,
  },
];
