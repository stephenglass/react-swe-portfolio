import { IonIcon } from "@ionic/react";
import { warningOutline, warningSharp } from "ionicons/icons";
import "./IntroductionArea.css";

const NoPage: React.FC = () => {
  return (
    <div className="introduction-container">
      <div className="spacing" />
      <h3>
        <IonIcon md={warningSharp} ios={warningOutline}></IonIcon> Page not
        found
      </h3>
      <h1>
        <strong>Error 404</strong>
      </h1>
      <h2>
        Go <a href="/">home</a>.
      </h2>
    </div>
  );
};

export default NoPage;
