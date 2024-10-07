import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButtom,
  Content,
  Overlay,
  CartButton,
  Title,
} from "./DrawerStyles";
import { useContext } from "react";
import { Handbag, X } from "@phosphor-icons/react";
import { CartStoreContext } from "@/contexts/CartStore";

function Drawer() {
  const { cartList } = useContext(CartStoreContext);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton>
          <Handbag size={24} weight="bold" />
        </CartButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Description />
          <Title>Sacola de compras</Title>
          <CloseButtom>
            <X size={24} />
          </CloseButtom>
          {cartList?.map((product) => {
            return <p key={product.id}>{product.name}</p>;
          })}
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Drawer;
