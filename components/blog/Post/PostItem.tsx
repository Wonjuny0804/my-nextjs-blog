import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  id: string;
  excerpt: string;
  createdDate: string;
  tags: Array<string>;
  thumbnailImageUrl: string;
}

const PostItem = (props: Props) => {
  const { title, id, excerpt, tags, createdDate, thumbnailImageUrl } = props;

  return (
    <article className={`border-2 rounded-md max-w-[400px] overflow-hidden`}>
      <div className="relative min-h-[184px] border-b-2">
        <Image
          layout="fill"
          src={thumbnailImageUrl}
          alt={excerpt}
          className="border-b max-w-full h-full bg-white"
          loading="lazy"
          objectFit="cover"
        />
      </div>
      <div className="px-4 py-4 font-workSans">
        <span className="text-sm">{createdDate}</span>
        <h2 className="text-xl font-medium mt-3 mb-3 line-clamp-2">{title}</h2>
        <p className="text-sm line-clamp-3">{excerpt}</p>

        <span className="text-sm font-medium block mt-4">Read More -{">"}</span>
      </div>
    </article>
  );
};

export default PostItem;
