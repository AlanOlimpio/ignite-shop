"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import {
  SliderContainer,
  Product,
  WrapperButton,
  ArrowSlider,
  WrapperNavigation,
} from "./SliderStyles";
import "keen-slider/keen-slider.min.css";
import { priceFormatter } from "@/utils/formatter";
import Link from "next/link";
import { Handbag } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { CartStoreContext } from "@/contexts/CartStore";
import { ProductInterfaceProps } from "@/interfaces/Product";
import { DrawerContext } from "@/contexts/Drawer";

interface SliderProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number | null;
  }[];
}
function Arrow(props: any) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <ArrowSlider
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="34"
      viewBox="0 0 19 34"
      fill="none"
    >
      {props.left && (
        <path
          d="M18.0607 0.93934C17.4749 0.353553 16.5251 0.353553 15.9393 0.93934L0.93934 15.9393C0.353553 16.5251 0.353553 17.4749 0.93934 18.0607L15.9393 33.0607C16.5251 33.6464 17.4749 33.6464 18.0607 33.0607C18.6464 32.4749 18.6464 31.5251 18.0607 30.9393L4.12132 17L18.0607 3.06066C18.6464 2.47487 18.6464 1.52513 18.0607 0.93934Z"
          fill="#C4C4CC"
        />
      )}
      {!props.left && (
        <path
          d="M0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L18.0607 15.9393C18.6464 16.5251 18.6464 17.4749 18.0607 18.0607L3.06066 33.0607C2.47487 33.6464 1.52513 33.6464 0.93934 33.0607C0.353553 32.4749 0.353553 31.5251 0.93934 30.9393L14.8787 17L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934Z"
          fill="#C4C4CC"
        />
      )}
    </ArrowSlider>
  );
}

function Slider({ products }: SliderProps) {
  const [hasCartList, setHasCartList] = useState<ProductInterfaceProps[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { onOpenChangeDrawer } = useContext(DrawerContext);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
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
    <WrapperNavigation>
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
                <Image
                  src={product.imageUrl}
                  data-testid="image-keen-slider"
                  width={520}
                  height={480}
                  alt={product.name}
                />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    {product?.price && (
                      <span>{priceFormatter.format(product.price)}</span>
                    )}
                  </div>
                  {hasCart && (
                    <WrapperButton
                      onClick={(e: any) => {
                        onOpenChangeDrawer();
                        e.preventDefault();
                      }}
                    >
                      <Handbag size={24} weight="bold" />
                    </WrapperButton>
                  )}
                </footer>
              </Product>
            </Link>
          );
        })}
      </SliderContainer>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) => {
              e.stopPropagation() || instanceRef.current?.next();
            }}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 2
            }
          />
        </>
      )}
    </WrapperNavigation>
  );
}

export default Slider;
