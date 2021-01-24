import { ArgsType, Field } from "@nestjs/graphql";
import { GoodWhereInput } from "./GoodWhereInput";

@ArgsType()
class FindManyGoodArgs {
  @Field(() => GoodWhereInput, { nullable: true })
  where?: GoodWhereInput;
}

export { FindManyGoodArgs };
