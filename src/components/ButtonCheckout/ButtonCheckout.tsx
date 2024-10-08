"use client";

import { checkout } from "@/service/Checkout";
import { useContext, useState } from "react";
import { CheckoutButton } from "./ButtonCheckoutStyles";
import { CartStoreContext } from "@/contexts/CartStore";
import { ProductInterfaceProps } from "@/interfaces/Product";

interface HandleBuyButton {
  product: ProductInterfaceProps;
}

function ButtonCheckout({ product }: HandleBuyButton) {
  const productWithQuantity = { ...product, amount: 1 };
  const { addProductCart, cartList } = useContext(CartStoreContext);

  const hasCart = cartList.some((item) => item.id === product.id);

  return (
    <CheckoutButton
      onClick={() => addProductCart(productWithQuantity)}
      disabled={hasCart}
    >
      Colocar na sacola
    </CheckoutButton>
  );
}
export default ButtonCheckout;
