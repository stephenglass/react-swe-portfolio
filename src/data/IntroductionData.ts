import { ContainerProps as IntroductionProps } from "../components/IntroductionArea";
import {
  documentOutline,
  documentSharp,
  mailOutline,
  mailSharp,
} from "ionicons/icons";

export const introductionData: IntroductionProps = {
  name: "Stephen Glass.",
  subtitle: "Software Engineer @ AT&T",
  description:
    "I build web apps and more using latest technologies. Check out what I've been working on.",
  buttons: [
    { text: "Resume", iosIcon: documentOutline, mdIcon: documentSharp },
    { text: "Email", iosIcon: mailOutline, mdIcon: mailSharp },
  ],
};
