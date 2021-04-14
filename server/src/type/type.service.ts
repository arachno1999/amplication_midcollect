import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TypeServiceBase } from "./base/type.service.base";

@Injectable()
export class TypeService extends TypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
