import React from "react";
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Paragraph from "./Paragraph";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import BulletedListItem from "./BulletedListItem";
import ChildPage from "./ChildPage";
import NumberedListItem from "./NumberedListItem";
import Todo from "./Todo";

interface Props {
  blocks: (BlockObjectResponse | PartialBlockObjectResponse)[];
}

const NotionBlockRenderer = ({ blocks }: Props) => {
  const renderBlock = (
    block: BlockObjectResponse | PartialBlockObjectResponse
  ) => {
    if (!("type" in block)) return;

    switch (block.type) {
      case "paragraph":
        return <Paragraph block={block} />;
      case "heading_1":
        return <Heading1 block={block} />;
      case "heading_2":
        return <Heading2 block={block} />;
      case "heading_3":
        return <Heading3 block={block} />;
      case "bulleted_list_item":
        return <BulletedListItem block={block} />;
      case "numbered_list_item":
        return <NumberedListItem block={block} />;
      case "to_do":
        return <Todo block={block} />;
      case "child_page":
        return <ChildPage block={block} />;
      case "unsupported":
        return <div>unsupported</div>;

      default:
        return <div>default</div>;
    }
  };

  return (
    <div className="text-white">
      {blocks.map((block) => renderBlock(block))}
    </div>
  );
};

export default NotionBlockRenderer;
