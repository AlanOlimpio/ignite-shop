import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../productStyles";
import { GetStaticPaths, Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { getProductById } from "@/service/Products";
import { cache, Suspense } from "react";
import { ProductInterfaceProps } from "@/interfaces/Product";
import { priceFormatter } from "@/utils/formatter";
import ButtonProduct from "@/components/ButtonProduct";

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
    description: product.description,
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
          {product.price && (
            <span>{priceFormatter.format(product.price / 100)}</span>
          )}

          <p>{product.description}</p>
          <ButtonProduct {...product} />
        </ProductDetails>
      </ProductContainer>
    </Suspense>
  );
}
