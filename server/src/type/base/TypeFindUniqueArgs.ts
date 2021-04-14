import { ArgsType, Field } from "@nestjs/graphql";
import { TypeWhereUniqueInput } from "./TypeWhereUniqueInput";

@ArgsType()
class TypeFindUniqueArgs {
  @Field(() => TypeWhereUniqueInput, { nullable: false })
  where!: TypeWhereUniqueInput;
}

export { TypeFindUniqueArgs };
