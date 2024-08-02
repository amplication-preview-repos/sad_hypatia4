import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostViewService } from "./postView.service";
import { PostViewControllerBase } from "./base/postView.controller.base";

@swagger.ApiTags("postViews")
@common.Controller("postViews")
export class PostViewController extends PostViewControllerBase {
  constructor(protected readonly service: PostViewService) {
    super(service);
  }
}
