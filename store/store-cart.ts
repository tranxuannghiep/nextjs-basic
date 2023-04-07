import { ProductType } from '@/models';
import { create } from 'zustand';

export interface CartType extends ProductType {
  quantity: number;
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
}));

export default useCartStore;
