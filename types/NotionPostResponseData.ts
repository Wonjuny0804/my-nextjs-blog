import {
  GetPageResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export interface NotionBlogPostResponseData {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  // cover: null;
  // icon: null;
  parent: {
    type: "database_id";
    database_id: string;
  };
  archived: boolean;
  properties: {
    Tags: {
      id: string;
      type: "multi_select";
      multi_select: Array<{ id: string; name: string; color: string }>;
    };
    Created: {
      id: string;
      type: string;
      created_time: string;
    };
    excerpt: {
      id: string;
      type: "rich_text";
      rich_text: Array<{
        type: "text";
        text: {
          content: string;
          link: null;
        };
        annotations: {
          bold: boolean;
          italic: boolean;
          strikethrough: boolean;
          underline: boolean;
          code: boolean;
          color: string;
        };
        plain_text: string | null;
        href: null | string;
      }>;
    };
    status: {
      id: string;
      type: "select";
      select: {
        id: string;
        name: "published" | "unpublished";
        color: string;
      };
    };
    author: {
      id: string;
      type: "rich_text";
      rich_text: [];
    };
    Name: {
      id: string;
      type: string;
      title: [
        {
          type: "text";
          text: {
            content: string;
            link: null | string;
          };
          annotations: {
            bold: false;
            italic: false;
            strikethrough: false;
            underline: false;
            code: false;
            color: "default";
          };
          plain_text: string;
          href: null | string;
        }
      ];
    };
  };
  url: string;
  public_url: string;
}
