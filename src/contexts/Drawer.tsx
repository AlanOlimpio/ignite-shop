import {
  handleCloseDrawer,
  handleOpenDrawer,
} from "@/reducers/CartStore/actions";
import { drawerReducer } from "@/reducers/CartStore/reducer";
import { createContext, ReactNode, useReducer } from "react";

interface DrawerContextType {
  isOpen: boolean;
  onOpenChangeDrawer: () => void;
}

export const DrawerContext = createContext({} as DrawerContextType);

interface DrawerContextProviderProps {
  children: ReactNode;
}

export function DrawerContextProvider({
  children,
}: DrawerContextProviderProps) {
  const [DrawerState, dispatch] = useReducer(drawerReducer, { isOpen: false });

  const { isOpen } = DrawerState;

  function onOpenChangeDrawer() {
    if (isOpen === true) {
      dispatch(handleCloseDrawer());
    } else {
      dispatch(handleOpenDrawer());
    }
  }

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        onOpenChangeDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}
