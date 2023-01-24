import { CartItemDesktop } from './cart-item-desktop';
import { CartItemMobile } from './cart-item-mobile';

export interface CartItemProps {}

export function CartItem(props: CartItemProps) {
  return (
    <>
      <CartItemDesktop />
      <CartItemMobile />
    </>
  );
}
