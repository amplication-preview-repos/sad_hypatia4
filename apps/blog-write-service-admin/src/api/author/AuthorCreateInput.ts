import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  email?: string | null;
  name?: string | null;
  posts?: PostCreateNestedManyWithoutAuthorsInput;
};
