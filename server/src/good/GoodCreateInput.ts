import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested } from "class-validator";
import { TypeWhereUniqueInput } from "../type/TypeWhereUniqueInput";
import { Type } from "../type/Type";
@InputType()
class GoodCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  shortname!: string;
  @ApiProperty({
    required: true,
    type: TypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TypeWhereUniqueInput)
  @Field(() => TypeWhereUniqueInput)
  typeId!: TypeWhereUniqueInput;
}
export { GoodCreateInput };
