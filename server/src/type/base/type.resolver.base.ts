import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { CreateTypeArgs } from "./CreateTypeArgs";
import { UpdateTypeArgs } from "./UpdateTypeArgs";
import { DeleteTypeArgs } from "./DeleteTypeArgs";
import { TypeFindManyArgs } from "./TypeFindManyArgs";
import { TypeFindUniqueArgs } from "./TypeFindUniqueArgs";
import { Type } from "./Type";
import { GoodFindManyArgs } from "../../good/base/GoodFindManyArgs";
import { Good } from "../../good/base/Good";
import { TypeService } from "../type.service";

@graphql.Resolver(() => Type)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class TypeResolverBase {
  constructor(
    protected readonly service: TypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => [Type])
  @nestAccessControl.UseRoles({
    resource: "Type",
    action: "read",
    possession: "any",
  })
  async types(
    @graphql.Args() args: TypeFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Type[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Type",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Type, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Type",
    action: "read",
    possession: "own",
  })
  async type(
    @graphql.Args() args: TypeFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Type | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Type",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Type)
  @nestAccessControl.UseRoles({
    resource: "Type",
    action: "create",
    possession: "any",
  })
  async createType(
    @graphql.Args() args: CreateTypeArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Type> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Type",
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
        `providing the properties: ${properties} on ${"Type"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Type)
  @nestAccessControl.UseRoles({
    resource: "Type",
    action: "update",
    possession: "any",
  })
  async updateType(
    @graphql.Args() args: UpdateTypeArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Type | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Type",
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
        `providing the properties: ${properties} on ${"Type"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Type)
  @nestAccessControl.UseRoles({
    resource: "Type",
    action: "delete",
    possession: "any",
  })
  async deleteType(@graphql.Args() args: DeleteTypeArgs): Promise<Type | null> {
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

  @graphql.ResolveField(() => [Good])
  @nestAccessControl.UseRoles({
    resource: "Type",
    action: "read",
    possession: "any",
  })
  async typ(
    @graphql.Parent() parent: Type,
    @graphql.Args() args: GoodFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Good[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Good",
    });
    const results = await this.service.findTyp(parent.id, args);
    return results.map((result) => permission.filter(result));
  }
}
