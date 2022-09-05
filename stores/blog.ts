import create from "zustand";
import { persist } from "zustand/middleware";

export interface BlogSlice {
  data: {
    title: string;
    author: string;
    content: string;
  };
  savePost: (data: BlogSlice["data"]) => void;
}

const useBlog = create<BlogSlice>()(
  persist((set) => ({
    data: {
      title: "",
      author: "",
      content: "",
    },
    savePost: (data) =>
      set({
        data,
      }),
  }))
);

export default useBlog;
