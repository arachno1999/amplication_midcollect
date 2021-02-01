import { ArgsType, Field } from "@nestjs/graphql";
import { TypeCreateInput } from "./TypeCreateInput";

@ArgsType()
class CreateTypeArgs {
  @Field(() => TypeCreateInput, { nullable: false })
  data!: TypeCreateInput;
}

export { CreateTypeArgs };
