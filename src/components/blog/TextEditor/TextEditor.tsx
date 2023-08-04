import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import PostServiceInstance from "../../../service/posts";
import useBlog from "../../../stores/blog";
import { useRouter } from "next/router";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import MDXRenderer from "../MDXRenderer";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
  mode: "create" | "edit";
  title?: string;
  author?: string;
  editData: {
    content?: string;
    postId?: string;
  } | null;
  height?: string;
  deleted?: boolean;
  preview?: boolean;
}

const TextEditor = ({
  title,
  author,
  editData,
  mode,
  height,
  deleted,
}: Props) => {
  const EditorRef = useRef<Editor>(null);
  const { savePost } = useBlog();
  const router = useRouter();

  const [source, setSource] = useState<
    MDXRemoteSerializeResult<Record<string, unknown>>
  >({
    compiledSource: "",
  });
  const [showPreview, setShowPreview] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(true);

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

      router.push(`/admin/write/publish?postId=${editData?.postId}`);
    }

    router.push(`/admin/write/publish`);
  };

  const serializeToSource = async (content: string) => {
    return await serialize(content, {
      mdxOptions: {
        rehypePlugins: [
          rehypePrism,
          rehypeCodeTitles,
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: "anchor",
              },
            },
          ],
        ],
      },
    });
  };

  const handleContentChange = async () => {
    if (!EditorRef.current) return;

    const currentTexts = EditorRef.current.getInstance().getMarkdown();
    const serializedSource = await serializeToSource(currentTexts);
    setSource(serializedSource);
  };

  useEffect(() => {
    const getInitialData = async () => {
      if (!EditorRef.current) return;

      const currentTexts = EditorRef.current.getInstance().getMarkdown();
      const serializedSource = await serializeToSource(currentTexts);
      setSource(serializedSource);
    };
    if (!EditorRef.current) return;

    getInitialData();
    EditorRef.current.getInstance();
  }, []);

  return (
    <div className="flex flex-col">
      <div
        className={`lg:grid ${showPreview ? "grid-cols-2" : "grid-cols-1"} ${
          darkMode ? "dark-mode" : "light-mode"
        }`}
      >
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
          onChange={handleContentChange}
        />

        {showPreview && source.compiledSource && (
          <div
            style={{
              height,
            }}
            className={`hidden lg:block ${
              height ? `` : "h-[600px]"
            } overflow-y-scroll px-12 scrollbar-hide`}
          >
            <MDXRenderer source={source} />
          </div>
        )}
      </div>

      <div className={`hidden lg:flex flex-row gap-3 mt-2`}>
        <label htmlFor="postPreviewOnOff" className="text-white">
          Show Preview
        </label>
        <input
          id="postPreviewOnOff"
          type="checkbox"
          checked={showPreview}
          onChange={() => setShowPreview(!showPreview)}
        />

        <label htmlFor="editorMode" className="text-white">
          Use DarkMode
        </label>
        <input
          id="editorMode"
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode((prev) => !prev)}
        />
      </div>

      {!deleted && (
        <button
          type="button"
          onClick={handleSaveEdit}
          className="mt-3 w-fit items-end block h-fit py-1 text-white"
        >
          Save
        </button>
      )}
    </div>
  );
};

export default TextEditor;
