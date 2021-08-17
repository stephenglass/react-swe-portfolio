import { IonAvatar, IonImg, IonButton, IonIcon } from "@ionic/react";
import {
  documentOutline,
  documentSharp,
  mailOutline,
  mailSharp,
} from "ionicons/icons";
import "./AboutArea.css";

const AboutArea: React.FC = () => {
  return (
    <div className="about-container">
      <IonAvatar className="avatar">
        <IonImg src="../assets/img/sg8717.png" alt="demo" />
      </IonAvatar>
    </div>
  );
};

export default AboutArea;
