import { TypeWhereUniqueInput } from "../type/TypeWhereUniqueInput";

export type Good = {
  createdAt: Date;
  id: string;
  shortname: string;
  typeId: TypeWhereUniqueInput;
  updatedAt: Date;
};
