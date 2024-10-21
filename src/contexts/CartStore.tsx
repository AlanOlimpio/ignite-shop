import { createContext, ReactNode, useEffect, useReducer } from "react";
import { ProductInterfaceProps } from "../interfaces/Product";
import nookies from "nookies";
import {
  handleAddProductCart,
  handleRemoveProductCart,
  handleResetCard,
} from "../reducers/CartStore/actions";
import { cartReducer } from "../reducers/CartStore/reducer";
interface CartStoreContextType {
  cartList: ProductInterfaceProps[];
  addProductCart: (product: ProductInterfaceProps) => void;
  removeProductCart: (id: ProductInterfaceProps["id"]) => void;
  resetCard: () => void;
}

export const CartStoreContext = createContext({} as CartStoreContextType);

interface CartStoreContextProviderProps {
  children: ReactNode;
}

export function CartStoreContextProvider({
  children,
}: CartStoreContextProviderProps) {
  const [CartStoreState, dispatch] = useReducer(
    cartReducer,
    { cartList: [] },

    (initialState) => {
      const cookies = nookies.get(null, "@ignite-shop:cart-state-1.0.0");
      if (cookies["@ignite-shop:cart-state-1.0.0"]) {
        return {
          cartList: JSON.parse(cookies["@ignite-shop:cart-state-1.0.0"]),
        };
      }

      return initialState;
    }
  );

  function addProductCart(product: ProductInterfaceProps) {
    dispatch(handleAddProductCart(product));
  }

  function removeProductCart(id: ProductInterfaceProps["id"]) {
    dispatch(handleRemoveProductCart(id));
  }

  function resetCard() {
    dispatch(handleResetCard());
  }

  const { cartList } = CartStoreState;

  useEffect(() => {
    const stateJSON = JSON.stringify(cartList);

    if (stateJSON) {
      nookies.set(null, "@ignite-shop:cart-state-1.0.0", stateJSON, {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
    }
  }, [cartList]);

  return (
    <CartStoreContext.Provider
      value={{
        cartList,
        addProductCart,
        removeProductCart,
        resetCard,
      }}
    >
      {children}
    </CartStoreContext.Provider>
  );
}
