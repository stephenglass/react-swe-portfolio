import {
  IonAvatar,
  IonImg,
  IonGrid,
  IonCol,
  IonRow,
  IonChip,
} from "@ionic/react";
import "./styles/ProjectsArea.css";

export interface ContainerProps {}

const ProjectsArea: React.FC<ContainerProps> = (props) => {
  return (
    <div className="projects-container">
      <IonGrid>
        <IonRow>
          <IonCol size="12" size-sm="6" size-xl="7">
            Hello
          </IonCol>
          <IonCol size="12" size-sm="6" size-xl="5">
            Hello
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default ProjectsArea;
