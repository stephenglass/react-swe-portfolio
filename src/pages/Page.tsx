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
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";

const Page: React.FC = () => {
  const { anchor = "home" } = useParams<{ anchor: string }>();
  const [visibleElements, setVisibleElements] = useState<string[]>([]);

  useEffect(() => {
    if (anchor !== "home") {
      setTimeout(() => {
        console.log(anchor);
        var elmnt = document.getElementById("anchor_" + anchor);
        elmnt?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, []);

  useEffect(() => {
    console.log(visibleElements);
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
        <IonButton
          onClick={() => {
            var elmnt = document.getElementById("test4");
            elmnt!.scrollIntoView({ behavior: "smooth" });
          }}
        />

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
