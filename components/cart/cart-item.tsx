import { CartType } from '@/store/store-cart';
import { CartItemDesktop } from './cart-item-desktop';
import { CartItemMobile } from './cart-item-mobile';

export interface CartItemProps {
  book: CartType;
}

export function CartItem({ book }: CartItemProps) {
  return (
    <>
      <CartItemDesktop book={book} />
      <CartItemMobile book={book} />
    </>
  );
}
