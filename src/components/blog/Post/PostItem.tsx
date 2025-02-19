import React from "react";

interface Props {
  title: string;
  id: string;
  excerpt: string;
  createdDate: string;
  tags: Array<string>;
  loading?: boolean;
}

const PostItem = (props: Props) => {
  const { title, excerpt, createdDate } = props;

  return (
    <article
      className={` overflow-hidden md:h-full text-white hover:text-tertiary-dark transition-colors duration-300`}
    >
      <div className="px-4">
        <h2 className="leading-[1.2] font-medium mb-1 line-clamp-2 break-words break-keep">
          {title}
        </h2>
        <p className="text-sm font-light line-clamp-2  mt-8">{excerpt}</p>
        <span className="text-xs text-[#999999] mt-8 block">{createdDate}</span>
      </div>
    </article>
  );
};

export default PostItem;
