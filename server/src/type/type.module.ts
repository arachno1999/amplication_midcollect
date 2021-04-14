import { Module } from "@nestjs/common";
import { TypeModuleBase } from "./base/type.module.base";
import { TypeService } from "./type.service";
import { TypeController } from "./type.controller";
import { TypeResolver } from "./type.resolver";

@Module({
  imports: [TypeModuleBase],
  controllers: [TypeController],
  providers: [TypeService, TypeResolver],
  exports: [TypeService],
})
export class TypeModule {}
