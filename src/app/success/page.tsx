import Link from "next/link";
import { Metadata } from "next";
import { SuccessContainer } from "./successStyles";
import { Suspense, useContext } from "react";
import SuccessCheckoutInfo from "@/components/SuccessCheckoutInfo";
import { CartStoreContext } from "@/contexts/CartStore";

export const metadata: Metadata = {
  title: "Compra efetuada | Ignite Shop",
  description: "Compra efetuada!",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Success() {
  return (
    <SuccessContainer>
      <Suspense>
        <SuccessCheckoutInfo />
      </Suspense>
      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
