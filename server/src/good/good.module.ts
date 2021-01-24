import { Module, forwardRef } from "@nestjs/common";
import { MorganModule } from "nest-morgan";
import { PrismaModule } from "nestjs-prisma";
import { ACLModule } from "../auth/acl.module";
import { AuthModule } from "../auth/auth.module";
import { GoodService } from "./good.service";
import { GoodController } from "./good.controller";
import { GoodResolver } from "./good.resolver";

@Module({
  imports: [
    ACLModule,
    forwardRef(() => AuthModule),
    MorganModule,
    PrismaModule,
  ],
  controllers: [GoodController],
  providers: [GoodService, GoodResolver],
  exports: [GoodService],
})
export class GoodModule {}
