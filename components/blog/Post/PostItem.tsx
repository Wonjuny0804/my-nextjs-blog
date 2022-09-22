import React from "react";
import Image from "next/image";
import Loader from "../../common/Loader/Loader";

interface Props {
  title: string;
  id: string;
  excerpt: string;
  createdDate: string;
  tags: Array<string>;
  thumbnailImageUrl: string;
  loading?: boolean;
}

const PostItem = (props: Props) => {
  const { title, excerpt, createdDate, thumbnailImageUrl, loading } = props;

  return (
    <article
      className={`border-2 rounded-md max-w-[400px] overflow-hidden md:h-full`}
    >
      <div className="relative min-h-[184px] h-[184px] border-b-2">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <Image
            layout="fill"
            src={thumbnailImageUrl}
            alt={excerpt}
            className="border-b max-w-full h-full bg-white"
            loading="lazy"
            objectFit="cover"
            blurDataURL={thumbnailImageUrl}
            placeholder="blur"
          />
        )}
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
