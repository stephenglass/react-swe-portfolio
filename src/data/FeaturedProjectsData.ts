import { ContainerProps as FeaturedProjects } from "../components/FeaturedProjectsArea";

export const featuredProjectsData: FeaturedProjects = {
  columns: 2,
  projects: [
    {
      title: "Pain Manangement App",
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
      tags: [
        { name: "TypeScript", color: "danger" },
        { name: "React", color: "primary" },
        { name: "Ionic", color: "danger" },
        { name: "PHP", color: "secondary" },
        { name: "PHP", color: "secondary" },
      ],
    },
  ],
};
