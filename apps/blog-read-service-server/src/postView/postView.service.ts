import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostViewServiceBase } from "./base/postView.service.base";

@Injectable()
export class PostViewService extends PostViewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
