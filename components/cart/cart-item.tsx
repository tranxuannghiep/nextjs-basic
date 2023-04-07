import { CartType } from '@/store/store-cart';
import { Dispatch, SetStateAction } from 'react';
import { CartItemDesktop } from './cart-item-desktop';
import { CartItemMobile } from './cart-item-mobile';

export interface CartItemProps {
  book: CartType;
  setSelectedIds: Dispatch<SetStateAction<number[]>>;
  selectedIds: number[];
}

export function CartItem({ book, setSelectedIds, selectedIds }: CartItemProps) {
  return (
    <>
      <CartItemDesktop book={book} setSelectedIds={setSelectedIds} selectedIds={selectedIds} />
      <CartItemMobile book={book} setSelectedIds={setSelectedIds} selectedIds={selectedIds} />
    </>
  );
}
