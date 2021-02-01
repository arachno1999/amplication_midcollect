import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsOptional, ValidateNested } from "class-validator";
import { Type } from "../type/Type";
import { TypeWhereUniqueInput } from "../type/TypeWhereUniqueInput";
@ObjectType()
class Good {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  image!: string | null;
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
  typeId!: TypeWhereUniqueInput;
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Good };
