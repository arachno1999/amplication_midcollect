import { PrismaService } from "nestjs-prisma";
import { Prisma, Type, Good } from "@prisma/client";

export class TypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async findMany<T extends Prisma.TypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TypeFindManyArgs>
  ): Promise<Type[]> {
    return this.prisma.type.findMany(args);
  }
  async findOne<T extends Prisma.TypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TypeFindUniqueArgs>
  ): Promise<Type | null> {
    return this.prisma.type.findUnique(args);
  }
  async create<T extends Prisma.TypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TypeCreateArgs>
  ): Promise<Type> {
    return this.prisma.type.create<T>(args);
  }
  async update<T extends Prisma.TypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TypeUpdateArgs>
  ): Promise<Type> {
    return this.prisma.type.update<T>(args);
  }
  async delete<T extends Prisma.TypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TypeDeleteArgs>
  ): Promise<Type> {
    return this.prisma.type.delete(args);
  }

  async findTyp(
    parentId: string,
    args: Prisma.GoodFindManyArgs
  ): Promise<Good[]> {
    return this.prisma.type
      .findUnique({
        where: { id: parentId },
      })
      .typ(args);
  }
}
