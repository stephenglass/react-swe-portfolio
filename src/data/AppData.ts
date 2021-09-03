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
  logoReact,
  logoPython,
  logoAngular,
  logoNodejs,
  logoDocker,
  calculatorOutline,
  gameControllerOutline,
  wifiOutline,
  terminalOutline,
  hardwareChipSharp,
  sunnyOutline,
  documentTextOutline,
  documentTextSharp,
} from "ionicons/icons";
import { customIcons } from "./AppMeta";
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
const ContactArea = lazy(
  () => import("../components/contact-area/ContactArea")
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
          {
            text: "Resume",
            link: "../docs/Resume_StephenGlass_V7.pdf",
            iosIcon: documentOutline,
            mdIcon: documentSharp,
          },
          {
            text: "Email",
            link: "mailto:sglass520@gmail.com",
            iosIcon: mailOutline,
            mdIcon: mailSharp,
          },
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
        text: `My journey into software began in 2008 creating online multiplayer video game modifications using a simple embedded scripting language called <a href="https://www.compuphase.com/pawn/pawnfeatures.htm" target="_blank" rel="noreferrer">PAWN</a>.

This led to web development exploration using the <a href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)" target="_blank" rel="noreferrer">LAMP</a> stack. My software experience has since grown tremendously to include modern frameworks in addition to embedded software, databases, cloud services, and more.

`,
        skills: [
          {
            text: "TypeScript",
            color: "danger",
            icon: customIcons.logoTypeScript,
          },
          {
            text: "React",
            color: "primary",
            icon: logoReact,
          },
          {
            text: "Angular",
            color: "danger",
            icon: logoAngular,
          },
          {
            text: "Express",
            color: "tertiary",
            icon: customIcons.logoExpress,
          },
          {
            text: "Node.js",
            color: "success",
            icon: logoNodejs,
          },
          {
            text: "Python",
            color: "warning",
            icon: logoPython,
          },
          {
            text: "PHP",
            color: "secondary",
            icon: customIcons.logoPhp,
          },
          {
            text: "Ionic",
            color: "warning",
            icon: customIcons.logoIonic,
          },
          {
            text: "Docker",
            color: "primary",
            icon: logoDocker,
          },
          {
            text: "SQL",
            color: "tertiary",
            icon: customIcons.logoMysql,
          },
        ],
        reverse: true,
        favoriteSkills: [
          { text: "React", img: "../assets/svg/icons8-react-color.svg" },
          { text: "Angular", img: "../assets/svg/icons8-angular-color.svg" },
          { text: "Ionic", img: "../assets/svg/icons8-ionic-color.svg" },
        ],
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
            img: "../assets/img/pain_management.png",
            description:
              "Developing a mobile application to be used by patients for recording pain, depression, and biometric data monitored by doctors.",
            tags: [
              {
                name: "TypeScript",
                color: "danger",
                icon: customIcons.logoTypeScript,
              },
              { name: "React", color: "primary", icon: logoReact },
              { name: "Ionic", color: "danger", icon: customIcons.logoIonic },
            ],
          },
          {
            title: "Mortality Tool App",
            description:
              "Cross-platform web application for ICU patient data collection and prediction of mortality using machine learning algorithms on cloud.",
            subtitle: "Cooper Medical School",
            img: "../assets/img/mortality.png",
            tags: [
              {
                name: "TypeScript",
                color: "danger",
                icon: customIcons.logoTypeScript,
              },
              { name: "React", color: "primary", icon: logoReact },
              { name: "Ionic", color: "danger", icon: customIcons.logoIonic },
              { name: "Python", color: "warning", icon: logoPython },
              { name: "PHP", color: "secondary", icon: customIcons.logoPhp },
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
            description: `Modernized critical on-premises applications by converting
                      to Angular and Microsoft Azure cloud backends.`,
          },
          {
            subtitle: "2019",
            title: "Lockheed Martin",
            undertitle: "Member of Engineering Staff",
            description: `Developed C++ software for radar subarrays and created support
                      tools using Python. Deployment on-site.`,
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
            description:
              "Web app to calculate the value of a resistor from color codes.",
            tags: [
              {
                name: "TypeScript",
                color: "danger",
                icon: customIcons.logoTypeScript,
              },
              { name: "React", color: "primary", icon: logoReact },
              { name: "Ionic", color: "danger", icon: customIcons.logoIonic },
            ],
            links: [
              { link: "#", iosIcon: logoGithub, mdIcon: logoGithub },
              { link: "#", iosIcon: folderOutline, mdIcon: folderSharp },
            ],
            imgType: "icon",
            img: calculatorOutline,
            ribbon: {
              color: "white",
              background: "var(--ion-color-danger)",
              contentType: "text",
              content: "New",
            },
          },
          {
            title: "Software Portfolio",
            description:
              "Dynamic online portfolio built using React and Ionic.",
            tags: [
              {
                name: "TypeScript",
                color: "danger",
                icon: customIcons.logoTypeScript,
              },
              { name: "React", color: "primary", icon: logoReact },
              { name: "Ionic", color: "danger", icon: customIcons.logoIonic },
            ],
            imgType: "icon",
            img: personOutline,
            links: [{ link: "#", iosIcon: logoGithub, mdIcon: logoGithub }],
            ribbon: {
              color: "white",
              background: "var(--ion-color-primary)",
              contentType: "icon",
              content: starOutline,
            },
          },
          {
            title: "MSP430 Asteroids",
            description: "Asteroids terminal game for MSP430 micro-controller.",
            tags: [
              { name: "C++", color: "warning", icon: customIcons.logoCpp },
              { name: "Embedded", color: "success", icon: hardwareChipSharp },
            ],
            imgType: "icon",
            img: terminalOutline,
            links: [
              {
                link: "https://github.com/sglass520/embedded-asteroidsGame",
                iosIcon: logoGithub,
                mdIcon: logoGithub,
              },
            ],
          },
          {
            title: "ESP8266 Line Sensor",
            description:
              "Embedded system to detect length of a line and view on web app.",
            tags: [
              { name: "C++", color: "warning", icon: customIcons.logoCpp },
              { name: "PHP", color: "tertiary", icon: customIcons.logoPhp },
              { name: "MySQL", color: "danger", icon: customIcons.logoMysql },
              { name: "Embedded", color: "success", icon: hardwareChipSharp },
            ],
            imgType: "icon",
            img: wifiOutline,
            links: [
              {
                link: "https://github.com/sglass520/msp430-queueCounter",
                iosIcon: logoGithub,
                mdIcon: logoGithub,
              },
              {
                link: "#",
                iosIcon: documentTextOutline,
                mdIcon: documentTextSharp,
              },
            ],
          },
          {
            title: "Socket.Io Game",
            description:
              "Real-time multiplayer browser game using web sockets.",
            tags: [
              {
                name: "Express",
                color: "secondary",
                icon: customIcons.logoExpress,
              },
              { name: "React", color: "primary", icon: logoReact },
              {
                name: "TypeScript",
                color: "danger",
                icon: customIcons.logoTypeScript,
              },
            ],
            imgType: "icon",
            img: gameControllerOutline,
            links: [
              {
                link: "https://github.com/sglass520/react-socket-demo",
                iosIcon: logoGithub,
                mdIcon: logoGithub,
              },
            ],
          },
          {
            title: "Audio Equalizer",
            description:
              "Circuit for a 3-band audio equalizer using analog components.",
            tags: [
              { name: "Circuit", color: "success", icon: hardwareChipSharp },
            ],
            imgType: "icon",
            img: statsChartOutline,
            links: [
              {
                link: "#",
                iosIcon: documentTextOutline,
                mdIcon: documentTextSharp,
              },
            ],
          },
          {
            title: "Solar Panel Control",
            description: "Two-axis solar panel positioning embedded system.",
            tags: [
              { name: "C++", color: "warning", icon: customIcons.logoCpp },
              { name: "Embedded", color: "success", icon: hardwareChipSharp },
            ],
            imgType: "icon",
            img: sunnyOutline,
            links: [
              {
                link: "../docs/snc-final-project.pdf",
                iosIcon: documentTextOutline,
                mdIcon: documentTextSharp,
              },
            ],
          },
        ],
      }),
  },
  {
    title: "Contact",
    url: "/contact",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
    divider: true,
    render: () => React.createElement(ContactArea),
  },
];
