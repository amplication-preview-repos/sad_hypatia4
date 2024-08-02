import * as graphql from "@nestjs/graphql";
import { PostViewResolverBase } from "./base/postView.resolver.base";
import { PostView } from "./base/PostView";
import { PostViewService } from "./postView.service";

@graphql.Resolver(() => PostView)
export class PostViewResolver extends PostViewResolverBase {
  constructor(protected readonly service: PostViewService) {
    super(service);
  }
}
