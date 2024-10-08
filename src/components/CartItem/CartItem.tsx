import {
  WrapperCartItem,
  WrapperCartItemActions,
  WrapperImage,
} from "./CartItemStyled";

import { ProductInterfaceProps } from "../../interfaces/Product";
import { useContext } from "react";
import { CartStoreContext } from "@/contexts/CartStore";
import Image from "next/image";

function CartItem({ id, imageUrl, name, price }: ProductInterfaceProps) {
  const { removeProductCart } = useContext(CartStoreContext);
  return (
    <WrapperCartItem>
      <WrapperImage>
        <Image
          src={imageUrl}
          width={93}
          height={93}
          alt={`imagem de ${name}`}
        />
      </WrapperImage>

      <WrapperCartItemActions>
        <h2>{name}</h2>
        <p>{price?.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</p>
        <div>
          <button onClick={() => removeProductCart(id)}>Remover</button>
        </div>
      </WrapperCartItemActions>
    </WrapperCartItem>
  );
}

export default CartItem;
