import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  useEffect,
  useState,
  useContext,
  useRef,
  useCallback,
  Suspense,
} from "react";
import { useParams } from "react-router";
import { AppContext } from "../AppContext";
import { appSections } from "../data/AppData";
import { Constants, EventType } from "../data/AppConstants";
import SectionContainer from "../components/SectionContainer";
import SectionDivider from "../components/SectionDivider";
import FooterArea from "../components/FooterArea";
import NoPage from "../components/NoPage";
import "./Home.css";

const Home: React.FC = () => {
  const isDomRendered = useRef(false);
  const { anchor = "undefined" } = useParams<{ anchor: string }>();
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchor]);

  useEffect(() => {
    if (isDomRendered.current && visibleElements.length > 0) {
      console.log("visibleElements: ", visibleElements);
      const index = Math.min(...visibleElements);
      const element = appSections[index].url.substr(1);
      if (sharedValue.lastViewedElement !== element) {
        console.log("setting to: ", element);
        setSharedValue({
          ...sharedValue,
          lastViewedElement: appSections[index].title,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDomRendered, visibleElements]);

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

  const addVisibleElement = useCallback(
    (index: number) => {
      // handle the click event
      if (!visibleElements.includes(index)) {
        setVisibleElements([...visibleElements, index]);
      }
    },
    [visibleElements]
  );

  const removeVisibleElement = useCallback(
    (index: number) => {
      // handle the click event
      if (visibleElements.includes(index)) {
        setVisibleElements(
          visibleElements.filter((elements) => elements !== index)
        );
      }
    },
    [visibleElements]
  );

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
                  index={index}
                  name={n.url.substr(1)}
                  addElement={addVisibleElement}
                  removeElement={removeVisibleElement}
                >
                  {n.divider && <SectionDivider text={n.title} />}
                  <Suspense fallback={<h1>Loading…</h1>}>
                    <n.component key={index} {...n.props} />
                  </Suspense>
                </SectionContainer>
              ))}
            </>
          )}
        </div>
        <FooterArea />
      </IonContent>
    </IonPage>
  );
};

export default Home;
