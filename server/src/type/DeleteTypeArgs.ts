import { ArgsType, Field } from "@nestjs/graphql";
import { TypeWhereUniqueInput } from "./TypeWhereUniqueInput";

@ArgsType()
class DeleteTypeArgs {
  @Field(() => TypeWhereUniqueInput, { nullable: false })
  where!: TypeWhereUniqueInput;
}

export { DeleteTypeArgs };
