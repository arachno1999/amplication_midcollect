import { ArgsType, Field } from "@nestjs/graphql";
import { GoodWhereUniqueInput } from "./GoodWhereUniqueInput";

@ArgsType()
class GoodFindUniqueArgs {
  @Field(() => GoodWhereUniqueInput, { nullable: false })
  where!: GoodWhereUniqueInput;
}

export { GoodFindUniqueArgs };
