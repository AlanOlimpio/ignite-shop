"use client";

import { useParams } from "next/navigation";

export default function Product() {
  const { id } = useParams() as { id: string };
  console.log(id);
  return <h1>Product: {JSON.stringify(id)}</h1>;
}
