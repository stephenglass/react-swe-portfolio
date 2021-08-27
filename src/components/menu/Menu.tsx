import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";

import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { appSections } from "../../data/AppData";
import { menuLinks } from "../../data/Links";
import { MenuGestureThreshold, SideMenuDisabled } from "../../data/AppMeta";
import "./Menu.scss";

export interface MenuLink {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const Menu: React.FC = () => {
  const location = useLocation();
  const { sharedValue, setSharedValue } = useContext(AppContext);

  return (
    <IonMenu
      contentId="main"
      maxEdgeStart={MenuGestureThreshold}
      type="overlay"
      disabled={location.pathname === "/404" || SideMenuDisabled}
    >
      <IonContent>
        <IonList id="nav-list">
          <IonListHeader>Navigation</IonListHeader>
          {appSections.map((appSection, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  button
                  className={
                    sharedValue.lastViewedElement === appSection.title
                      ? "selected"
                      : ""
                  }
                  onClick={() =>
                    setSharedValue({
                      ...sharedValue,
                      scrollTo: appSection.url.substr(1),
                    })
                  }
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appSection.iosIcon}
                    md={appSection.mdIcon}
                  />
                  <IonLabel>{appSection.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="links-list">
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
