import { AboutSkills } from "../interfaces/AboutSkills";
import { ContainerProps as AboutProps } from "../components/AboutArea";

const aboutText: string = `My journey into software began in 2008 creating online multiplayer video game modifications using a simple embedded scripting language called <a href="#">PAWN</a>.

This led to web development exploration using the <a href="#">LAMP</a> stack. My software experience has since grown tremendously to include modern frameworks in addition to embedded software, databases, and more.

`;

const aboutSkills: AboutSkills[] = [
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
  //   {
  //     text: "Google Cloud",
  //     color: "warning",
  //   },
  //   {
  //     text: "Microsoft Azure",
  //     color: "success",
  //   },
];

export const aboutData: AboutProps = {
  img: "../assets/img/sg8717.png",
  text: aboutText,
  skills: aboutSkills,
  reverse: true,
};
