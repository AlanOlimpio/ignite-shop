import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../productStyles";
import { GetStaticPaths, Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { getProductById } from "@/service/Products";
import { cache, Suspense } from "react";
import ButtonCheckout from "@/components/ButtonCheckout";
import { ProductInterfaceProps } from "@/interfaces/Product";

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

const getProduct = cache(async (id: string) => {
  const res = await getProductById(id);

  return res;
});

export async function generateMetadata(
  {
    params,
  }: {
    params: ProductInterfaceProps;
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getProduct(params.id);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    openGraph: {
      images: [`${product.imageUrl}`, ...previousImages],
    },
  };
}
export default async function Product({
  params,
}: {
  params: ProductInterfaceProps;
}) {
  const product = await getProduct(params.id);

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
          <ButtonCheckout product={product} />
        </ProductDetails>
      </ProductContainer>
    </Suspense>
  );
}
