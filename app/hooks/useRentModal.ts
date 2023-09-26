import { create } from "zustand";

interface RentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useRentModal = create<RentModalStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));