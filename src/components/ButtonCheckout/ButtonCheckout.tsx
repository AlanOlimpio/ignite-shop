"use client";

import { checkout } from "@/service/Checkout";
import { useState } from "react";
import { CheckoutButton } from "./ButtonCheckoutStyles";

interface HandleBuyButton {
  priceId: string;
}

function ButtonCheckout({ priceId }: HandleBuyButton) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await checkout(priceId);

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
      Comprar agora
    </CheckoutButton>
  );
}
export default ButtonCheckout;
