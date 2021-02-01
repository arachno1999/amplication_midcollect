import { Module, forwardRef } from "@nestjs/common";
import { MorganModule } from "nest-morgan";
import { PrismaModule } from "nestjs-prisma";
import { ACLModule } from "../auth/acl.module";
import { AuthModule } from "../auth/auth.module";
import { TypeService } from "./type.service";
import { TypeController } from "./type.controller";
import { TypeResolver } from "./type.resolver";

@Module({
  imports: [
    ACLModule,
    forwardRef(() => AuthModule),
    MorganModule,
    PrismaModule,
  ],
  controllers: [TypeController],
  providers: [TypeService, TypeResolver],
  exports: [TypeService],
})
export class TypeModule {}
