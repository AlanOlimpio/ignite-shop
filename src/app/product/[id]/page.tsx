import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../productStyles";
import { GetStaticPaths, Metadata } from "next";
import Image from "next/image";
import { getProductById } from "@/service/Products";
import { Suspense } from "react";
import ButtonCheckout from "@/components/ButtonCheckout";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
  };
}
const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "prod_QpxUn9TjsnnIct" },
      },
    ],
    fallback: true,
  };
};
export default async function Product({
  params,
}: {
  params: ProductProps["product"];
}) {
  const product = await getProductById(params.id);

  return (
    <Suspense fallback={<ProductContainer>Loading...</ProductContainer>}>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>
          <ButtonCheckout priceId={product.defaultPriceId} />
        </ProductDetails>
      </ProductContainer>
    </Suspense>
  );
}
