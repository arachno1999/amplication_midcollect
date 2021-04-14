import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TypeService } from "./type.service";
import { TypeControllerBase } from "./base/type.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("types")
@common.Controller("types")
export class TypeController extends TypeControllerBase {
  constructor(
    protected readonly service: TypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
