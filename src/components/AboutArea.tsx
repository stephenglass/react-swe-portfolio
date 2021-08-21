import {
  IonAvatar,
  IonImg,
  IonGrid,
  IonCol,
  IonRow,
  IonChip,
} from "@ionic/react";
import "./styles/AboutArea.css";

export interface AboutSkills {
  text: string;
  color: string;
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
              {skills.map((skill, index) => (
                <IonChip key={index} color={skill.color}>
                  {skill.text}
                </IonChip>
              ))}
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default AboutArea;
