import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const data = await req.json();

  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
  }
  if (!data.body.session_id) {
    return NextResponse.json({ error: "Price not found." }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.retrieve(
    data.body.session_id,
    {
      expand: ["line_items", "line_items.data.price.product"],
    }
  );

  const costumerName = session?.customer_details?.name;
  const product = session?.line_items?.data[0]?.price
    ?.product as Stripe.Product;

  return NextResponse.json({
    props: {
      costumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  });
}
