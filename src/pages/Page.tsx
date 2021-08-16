import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import { AppContext } from "../AppContext";
import "./Page.css";

const Page: React.FC = () => {
  const { anchor = "home" } = useParams<{ anchor: string }>();
  const [visibleElements, setVisibleElements] = useState<string[]>([]);
  const { sharedValue, setSharedValue } = useContext(AppContext);

  useEffect(() => {
    if (anchor !== "home") {
      console.log("scrolling...");
      setTimeout(() => {
        console.log(anchor);
        var elmnt = document.getElementById("anchor_" + anchor);
        elmnt?.scrollIntoView({ behavior: "smooth" });
      }, 250);
    }
  }, [anchor]);

  useEffect(() => {
    console.log(visibleElements);

    let lastElement = null;
    for (var i = 0; i < 10; i++) {
      if (visibleElements.includes(`test${i}`)) {
        lastElement = `test${i}`;
        break;
      }
    }

    setSharedValue({ lastViewedElement: lastElement });
  }, [visibleElements]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{anchor}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{anchor}</IonTitle>
          </IonToolbar>
        </IonHeader>

        {[...Array(10)].map((_, n) => (
          <ExploreContainer
            key={n}
            name={`test${n}`}
            visibility={[visibleElements, setVisibleElements]}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Page;
