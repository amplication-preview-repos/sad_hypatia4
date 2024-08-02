import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  email?: string | null;
  name?: string | null;
  posts?: PostUpdateManyWithoutAuthorsInput;
};
