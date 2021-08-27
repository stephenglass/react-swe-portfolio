import React from "react";
import { appSections } from "./data/AppData";

type AppDataInterface = {
  lastViewedElement: string;
  scrollTo: string | undefined;
};

const initialState = {
  lastViewedElement: appSections[0].title,
  scrollTo: undefined,
};

type AppContextInterface = {
  sharedValue: any;
  setSharedValue: any;
};

// create the context
export const AppContext = React.createContext<AppContextInterface>({
  sharedValue: undefined,
  setSharedValue: undefined,
});

// create the context provider, we are using use state to ensure that
// we get reactive values from the context...

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  // the reactive values
  const [sharedValue, setSharedValue] =
    React.useState<AppDataInterface>(initialState);

  // the store object
  let state = {
    sharedValue,
    setSharedValue,
  };

  // wrap the application in the provider with the initialized context
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppContext;
