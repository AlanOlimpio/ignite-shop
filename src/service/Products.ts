"use server";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ProductInterfaceProps } from "@/interfaces/Product";
export async function getProducts() {
  const response = await stripe.products.list({
    limit: 10,
    expand: ["data.default_price"],
  });

  const products: ProductInterfaceProps[] = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ? price.unit_amount / 100 : null,
    };
  });

  return products;
}

export async function getProductById(productId: string) {
  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });
  const price = product.default_price as Stripe.Price;
  const productFormat = {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: price.unit_amount,
    description: product.description,
    defaultPriceId: price.id,
  };

  return productFormat;
}
