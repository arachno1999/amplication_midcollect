import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GoodService } from "./good.service";
import { GoodControllerBase } from "./base/good.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("goods")
@common.Controller("goods")
export class GoodController extends GoodControllerBase {
  constructor(
    protected readonly service: GoodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
