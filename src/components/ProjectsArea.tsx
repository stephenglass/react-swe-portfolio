import {
  IonImg,
  IonGrid,
  IonCol,
  IonRow,
  IonChip,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonThumbnail,
  IonIcon,
} from "@ionic/react";
import { useMemo, useEffect, useState } from "react";
import { PlaceholderImg } from "../data/AppMeta";
import "./styles/ProjectsArea.scss";

interface DynamicLayout {
  minWidth?: number;
  columns: number;
}

interface ProjectTags {
  name: string;
  color?: string;
}

interface ProjectLinks {
  iosIcon: string;
  mdIcon: string;
  link: string;
}

interface ProjectsObject {
  img?: string;
  title: string;
  links?: ProjectLinks[];
  description: string;
  link?: string;
  tags?: ProjectTags[];
}

export interface ContainerProps {
  layout: DynamicLayout[];
  projects: ProjectsObject[];
}

const ProjectsArea: React.FC<ContainerProps> = (props) => {
  // sort layout breakpoints by descending order
  const layout = useMemo(
    () =>
      [...props.layout]
        .sort((a, b) => {
          return (a.minWidth ?? 0) - (b.minWidth ?? 0);
        })
        .reverse(),
    [props.layout]
  );
  // set default columns to minimum most breakpoint which is last element in array after sorted
  const [effectiveColumns, setEffectiveColumns] = useState<number>(
    layout[layout.length - 1].columns
  );

  useEffect(() => {
    layout.find((n) => {
      if (
        n.minWidth === undefined ||
        (n.minWidth !== undefined && window.innerWidth >= n.minWidth)
      ) {
        setEffectiveColumns(n.columns);
        return true;
      }
      return false;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout, window.innerWidth]);

  const tableize = (projects: ProjectsObject[], columns: number) => {
    var row: number = 0;
    var table: any[] = [];
    projects.forEach((project, index) => {
      if (table[row]) {
        table[row] = [...table[row], project];
      } else {
        table[row] = [project];
      }
      if (index % columns === columns - 1) {
        row++;
      }
    });
    return table;
  };

  const getMarginClass = (index: number, length: number) => {
    var classList = "project-card-middle";
    if (index > 0 && index === length - 1) {
      classList = "project-card-right";
    } else if (index === 0 && index === length - 1) {
      classList = "project-card-left project-card-right";
    } else if (index === 0) {
      classList = "project-card-left";
    }
    return classList;
  };

  // calculate layout in memo for efficiency in rerenders
  const projectsTable = useMemo(
    () => tableize(props.projects, effectiveColumns),
    [props.projects, effectiveColumns]
  );
  return (
    <div className="projects-container">
      <IonGrid>
        {projectsTable.map((projects, i) => (
          <IonRow key={i}>
            {projects.map((project: ProjectsObject, j: number) => (
              <IonCol
                key={j}
                size="12"
                size-sm={
                  projects.length > 1
                    ? (12 / effectiveColumns).toString()
                    : "12"
                }
                className="ion-no-padding"
              >
                <IonCard
                  className={
                    "project-card " +
                    getMarginClass(j, projectsTable[i].length) +
                    (i > 0 && i === projectsTable.length - 1
                      ? " bottom"
                      : " top")
                  }
                >
                  <IonCardHeader className="card-header">
                    <div className="header">
                      {project.tags &&
                        project.tags.map((tag, k) => (
                          <span className="skills" key={k}>
                            <IonChip key={k} color={tag.color ?? "primary"}>
                              {tag.name}
                            </IonChip>
                          </span>
                        ))}
                    </div>
                    <IonGrid className="ion-no-padding ion-padding-top">
                      <IonRow>
                        <IonCol
                          size="8"
                          className="ion-no-padding ion-padding-end"
                        >
                          <IonCardTitle>{project.title}</IonCardTitle>
                        </IonCol>
                        <IonCol size="4">
                          <IonThumbnail>
                            <IonImg
                              className={
                                projects.length === 1 ? "img-extended" : ""
                              }
                              src={project.img ?? PlaceholderImg}
                              alt="project image"
                            />
                          </IonThumbnail>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardHeader>

                  <IonCardContent className="content-container">
                    {project.description}
                    <div className="links">
                      {project.links &&
                        project.links.map((link: ProjectLinks, k: number) => (
                          <a key={k} href={link.link}>
                            <IonIcon ios={link.iosIcon} md={link.mdIcon} />
                          </a>
                        ))}
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        ))}
      </IonGrid>
    </div>
  );
};

export default ProjectsArea;
