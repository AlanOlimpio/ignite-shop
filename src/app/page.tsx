import { getProducts } from "@/service/Products";
import Slider from "@/components/Slider";

export default async function Home() {
  const products = await getProducts();

  return <Slider products={products} />;
}
