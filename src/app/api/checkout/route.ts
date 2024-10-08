import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
  }
  if (!data.body.productIdList && data.body.productIdList.lenght) {
    return NextResponse.json({ error: "Price not found." }, { status: 400 });
  }
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: data.body.productIdList,
  });

  const checkoutSessionFormat = JSON.stringify({
    checkoutUrl: checkoutSession,
  });

  return new Response(checkoutSessionFormat, {
    status: 201,
  });
}
