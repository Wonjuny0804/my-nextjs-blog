import { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";

interface Props {
  block: Heading2BlockObjectResponse;
}

const Heading1 = ({ block }: Props) => {
  return (
    <h1 className="text-[30px] leading-[36px] tracking-[-0.225px] font-customFont font-[600]">
      {block.heading_2.rich_text.map((text) => text.plain_text)}
    </h1>
  );
};

export default Heading1;
