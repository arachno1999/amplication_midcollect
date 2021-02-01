import { ArgsType, Field } from "@nestjs/graphql";
import { GoodWhereUniqueInput } from "./GoodWhereUniqueInput";

@ArgsType()
class FindOneGoodArgs {
  @Field(() => GoodWhereUniqueInput, { nullable: false })
  where!: GoodWhereUniqueInput;
}

export { FindOneGoodArgs };
