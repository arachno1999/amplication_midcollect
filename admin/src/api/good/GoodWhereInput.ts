import { TypeWhereUniqueInput } from "../type/TypeWhereUniqueInput";

export type GoodWhereInput = {
  createdAt?: Date;
  id?: string;
  image?: string | null;
  shortname?: string;
  typeId?: TypeWhereUniqueInput;
  updatedAt?: Date;
};
