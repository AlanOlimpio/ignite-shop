"use client";

import { useContext } from "react";
import { CheckoutButton } from "./ButtonProductStyles";
import { CartStoreContext } from "@/contexts/CartStore";
import { ProductInterfaceProps } from "@/interfaces/Product";

function ButtonProduct(product: ProductInterfaceProps) {
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
export default ButtonProduct;
