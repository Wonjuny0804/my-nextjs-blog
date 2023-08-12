import create from "zustand";

export interface LanguageSlice {
  locale: "ko" | "en";
  setLocale: (locale: "ko" | "en") => void;
}

const useLanguageSlice = create<LanguageSlice>((set) => ({
  locale: "ko",
  setLocale: (locale) => set({ locale }),
}));

export default useLanguageSlice;
