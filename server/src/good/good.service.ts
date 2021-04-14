import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { GoodServiceBase } from "./base/good.service.base";

@Injectable()
export class GoodService extends GoodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
