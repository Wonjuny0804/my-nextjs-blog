import { NotionBlogPostResponseData } from "../../../types/NotionPostResponseData";
import { NotionPostData } from "../../../types/NotionPostData";

export const mapPostData = (
  post: NotionBlogPostResponseData
): NotionPostData => {
  const { properties } = post;
  const { Name, Tags, Created, excerpt } = properties;

  const tags = Tags.multi_select.map((tag) => tag.name);

  return {
    id: post.id,
    title: Name.title[0].plain_text,
    excerpt: excerpt.rich_text[0]?.plain_text || "",
    tags,
    createDateTime: Created.created_time,
  };
};
