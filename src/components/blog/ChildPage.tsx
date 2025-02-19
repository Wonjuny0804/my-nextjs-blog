import React from "react";
import { ChildPageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { DocumentTextIcon } from "@heroicons/react/outline";
import Link from "next/link";

interface Props {
  block: ChildPageBlockObjectResponse;
}

const ChildPage = ({ block }: Props) => {
  return (
    <Link
      href={`/posts/${block.id}}`}
      className={`cursor-pointer underline underline-offset-4 decoration-1 flex items-center hover:bg-grey-100`}
    >
      <DocumentTextIcon className={`inline-block w-5 h-5 mr-1 fill-[]`} />
      {block.has_children ? block.child_page?.title : "no title"}
    </Link>
  );
};

export default ChildPage;
