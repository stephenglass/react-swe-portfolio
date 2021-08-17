import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState, useContext, useRef } from "react";
import { useParams } from "react-router";
import SectionContainer from "../components/SectionContainer";
import { AppContext } from "../AppContext";
import "./Page.css";
import SectionDivider from "../components/SectionDivider";
import NoPage from "../components/NoPage";
import { appSections } from "../data/AppData";
import { Constants, EventType } from "../data/AppConstants";

const Page: React.FC = () => {
  const isDomRendered = useRef(false);
  const { anchor = "undefined" } = useParams<{ anchor: string }>();
  const [visibleElements, setVisibleElements] = useState<string[]>([]);
  const { sharedValue, setSharedValue } = useContext(AppContext);

  useEffect(() => {
    // hack to make sure all components rendered before attempt to figure out component in viewport
    setTimeout(() => {
      isDomRendered.current = true;
    }, Constants.DomLoadingTime);
    return () => {
      isDomRendered.current = false;
    };
  }, []);

  useEffect(() => {
    if (sharedValue.scrollTo !== undefined) {
      scrollTo(EventType.TypeAction, sharedValue.scrollTo);
      setSharedValue({ ...sharedValue, scrollTo: undefined });
    }
  }, [sharedValue.scrollTo]);

  useEffect(() => {
    if (anchor !== "undefined") {
      for (var i = 0; i < appSections.length; i++) {
        if (appSections[i].url.substr(1) === anchor) {
          scrollTo(EventType.TypeReload, anchor);
          return;
        }
      }
      // return not met, no anchor point matched. 404
      setSharedValue({
        ...sharedValue,
        pageNotFound: true,
        lastViewedElement: "Error Page",
      });
      console.log("404?");
    }
  }, [anchor]);

  const scrollTo = (event: EventType, anchor: string) => {
    console.log("anchor: ", anchor);
    // verify provided anchor link matches one in the database
    setTimeout(
      () => {
        const element = document.getElementById(`anchor_${anchor}`);
        if (element) {
          console.log("going to: ", anchor);
          element.scrollIntoView({ behavior: "smooth" });
        }
      },
      event === EventType.TypeReload ? Constants.DomLoadingTime : 0
    ); // if change of url, need add time to wait for dom to render
  };

  useEffect(() => {
    console.log("visibleElements: ", visibleElements);
    if (isDomRendered.current && visibleElements.length > 0) {
      for (var i = 0; i < appSections.length; i++) {
        const element = appSections[i].url.substr(1);
        if (visibleElements.includes(element)) {
          if (sharedValue.lastViewedElement !== element) {
            console.log("setting to: ", element);
            setSharedValue({
              ...sharedValue,
              lastViewedElement: appSections[i].title,
            });
          }
          return;
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

      <IonContent className="main-page" fullscreen>
        <div className="page-container">
          {sharedValue.pageNotFound ? (
            <NoPage />
          ) : (
            <>
              {appSections.map((n, index) => (
                <SectionContainer
                  key={index}
                  name={n.url.substr(1)}
                  visibility={[visibleElements, setVisibleElements]}
                >
                  {n.divider && <SectionDivider text={n.title} />}

                  <n.component key={index} />
                </SectionContainer>
              ))}
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
