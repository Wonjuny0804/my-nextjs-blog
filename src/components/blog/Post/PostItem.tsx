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
    <article className={` max-w-[400px] overflow-hidden md:h-full`}>
      <div className="relative min-h-[184px] h-[184px]">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <Image
            layout="fill"
            src={thumbnailImageUrl}
            alt={excerpt}
            className=" max-w-full h-full bg-white"
            loading="lazy"
            objectFit="cover"
            blurDataURL={thumbnailImageUrl}
            placeholder="blur"
          />
        )}
      </div>
      <div className="px-4 py-4 font-montserrat bg-[#141414]">
        <span className="text-sm text-[#999999]">{createdDate}</span>
        <h2 className="text-xl font-medium mt-3 mb-3 line-clamp-2 text-white">
          {title}
        </h2>
        <p className="text-sm line-clamp-2 text-white">{excerpt}</p>

        <span className="text-sm font-medium block mt-4 text-grey">
          Read More
        </span>
      </div>
    </article>
  );
};

export default PostItem;
