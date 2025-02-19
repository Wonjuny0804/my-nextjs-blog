import { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";

interface Props {
  block: BulletedListItemBlockObjectResponse;
}

// for list items if the block has children we retrieve the children and render them
// Right now we only support unnested lists
const BulletedListItem = ({ block }: Props) => {
  return (
    <ul className="list-disc ml-4 my-1">
      {block.bulleted_list_item.rich_text.map((text) => (
        <li key={`${text.plain_text}`}>{text.plain_text}</li>
      ))}
    </ul>
  );
};

export default BulletedListItem;
