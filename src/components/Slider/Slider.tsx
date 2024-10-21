"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { SliderContainer, Product, WrapperButton } from "./SliderStyles";
import "keen-slider/keen-slider.min.css";
import { priceFormatter } from "@/utils/formatter";
import Link from "next/link";
import { Handbag } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { CartStoreContext } from "@/contexts/CartStore";
import { ProductInterfaceProps } from "@/interfaces/Product";

interface SliderProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number | null;
  }[];
}

function Slider({ products }: SliderProps) {
  const [hasCartList, setHasCartList] = useState<ProductInterfaceProps[]>([]);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    slides: {
      spacing: 48,
      perView: 2.5,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          spacing: 16,
          perView: 1.5,
        },
      },
    },
  });

  const { cartList } = useContext(CartStoreContext);
  useEffect(() => {
    setHasCartList(cartList);
  }, [cartList]);

  return (
    <SliderContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        const hasCart = hasCartList.some((item) => item.id === product.id);
        return (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <Product key={product.name} className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  {product?.price && (
                    <span>{priceFormatter.format(product.price)}</span>
                  )}
                </div>
                {hasCart && (
                  <WrapperButton>
                    <Handbag size={24} weight="bold" />
                  </WrapperButton>
                )}
              </footer>
            </Product>
          </Link>
        );
      })}
    </SliderContainer>
  );
}

export default Slider;
