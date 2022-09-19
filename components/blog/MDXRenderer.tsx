import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import H1 from "./CustomTags/H1";
import H2 from "./CustomTags/H2";
import H3 from "./CustomTags/H3";
import H4 from "./CustomTags/H4";
import H5 from "./CustomTags/H5";
import BLOCKQUOTE from "./CustomTags/BLOCKQUOTE";
import A from "./CustomTags/A";
import LI from "./CustomTags/LI";
import UL from "./CustomTags/UL";
import OL from "./CustomTags/OL";
import P from "./CustomTags/P";

interface Props {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const MDXRenderer = ({ source }: Props) => {
  return (
    <MDXRemote
      {...source}
      components={{
        h1: (props) => <H1>{props.children}</H1>,
        h2: (props) => <H2>{props.children}</H2>,
        h3: (props) => <H3>{props.children}</H3>,
        h4: (props) => <H4>{props.children}</H4>,
        h5: (props) => <H5>{props.children}</H5>,
        h6: (props) => <H5>{props.children}</H5>,
        p: (props) => <P>{props.children}</P>,
        ol: (props) => <OL>{props.children}</OL>,
        ul: (props) => <UL>{props.children}</UL>,
        li: (props) => <LI>{props.children}</LI>,
        blockquote: (props) => <BLOCKQUOTE>{props.children}</BLOCKQUOTE>,
        a: (props) => {
          return <A href={props.href}>{props.children}</A>;
        },
        img: (props) => {
          return <img src={props?.src ?? ""} alt={props?.alt ?? "Image"} />;
        },
      }}
    />
  );
};

export default MDXRenderer;
