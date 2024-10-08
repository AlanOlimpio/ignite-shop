import {
  WrapperCartItem,
  WrapperCartItemActions,
  WrapperImage,
} from "./CartItemStyled";

import { ProductInterfaceProps } from "../../interfaces/Product";
import { useContext } from "react";
import { CartStoreContext } from "@/contexts/CartStore";
import Image from "next/image";
import { priceFormatter } from "@/utils/formatter";

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
        {price && <p>{priceFormatter.format(price / 100)}</p>}
        <div>
          <button onClick={() => removeProductCart(id)}>Remover</button>
        </div>
      </WrapperCartItemActions>
    </WrapperCartItem>
  );
}

export default CartItem;
