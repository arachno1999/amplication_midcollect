import { ArgsType, Field } from "@nestjs/graphql";
import { GoodWhereUniqueInput } from "./GoodWhereUniqueInput";

@ArgsType()
class DeleteGoodArgs {
  @Field(() => GoodWhereUniqueInput, { nullable: false })
  where!: GoodWhereUniqueInput;
}

export { DeleteGoodArgs };
