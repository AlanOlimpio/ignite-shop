"use client";

import { useContext, useEffect, useState } from "react";
import { CheckoutButton } from "./ButtonProductStyles";
import { CartStoreContext } from "@/contexts/CartStore";
import { ProductInterfaceProps } from "@/interfaces/Product";
import { DrawerContext } from "@/contexts/Drawer";

function ButtonProduct(product: ProductInterfaceProps) {
  const productWithQuantity = { ...product, amount: 1 };
  const { addProductCart, cartList } = useContext(CartStoreContext);
  const [hasCartList, setHasCartList] = useState<ProductInterfaceProps[]>([]);
  const hasCart = hasCartList.some((item) => item?.id === product?.id);
  const { onOpenChangeDrawer } = useContext(DrawerContext);

  useEffect(() => {
    setHasCartList(cartList);
  }, [cartList]);

  return (
    <CheckoutButton
      onClick={() => {
        if (!hasCart) {
          addProductCart(productWithQuantity);
        } else {
          onOpenChangeDrawer();
        }
      }}
    >
      {!hasCart ? "Colocar na sacola" : "Ver sacola"}
    </CheckoutButton>
  );
}
export default ButtonProduct;
