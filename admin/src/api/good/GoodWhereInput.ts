import { TypeWhereUniqueInput } from "../type/TypeWhereUniqueInput";

export type GoodWhereInput = {
  createdAt?: Date;
  id?: string;
  shortname?: string;
  typeId?: TypeWhereUniqueInput;
  updatedAt?: Date;
};
