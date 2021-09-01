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
  IonCardSubtitle,
} from "@ionic/react";
import "./AboutArea.scss";

export interface AboutSkills {
  text: string;
  color: string;
  icon?: string;
}

export interface FavoriteSkills {
  text: string;
  img: string;
}

export interface ContainerProps {
  reverse?: boolean;
  text: string;
  img: string;
  skills: AboutSkills[];
  favoriteSkills?: FavoriteSkills[];
}

const AboutArea: React.FC<ContainerProps> = ({
  reverse = "false",
  img,
  text,
  skills,
  favoriteSkills,
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
      {favoriteSkills && (
        <div className="favorite-skills">
          <br />
          <h2>Favorite Technology</h2>
          <IonGrid>
            <IonRow>
              {favoriteSkills.map((skill, index) => (
                <IonCol key={index} className="ion-no-padding">
                  <IonCard className="skill-card no-margin-left">
                    <IonImg src={skill.img} />
                    <IonCardHeader>
                      <IonCardSubtitle>{skill.text}</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
      )}
    </div>
  );
};

export default AboutArea;
