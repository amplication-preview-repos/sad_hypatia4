import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type PostCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  authorName?: string | null;
  content?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
};
