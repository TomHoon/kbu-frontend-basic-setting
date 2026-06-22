import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserStore = {
  user: {
    id: number;
    name: string;
  } | null;

  setUser: (
    user: UserStore["user"]
  ) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-storage",
    }
  )
);