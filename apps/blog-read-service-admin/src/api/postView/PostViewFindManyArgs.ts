import { PostViewWhereInput } from "./PostViewWhereInput";
import { PostViewOrderByInput } from "./PostViewOrderByInput";

export type PostViewFindManyArgs = {
  where?: PostViewWhereInput;
  orderBy?: Array<PostViewOrderByInput>;
  skip?: number;
  take?: number;
};
