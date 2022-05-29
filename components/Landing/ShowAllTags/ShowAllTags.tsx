import React, { FC } from "react";

interface Props {
  tags: Array<string>;
}

const ShowAllTags: FC<Props> = ({ tags }) => {
  return (
    <section className={`hidden lg:flex flex-wrap lg:px-5 lg:mt-10 gap-3`}>
      {tags.map((tag) => (
        <span
          key={`landing-tags-${tag}`}
          className={`border-2 block h-fit px-2 py-1 
          font-workSans text-sm bg bg-[#f2f2f5] rounded-3xl
          shadow-[3px_3px_0px_0px_#000000]`}
        >
          {tag}
        </span>
      ))}
    </section>
  );
};

export default ShowAllTags;
