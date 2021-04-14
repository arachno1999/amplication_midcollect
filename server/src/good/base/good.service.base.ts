import { PrismaService } from "nestjs-prisma";
import { Prisma, Good, Type } from "@prisma/client";

export class GoodServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async findMany<T extends Prisma.GoodFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoodFindManyArgs>
  ): Promise<Good[]> {
    return this.prisma.good.findMany(args);
  }
  async findOne<T extends Prisma.GoodFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoodFindUniqueArgs>
  ): Promise<Good | null> {
    return this.prisma.good.findUnique(args);
  }
  async create<T extends Prisma.GoodCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoodCreateArgs>
  ): Promise<Good> {
    return this.prisma.good.create<T>(args);
  }
  async update<T extends Prisma.GoodUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoodUpdateArgs>
  ): Promise<Good> {
    return this.prisma.good.update<T>(args);
  }
  async delete<T extends Prisma.GoodDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GoodDeleteArgs>
  ): Promise<Good> {
    return this.prisma.good.delete(args);
  }

  async getTypeId(parentId: string): Promise<Type | null> {
    return this.prisma.good
      .findUnique({
        where: { id: parentId },
      })
      .typeId();
  }
}
