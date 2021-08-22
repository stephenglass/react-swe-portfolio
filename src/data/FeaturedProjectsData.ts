import { ContainerProps as FeaturedProjects } from "../components/FeaturedProjectsArea";

export const featuredProjectsData: FeaturedProjects = {
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
};
