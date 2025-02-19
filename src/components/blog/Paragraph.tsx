import { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";

interface Props {
  block: ParagraphBlockObjectResponse;
}

const Paragraph = ({ block }: Props) => {
  return (
    <p className="my-4 font-customFont leading-[28px] tracking-wide">
      {block.paragraph.rich_text.map((text) => text.plain_text)}
    </p>
  );
};

export default Paragraph;
