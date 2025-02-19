import { Heading1BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";

interface Props {
  block: Heading1BlockObjectResponse;
}

const Heading1 = ({ block }: Props) => {
  return (
    <h1 className="text-[48px] font-customFont font-[800] leading-[48px] tracking-[-0.576px]">
      {block.heading_1.rich_text.map((text) => text.plain_text)}
    </h1>
  );
};

export default Heading1;
