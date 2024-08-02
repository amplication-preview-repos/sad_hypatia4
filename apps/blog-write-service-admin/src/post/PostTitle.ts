import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "authorName";

export const PostTitle = (record: TPost): string => {
  return record.authorName?.toString() || String(record.id);
};
