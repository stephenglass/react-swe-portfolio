import { IonButton, IonIcon } from "@ionic/react";
import {
  documentOutline,
  documentSharp,
  mailOutline,
  mailSharp,
} from "ionicons/icons";
import "./IntroductionArea.css";

const IntroductionArea: React.FC = () => {
  return (
    <div className="introduction-container">
      <div className="spacing" />
      <h3>Hi, my name is</h3>
      <h1>
        <strong>Stephen Glass.</strong>
      </h1>
      <h2>Software Engineer @ AT&T</h2>

      <p>
        I build web apps and more using latest technologies. Check out what I've
        been working on.
      </p>

      <IonButton fill="outline" style={{ paddingRight: "10px" }}>
        <IonIcon slot="start" ios={documentOutline} md={documentSharp} />
        Resume
      </IonButton>
      <IonButton fill="outline">
        <IonIcon slot="start" ios={mailOutline} md={mailSharp} />
        Email
      </IonButton>
    </div>
  );
};

export default IntroductionArea;
