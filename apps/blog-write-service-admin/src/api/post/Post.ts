import { Author } from "../author/Author";

export type Post = {
  author?: Author | null;
  authorName: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  publishedDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
