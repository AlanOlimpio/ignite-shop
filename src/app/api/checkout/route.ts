import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
  }
  if (!data.body.priceId) {
    return NextResponse.json({ error: "Price not found." }, { status: 400 });
  }
  const successUrl = `${process.env.NEXT_URL}/success`;
  const cancelUrl = `${process.env.NEXT_URL}/`;
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: [
      {
        price: data.body.priceId,
        quantity: 1,
      },
    ],
  });

  const checkoutSessionFormat = JSON.stringify({
    checkoutUrl: checkoutSession,
  });

  return new Response(checkoutSessionFormat, {
    status: 201,
  });
}
