import { api } from "@/lib/axios";

export async function checkout(priceId: string) {
  const response = await api.post("/api/checkout", {
    body: {
      priceId,
    },
  });
  return response;
}

export async function checkoutSessions<SuccessProps>(
  session_id: string | null
) {
  if (!session_id) {
    return null;
  }
  const response = await api.post("/api/checkout/sessions", {
    body: {
      session_id,
    },
  });
  return response;
}
