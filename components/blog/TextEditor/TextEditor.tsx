import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import PostServiceInstance from "../../../service/posts";
import useBlog from "../../../stores/blog";
import { useRouter } from "next/router";

interface Props {
  handleSaveSuccess: () => void;
  mode: "create" | "edit";
  title?: string;
  author?: string;
  editData: {
    content?: string;
    postId?: string;
  } | null;
  height?: string;
}

const TextEditor = ({
  title,
  author,
  editData,
  handleSaveSuccess,
  mode,
  height,
}: Props) => {
  const EditorRef = useRef<Editor>(null);
  const { savePost } = useBlog();
  const router = useRouter();

  const handleSaveEdit = async () => {
    if (!EditorRef.current) return;

    const content = EditorRef.current.getInstance().getMarkdown();

    if (mode === "create") {
      savePost({
        content,
        title: title ?? "New Post Title",
        author: author ?? "",
      });
    } else {
      await PostServiceInstance.editPost({
        postId: editData?.postId ?? "",
        title: title ?? "",
        content: content ?? "",
        author: author ?? "",
      });
    }

    router.push("/admin/write/publish");
    // handleSaveSuccess();
  };

  useEffect(() => {
    if (!EditorRef.current) return;

    EditorRef.current.getInstance();
  }, []);

  return (
    <div className="flex flex-col">
      <Editor
        initialValue={
          editData?.content ??
          "Now, write something you want to share with the world"
        }
        previewStyle="vertical"
        height={height ?? "600px"}
        initialEditType="markdown"
        useCommandShortcut={true}
        viewer={false}
        theme={"dark"}
        ref={EditorRef}
      />
      <button
        type="button"
        onClick={handleSaveEdit}
        className="mt-3 w-fit items-end font-workSans border-2 block h-fit px-2 py-1 bg-[#f2f2f5] rounded-full shadow-[3px_3px_0px_0px_#000000]"
      >
        Save
      </button>
    </div>
  );
};

export default TextEditor;
