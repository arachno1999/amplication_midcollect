import { ArgsType, Field } from "@nestjs/graphql";
import { GoodCreateInput } from "./GoodCreateInput";

@ArgsType()
class CreateGoodArgs {
  @Field(() => GoodCreateInput, { nullable: false })
  data!: GoodCreateInput;
}

export { CreateGoodArgs };
