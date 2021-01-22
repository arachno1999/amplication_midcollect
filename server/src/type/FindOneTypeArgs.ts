import { ArgsType, Field } from "@nestjs/graphql";
import { TypeWhereUniqueInput } from "./TypeWhereUniqueInput";

@ArgsType()
class FindOneTypeArgs {
  @Field(() => TypeWhereUniqueInput, { nullable: false })
  where!: TypeWhereUniqueInput;
}

export { FindOneTypeArgs };
