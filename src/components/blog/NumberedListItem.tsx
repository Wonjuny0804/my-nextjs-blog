import React from "react";
import { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface Props {
  block: NumberedListItemBlockObjectResponse;
}

const NumberedListItem = ({ block }: Props) => {
  return (
    <li className={`my-2 list-decimal `}>
      {block.numbered_list_item.rich_text.map((value) => (
        <>{value.plain_text}</>
      ))}
    </li>
  );
};

export default NumberedListItem;
