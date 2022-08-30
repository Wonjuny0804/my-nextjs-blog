import create from "zustand";
import { persist } from "zustand/middleware";
import { UserInfo } from "../types/auth";

export interface AuthSlice {
  isAuthenticated: boolean;
  userInfo: UserInfo | null;
  signIn: (userInfo: UserInfo) => void;
  signOut: () => void;
}

const useAuth = create<AuthSlice>()(
  persist((set) => ({
    isAuthenticated: false,
    userInfo: null,
    signIn: (userInfo: UserInfo) =>
      set({
        isAuthenticated: true,
        userInfo,
      }),
    signOut: () =>
      set({
        isAuthenticated: false,
        userInfo: null,
      }),
  }))
);

export default useAuth;
