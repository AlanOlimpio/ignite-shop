"use client";

import { checkout } from "@/service/Checkout";
import { useState } from "react";
import { CheckoutButton } from "./ButtonCheckoutStyles";
import { LineItems } from "@/interfaces/Product";

function ButtonCheckout(productIdList: LineItems[]) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await checkout(productIdList);

      window.location.href = response.data.checkoutUrl.url;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }
  return (
    <CheckoutButton
      disabled={isCreatingCheckoutSession}
      onClick={handleBuyButton}
    >
      Finalizar compra
    </CheckoutButton>
  );
}
export default ButtonCheckout;
