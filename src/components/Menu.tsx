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

import { useContext } from "react";
import { AppContext } from "../AppContext";
import { appSections } from "../data/AppData";
import "./Menu.css";
import { menuLinks } from "../data/Links";

const Menu: React.FC = () => {
  const { sharedValue, setSharedValue } = useContext(AppContext);

  return (
    <IonMenu
      contentId="main"
      type="overlay"
      disabled={sharedValue.pageNotFound}
    >
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Navigation</IonListHeader>
          {/* <IonNote>hi@ionicframework.com</IonNote> */}
          {appSections.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  button
                  className={
                    sharedValue.lastViewedElement === appPage.title
                      ? "selected"
                      : ""
                  }
                  onClick={() =>
                    setSharedValue({
                      ...sharedValue,
                      scrollTo: appPage.url.substr(1),
                    })
                  }
                  lines="none"
                  detail={false}
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
