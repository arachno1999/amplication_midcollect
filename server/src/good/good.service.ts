import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import {
  FindOneGoodArgs,
  FindManyGoodArgs,
  GoodCreateArgs,
  GoodUpdateArgs,
  GoodDeleteArgs,
  Subset,
} from "@prisma/client";

@Injectable()
export class GoodService {
  constructor(private readonly prisma: PrismaService) {}
  findMany<T extends FindManyGoodArgs>(args: Subset<T, FindManyGoodArgs>) {
    return this.prisma.good.findMany(args);
  }
  findOne<T extends FindOneGoodArgs>(args: Subset<T, FindOneGoodArgs>) {
    return this.prisma.good.findOne(args);
  }
  create<T extends GoodCreateArgs>(args: Subset<T, GoodCreateArgs>) {
    return this.prisma.good.create<T>(args);
  }
  update<T extends GoodUpdateArgs>(args: Subset<T, GoodUpdateArgs>) {
    return this.prisma.good.update<T>(args);
  }
  delete<T extends GoodDeleteArgs>(args: Subset<T, GoodDeleteArgs>) {
    return this.prisma.good.delete(args);
  }
}
