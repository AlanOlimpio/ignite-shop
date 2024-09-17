"use server";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
export async function getProducts() {
  const response = await stripe.products.list({
    limit: 10,
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
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
