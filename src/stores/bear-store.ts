import {create} from "zustand"

interface Bear{
  name:string,
  type:string
}
interface BearState {
  bears: number
  increase: () => void
  removeAllBears: () =>void
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))