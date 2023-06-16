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
      {/* <div className="relative min-h-[184px] h-[184px]">
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
      </div> */}
      <div className="px-4">
        <h2 className="leading-[1.2] font-medium mb-1 line-clamp-2 text-white break-words break-keep">
          {title}
        </h2>
        <p className="text-sm font-light line-clamp-2 text-white mt-8">
          {excerpt}
        </p>
        <span className="text-xs text-[#999999] mt-8 block">{createdDate}</span>

        {/* <span className="text-xs font-medium block text-grey">Read More</span> */}
      </div>
    </article>
  );
};

export default PostItem;
