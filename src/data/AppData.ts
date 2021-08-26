import {
  homeOutline,
  homeSharp,
  personOutline,
  personSharp,
  starOutline,
  starSharp,
  statsChartOutline,
  statsChartSharp,
  folderOutline,
  folderSharp,
  logoGithub,
} from "ionicons/icons";
import { lazy } from "react";
import { aboutData } from "./AboutData";
import { introductionData } from "./IntroductionData";
import { featuredProjectsData } from "./FeaturedProjectsData";
import { timelineData } from "./TimelineData";

import IntroductionArea from "../components/IntroductionArea";
const AboutArea = lazy(() => import("../components/AboutArea"));
const FeaturedProjectsArea = lazy(
  () => import("../components/FeaturedProjectsArea")
);
const ProjectsArea = lazy(() => import("../components/ProjectsArea"));
const TimelineArea = lazy(() => import("../components/TimelineArea"));

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
    url: "/consulting",
    iosIcon: starOutline,
    mdIcon: starSharp,
    component: FeaturedProjectsArea,
    props: featuredProjectsData,
    divider: true,
    info: "Projects created professionally as consultant or freelancer",
  },
  {
    title: "Experience",
    url: "/experience",
    iosIcon: statsChartOutline,
    mdIcon: statsChartSharp,
    component: TimelineArea,
    props: timelineData,
    divider: true,
  },
  {
    title: "Projects",
    url: "/projects",
    iosIcon: folderOutline,
    mdIcon: folderSharp,
    component: ProjectsArea,
    props: {
      columns: 3,
      projects: [
        {
          title: "Resistor Calculator",
          description: "Foobar",
          tags: [
            { name: "TypeScript", color: "danger" },
            { name: "React", color: "primary" },
            { name: "Ionic", color: "danger" },
          ],
          links: [
            { link: "#", iosIcon: logoGithub, mdIcon: logoGithub },
            { link: "#", iosIcon: folderOutline, mdIcon: folderSharp },
          ],
        },
        {
          title: "Software Portfolio",
          description: "Foobar",
          tags: [
            { name: "TypeScript", color: "danger" },
            { name: "React", color: "primary" },
            { name: "Ionic", color: "danger" },
            { name: "Python", color: "warning" },
            { name: "PHP", color: "secondary" },
          ],
          links: [{ link: "#", iosIcon: logoGithub, mdIcon: logoGithub }],
        },
        {
          title: "MSP430 Asteroids",
          description: "Foobar",
          tags: [
            { name: "TypeScript", color: "danger" },
            { name: "React", color: "primary" },
            { name: "Ionic", color: "danger" },
            { name: "Python", color: "warning" },
            { name: "PHP", color: "secondary" },
          ],
          links: [{ link: "#", iosIcon: logoGithub, mdIcon: logoGithub }],
        },
        {
          title: "ESP8266 Line Sensor",
          description: "Foobar",
          tags: [
            { name: "TypeScript", color: "danger" },
            { name: "React", color: "primary" },
            { name: "Ionic", color: "danger" },
            { name: "Python", color: "warning" },
            { name: "PHP", color: "secondary" },
          ],
          links: [{ link: "#", iosIcon: logoGithub, mdIcon: logoGithub }],
        },
        {
          title: "UART RGB LEDs",
          description: "Foobar",
          tags: [
            { name: "TypeScript", color: "danger" },
            { name: "React", color: "primary" },
            { name: "Ionic", color: "danger" },
            { name: "Python", color: "warning" },
            { name: "PHP", color: "secondary" },
          ],
          links: [{ link: "#", iosIcon: logoGithub, mdIcon: logoGithub }],
        },
        {
          title: "Audio Equalizer",
          description: "Foobar",
          tags: [
            { name: "TypeScript", color: "danger" },
            { name: "React", color: "primary" },
            { name: "Ionic", color: "danger" },
            { name: "Python", color: "warning" },
            { name: "PHP", color: "secondary" },
          ],
          links: [{ link: "#", iosIcon: logoGithub, mdIcon: logoGithub }],
        },
      ],
    },
    divider: true,
  },
];
