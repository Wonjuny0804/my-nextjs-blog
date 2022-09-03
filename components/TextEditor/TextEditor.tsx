import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import PostServiceInstance from "../../service/posts";

const TextEditor = () => {
  const EditorRef = useRef<Editor>(null);

  const handleSaveEdit = async () => {
    if (!EditorRef.current) return;

    const content = EditorRef.current.getInstance().getMarkdown();
    // save content to server. (probably don't need a backend server that's running)

    await PostServiceInstance.createNewPost({
      content,
      title: "Test Title",
    });
  };

  return (
    <>
      <Editor
        initialValue="hello react editor world!"
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
