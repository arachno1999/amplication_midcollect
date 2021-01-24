import { ArgsType, Field } from "@nestjs/graphql";
import { GoodWhereUniqueInput } from "./GoodWhereUniqueInput";
import { GoodUpdateInput } from "./GoodUpdateInput";

@ArgsType()
class UpdateGoodArgs {
  @Field(() => GoodWhereUniqueInput, { nullable: false })
  where!: GoodWhereUniqueInput;
  @Field(() => GoodUpdateInput, { nullable: false })
  data!: GoodUpdateInput;
}

export { UpdateGoodArgs };
