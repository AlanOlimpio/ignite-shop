import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButtom,
  Content,
  Overlay,
  CartButton,
  Title,
  WrapperAmountToPay,
  WrapperAmount,
  WrapperNoItems,
} from "./DrawerStyles";
import { useContext, useEffect, useState } from "react";
import { Handbag, ShoppingCart, X } from "@phosphor-icons/react";
import { CartStoreContext } from "@/contexts/CartStore";
import CartItem from "../CartItem";
import { priceFormatter } from "@/utils/formatter";
import ButtonCheckout from "../ButtonCheckout";
import { LineItems } from "@/interfaces/Product";

function Drawer() {
  const [sum, setSum] = useState(0);
  const { cartList } = useContext(CartStoreContext);
  const [productIdList, setProductIdList] = useState<LineItems[]>([]);

  useEffect(() => {
    const totalCart = () =>
      cartList.reduce(function (valueSum, product) {
        if (product.price && product.amount) {
          return valueSum + product.price * product.amount;
        } else {
          return 0;
        }
      }, 0);

    setSum(totalCart());

    const productPriceIdList: LineItems[] = cartList.reduce(function (
      list: LineItems[],
      itemList
    ) {
      if (itemList?.defaultPriceId) {
        list.push({
          price: itemList?.defaultPriceId,
          quantity: itemList?.amount || 1,
        });
      }
      return list;
    },
    []);

    setProductIdList(productPriceIdList);
  }, [cartList]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton>
          <Handbag size={24} weight="bold" />
          {cartList.length > 0 && <span>{cartList.length}</span>}
        </CartButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButtom>
            <X size={24} />
          </CloseButtom>
          {cartList.length > 0 ? (
            <>
              <div>
                <Title>Sacola de compras</Title>

                {cartList?.map((product) => {
                  return <CartItem {...product} key={product.id} />;
                })}
              </div>
              <div>
                <WrapperAmount>
                  <p>Quantidade</p>

                  <span>
                    {cartList.length === 1 ? (
                      <span>1 item </span>
                    ) : (
                      <span>{cartList.length} itens</span>
                    )}
                  </span>
                </WrapperAmount>
                <WrapperAmountToPay>
                  <p>Valor total</p>
                  <span>{priceFormatter.format(sum / 100)}</span>
                </WrapperAmountToPay>
                <ButtonCheckout {...productIdList} />
              </div>
            </>
          ) : (
            <WrapperNoItems>
              <ShoppingCart size={50} weight="light" />
              <p>Adicione itens ao carrinho!</p>
            </WrapperNoItems>
          )}
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Drawer;
