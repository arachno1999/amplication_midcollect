import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import * as gqlUserRoles from "../auth/gqlUserRoles.decorator";
import * as abacUtil from "../auth/abac.util";
import { isRecordNotFoundError } from "../prisma.util";
import { GoodService } from "./good.service";
import { CreateGoodArgs } from "./CreateGoodArgs";
import { UpdateGoodArgs } from "./UpdateGoodArgs";
import { DeleteGoodArgs } from "./DeleteGoodArgs";
import { FindManyGoodArgs } from "./FindManyGoodArgs";
import { FindOneGoodArgs } from "./FindOneGoodArgs";
import { Good } from "./Good";
import { Type } from "../type/Type";

@graphql.Resolver(() => Good)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class GoodResolver {
  constructor(
    private readonly service: GoodService,
    @nestAccessControl.InjectRolesBuilder()
    private readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => [Good])
  @nestAccessControl.UseRoles({
    resource: "Good",
    action: "read",
    possession: "any",
  })
  async goods(
    @graphql.Args() args: FindManyGoodArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Good[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Good",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Good, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Good",
    action: "read",
    possession: "own",
  })
  async good(
    @graphql.Args() args: FindOneGoodArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Good | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Good",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Good)
  @nestAccessControl.UseRoles({
    resource: "Good",
    action: "create",
    possession: "any",
  })
  async createGood(
    @graphql.Args() args: CreateGoodArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Good> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Good",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Good"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        typeId: {
          connect: args.data.typeId,
        },
      },
    });
  }

  @graphql.Mutation(() => Good)
  @nestAccessControl.UseRoles({
    resource: "Good",
    action: "update",
    possession: "any",
  })
  async updateGood(
    @graphql.Args() args: UpdateGoodArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Good | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Good",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Good"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          typeId: {
            connect: args.data.typeId,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Good)
  @nestAccessControl.UseRoles({
    resource: "Good",
    action: "delete",
    possession: "any",
  })
  async deleteGood(@graphql.Args() args: DeleteGoodArgs): Promise<Good | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Type, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Good",
    action: "read",
    possession: "any",
  })
  async type(
    @graphql.Parent() parent: Good,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Type | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Type",
    });
    const result = await this.service
      .findOne({ where: { id: parent.id } })
      .typeId();

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
