import { api } from "@/lib/axios";

export async function checkout(priceId: string) {
  const response = await api.post("/api/checkout", {
    body: {
      priceId: priceId,
    },
  });
  return response;
}
