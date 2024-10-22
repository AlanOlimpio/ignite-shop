import { ProductInterfaceProps } from "../../interfaces/Product";

export enum ActionEnum {
  ADD_ITEM_CARD = "ADD_ITEM_CARD",
  REMOVE_ITEM_CARD = "REMOVE_ITEM_CARD",
  RESET_CARD = "RESET_CARD",
  OPEN_DRAWER = "OPEN_DRAWER",
  CLOSE_DRAWER = "CLOSE_DRAWER",
}

export function handleAddProductCart(product: ProductInterfaceProps) {
  return {
    type: ActionEnum.ADD_ITEM_CARD,
    payload: {
      product,
    },
  };
}
export function handleRemoveProductCart(id: ProductInterfaceProps["id"]) {
  return {
    type: ActionEnum.REMOVE_ITEM_CARD,
    payload: {
      id,
    },
  };
}

export function handleResetCard() {
  return {
    type: ActionEnum.RESET_CARD,
  };
}

export function handleOpenDrawer() {
  return {
    type: ActionEnum.OPEN_DRAWER,
  };
}

export function handleCloseDrawer() {
  return {
    type: ActionEnum.CLOSE_DRAWER,
  };
}
