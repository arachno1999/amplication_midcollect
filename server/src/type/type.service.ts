import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import {
  FindOneTypeArgs,
  FindManyTypeArgs,
  TypeCreateArgs,
  TypeUpdateArgs,
  TypeDeleteArgs,
  Subset,
} from "@prisma/client";

@Injectable()
export class TypeService {
  constructor(private readonly prisma: PrismaService) {}
  findMany<T extends FindManyTypeArgs>(args: Subset<T, FindManyTypeArgs>) {
    return this.prisma.type.findMany(args);
  }
  findOne<T extends FindOneTypeArgs>(args: Subset<T, FindOneTypeArgs>) {
    return this.prisma.type.findOne(args);
  }
  create<T extends TypeCreateArgs>(args: Subset<T, TypeCreateArgs>) {
    return this.prisma.type.create<T>(args);
  }
  update<T extends TypeUpdateArgs>(args: Subset<T, TypeUpdateArgs>) {
    return this.prisma.type.update<T>(args);
  }
  delete<T extends TypeDeleteArgs>(args: Subset<T, TypeDeleteArgs>) {
    return this.prisma.type.delete(args);
  }
}
