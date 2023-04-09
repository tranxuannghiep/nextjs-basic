import useCartStore, { CartType } from '@/store/store-cart';
import { values, flatMap } from 'lodash';
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
        {
          ...item,
        },
        ...carts.slice(idx + 1),
      ];

      useCartStore.setState({ carts: cartsNew });
      localStorage.setItem('carts', JSON.stringify(cartsNew));
    }
  },

  deleteItemCart(id: number) {
    const { carts } = useCartStore.getState();
    const idx = carts.findIndex((cart) => cart.id === id);

    if (idx !== NOT_FOUND_INDEX) {
      const cartsNew = carts.filter((cart) => cart.id !== id);
      useCartStore.setState({ carts: cartsNew });
      localStorage.setItem('carts', JSON.stringify(cartsNew));
    }
  },
};

export const getTotalPrice = () => {
  const { carts, cartSelectedIds } = useCartStore.getState();
  const selectedIds = flatMap(values(cartSelectedIds));
  return carts.reduce((acc, cart) => {
    if (selectedIds.includes(cart.id as number)) {
      return acc + cart.price * cart.amount;
    }
    return acc;
  }, 0);
};

export const getNumberProduct = () => {
  const { cartSelectedIds } = useCartStore.getState();
  const selectedIds = flatMap(values(cartSelectedIds));
  return selectedIds.length;
};
