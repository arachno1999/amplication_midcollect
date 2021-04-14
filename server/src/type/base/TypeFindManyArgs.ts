import { ArgsType, Field } from "@nestjs/graphql";
import { TypeWhereInput } from "./TypeWhereInput";

@ArgsType()
class TypeFindManyArgs {
  @Field(() => TypeWhereInput, { nullable: true })
  where?: TypeWhereInput;
}

export { TypeFindManyArgs };
