import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Bear {
  name: string;
  type: string;
}
interface BearState {
  bears: number;
  increase: () => void;
  removeAllBears: () => void;
}

// export const useBearStore = create<BearState>((set) => ({
//   bears: 0,
//   increase: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }));

export const useBearStore = create<BearState>()(
  persist(
    (set) => ({
      bears: 0,
      increase: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: "bears-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
