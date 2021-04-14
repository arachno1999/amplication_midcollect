import { ArgsType, Field } from "@nestjs/graphql";
import { GoodWhereInput } from "./GoodWhereInput";

@ArgsType()
class GoodFindManyArgs {
  @Field(() => GoodWhereInput, { nullable: true })
  where?: GoodWhereInput;
}

export { GoodFindManyArgs };
