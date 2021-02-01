import { ArgsType, Field } from "@nestjs/graphql";
import { TypeWhereInput } from "./TypeWhereInput";

@ArgsType()
class FindManyTypeArgs {
  @Field(() => TypeWhereInput, { nullable: true })
  where?: TypeWhereInput;
}

export { FindManyTypeArgs };
