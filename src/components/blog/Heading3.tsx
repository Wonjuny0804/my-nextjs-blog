import { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";

interface Props {
  block: Heading3BlockObjectResponse;
}

const Heading3 = ({ block }: Props) => {
  return (
    <h3 className="text-2xl font-[600] leading-[32px] tracking-tight">
      {block.heading_3.rich_text.map((text) => text.plain_text)}
    </h3>
  );
};

export default Heading3;
