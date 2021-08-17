import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useContext, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import { AppContext } from "../AppContext";
import { appSections } from "../data/AppData";
import "./Menu.css";
import { menuLinks } from "../data/Links";

const Menu: React.FC = () => {
  const history = useHistory();
  const { sharedValue } = useContext(AppContext);

  useEffect(() => {
    console.log("sharedValue: ", sharedValue);
  }, [sharedValue]);

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Navigation</IonListHeader>
          {/* <IonNote>hi@ionicframework.com</IonNote> */}
          {appSections.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    sharedValue.lastViewedElement === appPage.title
                      ? "selected"
                      : ""
                  }
                  onClick={() => history.replace(appPage.url)}
                  lines="none"
                  detail={false}
                  // routerLink={appPage.url}
                  // routerDirection="none"
                  button
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Links</IonListHeader>
          {menuLinks.map((link, index) => (
            <IonItem lines="none" key={index} href={link.url}>
              <IonIcon slot="start" ios={link.iosIcon} md={link.mdIcon} />
              <IonLabel>{link.title}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
