import useCartStore, { CartType } from '@/store/store-cart';
import { NOT_FOUND_INDEX } from '@/utils';

export const cartAction = {
  updateCarts(item: CartType) {
    const { carts } = useCartStore.getState();
    const idx = carts.findIndex((cart) => cart.id === item.id);
    if (idx === NOT_FOUND_INDEX) {
      const cartsNew = [...carts, { ...item }];
      useCartStore.setState({ carts: cartsNew });
      localStorage.setItem('carts', JSON.stringify(cartsNew));
    } else {
      const cartsNew = [
        ...carts.slice(0, idx),
        { ...item, quantity: item.quantity + carts[idx].quantity },
        ...carts.slice(idx + 1),
      ];

      useCartStore.setState({ carts: cartsNew });
      localStorage.setItem('carts', JSON.stringify(cartsNew));
    }
  },
};
