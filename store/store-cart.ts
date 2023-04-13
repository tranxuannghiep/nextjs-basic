import { ProductType } from '@/models';
import { create } from 'zustand';

export interface CartType extends ProductType {
  amount: number;
}

interface CartSelectedIdsType {
  [key: string]: number[];
}

export interface CartSelectedType {
  [key: string]: CartType[];
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

  cartSelectedIds: CartSelectedIdsType;
  setCartSelectedIds: (cartSelectedIds: CartSelectedIdsType) => void;
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
  setCartSelectedIds: (cartSelectedIds: CartSelectedIdsType) => set({ cartSelectedIds }),
}));

export default useCartStore;
