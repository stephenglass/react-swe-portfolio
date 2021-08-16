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
import { useEffect, useState, useContext, useRef } from "react";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import { AppContext } from "../AppContext";
import "./Page.css";

const Page: React.FC = () => {
  const isDomRendered = useRef(false);
  const { anchor = "home" } = useParams<{ anchor: string }>();
  const [visibleElements, setVisibleElements] = useState<string[]>([]);
  const { sharedValue, setSharedValue } = useContext(AppContext);

  useEffect(() => {
    // hack to make sure all components rendered before attempt to figure out component in viewport
    setTimeout(() => {
      isDomRendered.current = true;
    }, 250);
    return () => {
      isDomRendered.current = false;
    };
  }, []);

  useEffect(() => {
    console.log("anchor: ", anchor);
    if (anchor !== "home") {
      console.log("scrolling...");
      setTimeout(() => {
        console.log("going to: ", anchor);
        let elmnt = document.getElementById(`anchor_${anchor}`);
        if (elmnt) {
          console.log("element exists");
          elmnt.scrollIntoView({ behavior: "smooth" });
        } else {
          console.log("element not exists");
        }
      }, 250);
    } else {
      console.log("not scrolling");
    }
  }, [anchor]);

  useEffect(() => {
    console.log("visibleElements: ", visibleElements);
    if (isDomRendered.current) {
      if (visibleElements.length > 0) {
        for (var i = 0; i < 10; i++) {
          const element = `test${i}`;
          if (visibleElements.includes(element)) {
            if (sharedValue.lastViewedElement !== element) {
              console.log("setting to: ", element);
              setSharedValue({ lastViewedElement: element });
            }
            return;
          }
        }
      }
    }
  }, [isDomRendered, visibleElements]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{sharedValue.lastViewedElement}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{anchor}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <IonButton
          onClick={() => {
            var elmnt = document.getElementById("anchor_test4");
            elmnt!.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Test Scroll
        </IonButton> */}
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
