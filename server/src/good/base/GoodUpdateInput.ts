import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { TypeWhereUniqueInput } from "../../type/base/TypeWhereUniqueInput";
import { Type } from "../../type/base/Type";
@InputType()
class GoodUpdateInput {
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
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  shortname?: string;
  @ApiProperty({
    required: false,
    type: TypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TypeWhereUniqueInput)
  @IsOptional()
  @Field(() => TypeWhereUniqueInput, {
    nullable: true,
  })
  typeId?: TypeWhereUniqueInput;
}
export { GoodUpdateInput };
