"use client";

import { useContext, useEffect, useState } from "react";
import { CheckoutButton } from "./ButtonProductStyles";
import { CartStoreContext } from "@/contexts/CartStore";
import { ProductInterfaceProps } from "@/interfaces/Product";

function ButtonProduct(product: ProductInterfaceProps) {
  const productWithQuantity = { ...product, amount: 1 };
  const { addProductCart, cartList } = useContext(CartStoreContext);
  const [hasCartList, setHasCartList] = useState<ProductInterfaceProps[]>([]);
  const hasCart = hasCartList.some((item) => item?.id === product?.id);

  useEffect(() => {
    setHasCartList(cartList);
  }, [cartList]);

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
