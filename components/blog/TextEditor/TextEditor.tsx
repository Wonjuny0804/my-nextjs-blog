import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import PostServiceInstance from "../../../service/posts";

interface Props {
  title?: string;
  author?: string;
}

const TextEditor = ({ title, author }: Props) => {
  const EditorRef = useRef<Editor>(null);

  const handleSaveEdit = async () => {
    if (!EditorRef.current) return;

    const content = EditorRef.current.getInstance().getMarkdown();
    // save content to server. (probably don't need a backend server that's running)

    await PostServiceInstance.createNewPost({
      content,
      title: title ?? "New Post Title",
      author,
    });
  };

  return (
    <>
      <Editor
        initialValue="Now, write something you want to share with the world"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        viewer={false}
        theme={"dark"}
        ref={EditorRef}
      />
      <button type="button" onClick={handleSaveEdit}>
        Save
      </button>
    </>
  );
};

export default TextEditor;
