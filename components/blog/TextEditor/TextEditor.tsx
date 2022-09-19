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
import rehypetoc from "rehype-toc";
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
      console.log(serializedSource);
      setSource(serializedSource);
    };
    if (!EditorRef.current) return;

    getInitialData();
    EditorRef.current.getInstance();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="lg:grid grid-cols-2">
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
        {source.compiledSource && (
          <div
            className={`hidden lg:block border-2 ${
              height ? `h-[${height}]` : "h-[600px]"
            } overflow-y-scroll px-12 font-workSans`}
          >
            <MDXRenderer source={source} />
          </div>
        )}
      </div>
      {!deleted && (
        <button
          type="button"
          onClick={handleSaveEdit}
          className="mt-3 w-fit items-end font-workSans border-2 block h-fit px-2 py-1 bg-[#f2f2f5] rounded-full shadow-[3px_3px_0px_0px_#000000]"
        >
          Save
        </button>
      )}
    </div>
  );
};

export default TextEditor;
