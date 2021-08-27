import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Menu from "./components/menu/Menu";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/globals.scss";

/* Context */
import { AppContextProvider } from "./AppContext";

const App: React.FC = () => {
  return (
    <IonApp>
      <AppContextProvider>
        <IonReactRouter>
          <IonSplitPane contentId="main" className="split-pane" when="xl">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/:anchor?" exact={true}>
                <Home />
              </Route>
              <Route path="/404" exact={true}>
                <NoPage />
              </Route>
              <Redirect to="/404" />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </AppContextProvider>
    </IonApp>
  );
};

export default App;
