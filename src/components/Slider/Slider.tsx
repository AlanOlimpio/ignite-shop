"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { SliderContainer, Product } from "./SliderStyles";
import "keen-slider/keen-slider.min.css";
import { priceFormatter } from "@/utils/formatter";

interface SliderProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number | null;
  }[];
}

function Slider({ products }: SliderProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    slides: {
      spacing: 48,
      perView: 2.5,
    },
  });

  return (
    <SliderContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product key={product.name} className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              {product?.price && (
                <span>{priceFormatter.format(product.price)}</span>
              )}
            </footer>
          </Product>
        );
      })}
    </SliderContainer>
  );
}

export default Slider;
