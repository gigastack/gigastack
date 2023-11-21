import { create } from "zustand";

interface UseInvestorModalProps {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useInvestorModal = create<UseInvestorModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))