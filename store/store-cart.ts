import { ProductType } from '@/models';
import { create } from 'zustand';

export interface CartType extends ProductType {
  amount: number;
}

interface CartSelectedType {
  [key: string]: number[];
}

interface DeleteModalType {
  open: boolean;
  handleConfirm: () => void;
  handleCancel: () => void;
}

interface CartStoreType {
  carts: CartType[];
  setCarts: (carts: CartType[]) => void;

  modalDeleteItem: DeleteModalType;
  setModalDeleteItem: (modalDeleteItem: DeleteModalType) => void;

  cartSelectedIds: CartSelectedType;
  setCartSelectedIds: (cartSelectedIds: CartSelectedType) => void;
}

const useCartStore = create<CartStoreType>((set) => ({
  carts: [],
  setCarts: (carts: CartType[]) => set({ carts }),

  modalDeleteItem: {
    open: false,
    handleConfirm() {},
    handleCancel() {},
  },
  setModalDeleteItem: (modalDeleteItem: DeleteModalType) => set({ modalDeleteItem }),

  cartSelectedIds: {},
  setCartSelectedIds: (cartSelectedIds: CartSelectedType) => set({ cartSelectedIds }),
}));

export default useCartStore;
