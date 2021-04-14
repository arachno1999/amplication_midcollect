import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { TypeWhereUniqueInput } from "../../type/base/TypeWhereUniqueInput";
import { Type } from "../../type/base/Type";
@InputType()
class GoodCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  image?: string | null;
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
