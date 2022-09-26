import create from "zustand";
import { persist } from "zustand/middleware";
import { uploadImageData } from "../../types/image";

export interface BlogSlice {
  data: {
    title: string;
    author: string;
    content: string;
    excerpt?: string;
    tags?: Array<string>;
    imageData?: uploadImageData;
  };
  savePost: (data: BlogSlice["data"]) => void;
  resetData: () => void;
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
    resetData: () =>
      set({
        data: {
          title: "",
          author: "",
          content: "",
        },
      }),
  }))
);

export default useBlog;
