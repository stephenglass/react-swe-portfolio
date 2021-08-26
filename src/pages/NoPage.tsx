import {
  IonIcon,
  IonPage,
  IonContent,
  IonHeader,
  IonButtons,
  IonToolbar,
  IonMenuButton,
  IonTitle,
} from "@ionic/react";
import { useEffect, useContext } from "react";
import { AppContext } from "../AppContext";
import { warningOutline, warningSharp } from "ionicons/icons";
import "./Home.scss";
import "../components/styles/IntroductionArea.scss";

const NoPage: React.FC = () => {
  const { sharedValue, setSharedValue } = useContext(AppContext);

  useEffect(() => {
    setSharedValue({
      ...sharedValue,
      pageNotFound: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>No Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="main-page" fullscreen>
        <div className="page-container">
          <div className="introduction-container">
            <div className="spacing" />
            <h3>
              <IonIcon md={warningSharp} ios={warningOutline}></IonIcon> Page
              not found
            </h3>
            <h1>
              <strong>Error 404</strong>
            </h1>
            <h2>
              Go <a href="/">home</a>.
            </h2>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NoPage;
