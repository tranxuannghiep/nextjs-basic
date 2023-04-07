import { ProductType } from '@/models';
import { create } from 'zustand';

export interface CartType extends ProductType {
  quantity: number;
}

interface CartStoreType {
  carts: CartType[];
  setCarts: (carts: CartType[]) => void;
}

const useCartStore = create<CartStoreType>((set) => ({
  carts: [],
  setCarts: (carts: CartType[]) => set({ carts }),
}));

export default useCartStore;
