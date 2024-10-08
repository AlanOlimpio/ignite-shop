import { LineItems } from "@/interfaces/Product";
import { api } from "@/lib/axios";

export async function checkout(productIdList: LineItems[]) {
  const response = await api.post("/api/checkout", {
    body: {
      productIdList,
    },
  });
  return response;
}

export async function checkoutSessions(session_id: string | null) {
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
