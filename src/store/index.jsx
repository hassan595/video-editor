
import React, { createContext } from "react";
import { Store } from "./Store";

export const StoreContext = createContext(new Store());

export function StoreProvider(props) {
  const [store] = React.useState(new Store());
  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
}
