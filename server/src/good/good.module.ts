import { Module } from "@nestjs/common";
import { GoodModuleBase } from "./base/good.module.base";
import { GoodService } from "./good.service";
import { GoodController } from "./good.controller";
import { GoodResolver } from "./good.resolver";

@Module({
  imports: [GoodModuleBase],
  controllers: [GoodController],
  providers: [GoodService, GoodResolver],
  exports: [GoodService],
})
export class GoodModule {}
