"use client";
import { useRouter, useSearchParams } from "next/navigation";

import {
  ImageContainer,
  imageWidth,
  WrapperSuccessImage,
} from "./SuccessCheckoutInfoStyles";
import { checkoutSessions } from "@/service/Checkout";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { CartStoreContext } from "@/contexts/CartStore";

interface SuccessProps {
  costumerName: string;
  product: [
    {
      name: string;
      imageUrl: string;
    }
  ];
}

function SuccessCheckoutInfo() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const router = useRouter();
  const { resetCard } = useContext(CartStoreContext);

  const [props, setProps] = useState<SuccessProps>({
    costumerName: "",
    product: [
      {
        name: "",
        imageUrl: "",
      },
    ],
  });
  const hasMoreThanOneProduct = props.product.length <= 1;
  let marginImage = 0;

  const ImageContenerWidth = (imageWidth - 52) * props.product.length + 52;

  if (!sessionId) {
    router.push("/");
  }

  useEffect(() => {
    async function hadleGetCheckoutSessions() {
      let res = await checkoutSessions(sessionId);
      setProps(res?.data.props);
    }
    hadleGetCheckoutSessions();
    resetCard();
  }, [sessionId]);

  return (
    <>
      <WrapperSuccessImage
        css={{
          width: `${ImageContenerWidth}px`,
          overflowX: "auto",
        }}
      >
        {props?.product.map((image, index) => {
          marginImage = index >= 1 ? marginImage + 88 : 0;

          return (
            <ImageContainer
              key={image?.imageUrl}
              css={{
                zIndex: `${index + 1}`,
                marginLeft: `${
                  hasMoreThanOneProduct ? "initial" : `${marginImage}px`
                }`,
              }}
            >
              {image?.imageUrl && (
                <Image
                  src={image?.imageUrl}
                  width={imageWidth}
                  height={120}
                  alt=""
                />
              )}
            </ImageContainer>
          );
        })}
      </WrapperSuccessImage>
      <h1>Compra efetuada!</h1>
      {props?.costumerName && props?.product[0]?.name && (
        <p>
          Uhuul <strong>{props?.costumerName}</strong>, sua compra de{" "}
          <strong>{props?.product.length}</strong>{" "}
          {props?.product.length > 1 ? "camisetas" : "camiseta"} já está a
          caminho da sua casa.
        </p>
      )}
    </>
  );
}

export default SuccessCheckoutInfo;
