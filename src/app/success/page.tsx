"use client";

import { useRouter, useSearchParams } from "next/navigation";

import Link from "next/link";
import { ImageContainer, SuccessContainer } from "./successStyles";
import { checkoutSessions } from "@/service/Checkout";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";

interface SuccessProps {
  costumerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

function SuccessCheckoutInfo() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const router = useRouter();
  const [props, setProps] = useState<SuccessProps>({
    costumerName: "",
    product: {
      name: "",
      imageUrl: "",
    },
  });

  if (!sessionId) {
    router.push("/");
  }

  useEffect(() => {
    async function hadleGetCheckoutSessions() {
      let res = await checkoutSessions(sessionId);
      setProps(res?.data.props);
    }
    hadleGetCheckoutSessions();
  }, [sessionId]);

  return (
    <>
      <ImageContainer>
        {props?.product?.imageUrl && (
          <Image
            src={props?.product?.imageUrl}
            width={120}
            height={110}
            alt=""
          />
        )}
      </ImageContainer>
      {props?.costumerName && props?.product?.name && (
        <p>
          Uhuul <strong>{props?.costumerName}</strong>, sua{" "}
          <strong>{props?.product?.name}</strong> já está a caminho da sua casa.
        </p>
      )}
    </>
  );
}

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <Suspense>
        <SuccessCheckoutInfo />
      </Suspense>
      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
