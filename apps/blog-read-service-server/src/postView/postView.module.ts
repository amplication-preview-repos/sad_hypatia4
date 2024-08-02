import { Module } from "@nestjs/common";
import { PostViewModuleBase } from "./base/postView.module.base";
import { PostViewService } from "./postView.service";
import { PostViewController } from "./postView.controller";
import { PostViewResolver } from "./postView.resolver";

@Module({
  imports: [PostViewModuleBase],
  controllers: [PostViewController],
  providers: [PostViewService, PostViewResolver],
  exports: [PostViewService],
})
export class PostViewModule {}
