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
} from "@ionic/react";
import { useMemo } from "react";
import { PlaceholderImg } from "../data/AppMeta";
import "./styles/FeaturedProjectsArea.css";

interface FeaturedProjectTags {
  name: string;
  color?: string;
}

interface FeaturedProjectsObject {
  img?: string;
  title: string;
  description: string;
  link?: string;
  tags?: FeaturedProjectTags[];
}

export interface ContainerProps {
  columns: number;
  projects: FeaturedProjectsObject[];
}

const FeaturedProjectsArea: React.FC<ContainerProps> = (props) => {
  const tableize = (projects: FeaturedProjectsObject[], columns: number) => {
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

  // calculate layout in memo for efficiency in rerenders
  const projectsTable = useMemo(
    () => tableize(props.projects, props.columns),
    [props.projects, props.columns]
  );
  return (
    <div className="projects-container">
      <IonGrid>
        {projectsTable.map((projects, i) => (
          <IonRow key={i}>
            {projects.map((project: FeaturedProjectsObject, j: number) => (
              <IonCol
                key={j}
                size="12"
                size-sm={
                  projects.length > 1 ? (12 / props.columns).toString() : "12"
                }
                className="ion-no-padding"
              >
                <IonCard
                  className="project-card project-card-left"
                  href={project.link ?? ""}
                >
                  <IonImg
                    src={project.img ?? PlaceholderImg}
                    alt="project image"
                  />
                  <IonCardHeader>
                    {project.tags &&
                      project.tags.map((tag, k) => (
                        <IonChip key={k} color={tag.color ?? "primary"}>
                          {tag.name}
                        </IonChip>
                      ))}
                    <IonCardTitle>{project.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>{project.description}</IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        ))}
      </IonGrid>
      {/* {props.projects.map((project, index) => {
          <IonCol size="12" size-sm="6" className="ion-no-padding">
            <IonCard
              className="project-card project-card-left"
              href={project.link ?? ""}
            >
              <IonImg src={project.img ?? PlaceholderImg} alt="project image" />
              <IonCardHeader>
                {project.tags &&
                  project.tags.map((tag, index) => (
                    <IonChip color={tag.color ?? "primary"}>{tag.name}</IonChip>
                  ))}
                <IonCardTitle>{project.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{project.description}</IonCardContent>
            </IonCard>
          </IonCol>;
        })} */}
      {/* {props.projects.length > 0 ? (
            <>
              {props.projects.map((project, index) => (
                        <IonRow>
                  <IonCol size="12" size-sm="6" className="ion-no-padding">
                    <IonCard
                      className="project-card project-card-left"
                      href={project.link ?? ""}
                    >
                      <IonImg
                        src={project.img ?? PlaceholderImg}
                        alt="project image"
                      />
                      <IonCardHeader>
                        {project.tags &&
                          project.tags.map((tag, index) => (
                            <IonChip color={tag.color ?? "primary"}>{tag.name}</IonChip>
                          ))}
                        <IonCardTitle>{project.title}</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        {project.description}
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size="12" size-sm="6" className="ion-no-padding">
                    <IonCard
                      color="light"
                      className="project-card project-card-right"
                    >
                      <IonImg
                        src="../assets/img/placeholder.jpg"
                        alt="project image"
                      />
                      <IonCardHeader>
                        <IonChip color="warning">Hello</IonChip>
                        <IonCardTitle>Another project</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        Hello hello hello hello hello hello
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              ))}
            </>
          ) : null}

          {/* {props.projects.length > 0 ? (
            <>
              {props.projects.map((project, index) => (
                        <IonRow>
                  <IonCol size="12" size-sm="6" className="ion-no-padding">
                    <IonCard
                      className="project-card project-card-left"
                      href={project.link ?? ""}
                    >
                      <IonImg
                        src={project.img ?? PlaceholderImg}
                        alt="project image"
                      />
                      <IonCardHeader>
                        {project.tags &&
                          project.tags.map((tag, index) => (
                            <IonChip color={tag.color ?? "primary"}>{tag.name}</IonChip>
                          ))}
                        <IonCardTitle>{project.title}</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        {project.description}
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size="12" size-sm="6" className="ion-no-padding">
                    <IonCard
                      color="light"
                      className="project-card project-card-right"
                    >
                      <IonImg
                        src="../assets/img/placeholder.jpg"
                        alt="project image"
                      />
                      <IonCardHeader>
                        <IonChip color="warning">Hello</IonChip>
                        <IonCardTitle>Another project</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        Hello hello hello hello hello hello
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              ))}
            </>
          ) : null} */}
      {/* <IonCol size="12" size-sm="6" className="ion-no-padding">
            <IonCard className="project-card project-card-left" href="#">
              <IonImg src="../assets/img/placeholder.jpg" alt="project image" />
              <IonCardHeader>
                <IonChip color="primary">Hello</IonChip>
                <IonCardTitle>Another project</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Hello hello hello hello hello hello
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="12" size-sm="6" className="ion-no-padding">
            <IonCard color="light" className="project-card project-card-right">
              <IonImg src="../assets/img/placeholder.jpg" alt="project image" />
              <IonCardHeader>
                <IonChip color="warning">Hello</IonChip>
                <IonCardTitle>Another project</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Hello hello hello hello hello hello
              </IonCardContent>
            </IonCard>
          </IonCol> */}
    </div>
  );
};

export default FeaturedProjectsArea;
