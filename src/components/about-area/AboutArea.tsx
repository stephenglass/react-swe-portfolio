import {
  IonAvatar,
  IonImg,
  IonGrid,
  IonCol,
  IonRow,
  IonChip,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";
import { PlaceholderImg } from "../../data/AppMeta";
import "./AboutArea.scss";

export interface AboutSkills {
  text: string;
  color: string;
  icon?: string;
}

export interface ContainerProps {
  reverse?: boolean;
  text: string;
  img: string;
  skills: AboutSkills[];
}

const AboutArea: React.FC<ContainerProps> = ({
  reverse = "false",
  img,
  text,
  skills,
}) => {
  return (
    <div className="about-container">
      <IonGrid>
        <IonRow
          className={
            reverse
              ? "ion-align-items-center reverse"
              : "ion-align-items-center"
          }
        >
          {/* note: size-lg="12" for extra breakpoint if split pane set to "lg" */}
          <IonCol size="12" size-sm="6" size-xl="7" className="ion-no-padding">
            <IonAvatar className="avatar">
              <IonImg src={img} alt="User avatar" />
            </IonAvatar>
          </IonCol>
          <IonCol
            size="12"
            size-sm="6"
            size-xl="5"
            className="text ion-no-padding"
          >
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
            <div className="skills">
              {skills &&
                skills.map((skill, index) => (
                  <IonChip key={index} color={skill.color}>
                    {skill.icon && (
                      <IonIcon className="icon" icon={skill.icon} />
                    )}

                    {skill.text}
                  </IonChip>
                ))}
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
      <br />
      <div className="favorite-skills">
        <h2>Favorite Technology</h2>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-no-padding">
              <IonCard className="skill-card no-margin-left">
                <IonImg src="../assets/svg/icons8-react-color.svg" />
                <IonCardHeader>
                  <IonCardSubtitle>React</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol className="ion-no-padding">
              <IonCard className="skill-card no-margin-middle">
                <IonImg src="../assets/svg/icons8-angular-color.svg" />
                <IonCardHeader>
                  <IonCardSubtitle>Angular</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol className="ion-no-padding">
              <IonCard className="skill-card no-margin-right">
                <IonImg src="../assets/svg/icons8-ionic-color.svg" />
                <IonCardHeader>
                  <IonCardSubtitle>Ionic</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </div>
  );
};

export default AboutArea;
