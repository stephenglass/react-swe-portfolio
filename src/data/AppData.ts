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
  documentOutline,
  documentSharp,
  mailOutline,
  mailSharp,
} from "ionicons/icons";
import React, { lazy } from "react";

import IntroductionArea from "../components/introduction-area/IntroductionArea";

const AboutArea = lazy(() => import("../components/about-area/AboutArea"));
const FeaturedProjectsArea = lazy(
  () => import("../components/featured-projects-area/FeaturedProjectsArea")
);
const ProjectsArea = lazy(
  () => import("../components/projects-area/ProjectsArea")
);
const TimelineArea = lazy(
  () => import("../components/timeline-area/TimelineArea")
);

interface AppSection {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  divider?: boolean;
  info?: string;
  render(): React.ReactElement;
}

export const appSections: AppSection[] = [
  {
    title: "Home",
    url: "/home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
    render: () =>
      React.createElement(IntroductionArea, {
        name: "Stephen Glass.",
        subtitle: "Software Engineer at AT&T.",
        description:
          "I build web apps and more using latest technologies. Check out what I've been working on.",
        buttons: [
          { text: "Resume", iosIcon: documentOutline, mdIcon: documentSharp },
          { text: "Email", iosIcon: mailOutline, mdIcon: mailSharp },
        ],
      }),
  },
  {
    title: "About",
    url: "/about",
    iosIcon: personOutline,
    mdIcon: personSharp,
    divider: true,
    render: () =>
      React.createElement(AboutArea, {
        img: "../assets/img/sg8717.png",
        text: `My journey into software began in 2008 creating online multiplayer video game modifications using a simple embedded scripting language called <a href="#">PAWN</a>.

This led to web development exploration using the <a href="#">LAMP</a> stack. My software experience has since grown tremendously to include modern frameworks in addition to embedded software, databases, and more.

`,
        skills: [
          {
            text: "TypeScript",
            color: "danger",
          },
          {
            text: "React",
            color: "primary",
          },
          {
            text: "Angular",
            color: "secondary",
          },
          {
            text: "Express",
            color: "tertiary",
          },
          {
            text: "JavaScript",
            color: "success",
          },
          {
            text: "Python",
            color: "warning",
          },
          {
            text: "PHP",
            color: "secondary",
          },
          {
            text: "Ionic",
            color: "danger",
          },
          {
            text: "Flask",
            color: "primary",
          },
          {
            text: "SQL",
            color: "tertiary",
          },
        ],
        reverse: true,
      }),
  },
  {
    title: "Sponsored Projects",
    url: "/consulting",
    iosIcon: starOutline,
    mdIcon: starSharp,
    divider: true,
    info: "Projects created professionally as consultant or freelancer",
    render: () =>
      React.createElement(FeaturedProjectsArea, {
        columns: 2,
        projects: [
          {
            title: "Pain Manangement App",
            subtitle: "Rowan University",
            description: "Foobar",
            tags: [
              { name: "TypeScript", color: "danger" },
              { name: "React", color: "primary" },
              { name: "Ionic", color: "danger" },
            ],
          },
          {
            title: "Mortality Tool App",
            description: "Foobar",
            subtitle: "Cooper Medical School",
            tags: [
              { name: "TypeScript", color: "danger" },
              { name: "React", color: "primary" },
              { name: "Ionic", color: "danger" },
              { name: "Python", color: "warning" },
              { name: "PHP", color: "secondary" },
            ],
          },
        ],
      }),
  },
  {
    title: "Experience",
    url: "/experience",
    iosIcon: statsChartOutline,
    mdIcon: statsChartSharp,
    divider: true,
    render: () =>
      React.createElement(TimelineArea, {
        alternate: true,
        items: [
          {
            subtitle: "2021",
            title: "AT&T",
            undertitle: "Sr. Specialist Software Engineer",
            description: `Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.`,
          },
          {
            subtitle: "2019",
            title: "Lockheed Martin",
            undertitle: "Member of Engineering Staff",
            description: `Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.`,
          },
        ],
      }),
  },
  {
    title: "Projects",
    url: "/projects",
    iosIcon: folderOutline,
    mdIcon: folderSharp,
    divider: true,
    render: () =>
      React.createElement(ProjectsArea, {
        layout: [
          { columns: 2 }, // fallback column size
          { minWidth: 576, columns: 2 },
          { minWidth: 768, columns: 3 },
        ],
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
            title: "Socket.Io Game",
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
      }),
  },
];
