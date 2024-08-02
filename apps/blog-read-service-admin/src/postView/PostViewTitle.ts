import { PostView as TPostView } from "../api/postView/PostView";

export const POSTVIEW_TITLE_FIELD = "authorName";

export const PostViewTitle = (record: TPostView): string => {
  return record.authorName?.toString() || String(record.id);
};
