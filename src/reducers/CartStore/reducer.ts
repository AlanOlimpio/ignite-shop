"use client";
import { ProductInterfaceProps } from "../../interfaces/Product";
import { ActionEnum } from "./actions";

interface productState {
  cartList: ProductInterfaceProps[];
}

export function cartReducer(state: productState, action: any) {
  switch (action.type) {
    case ActionEnum.ADD_ITEM_CARD: {
      const hasItem = state.cartList.some(
        (item) => item.id === action.payload.product.id
      );
      if (!hasItem) {
        return {
          ...state,
          cartList: [...state.cartList, action.payload.product],
        };
      }
    }
    case ActionEnum.REMOVE_ITEM_CARD: {
      return {
        ...state,
        cartList: state.cartList.filter((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }
        }),
      };
    }

    case ActionEnum.RESET_CARD: {
      return {
        ...state,
        cartList: [],
      };
    }

    default:
      return state;
  }
}