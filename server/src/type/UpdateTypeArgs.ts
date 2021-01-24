import { ArgsType, Field } from "@nestjs/graphql";
import { TypeWhereUniqueInput } from "./TypeWhereUniqueInput";
import { TypeUpdateInput } from "./TypeUpdateInput";

@ArgsType()
class UpdateTypeArgs {
  @Field(() => TypeWhereUniqueInput, { nullable: false })
  where!: TypeWhereUniqueInput;
  @Field(() => TypeUpdateInput, { nullable: false })
  data!: TypeUpdateInput;
}

export { UpdateTypeArgs };
