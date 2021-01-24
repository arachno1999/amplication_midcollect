import { TypeWhereUniqueInput } from "../type/TypeWhereUniqueInput";

export type GoodCreateInput = {
  shortname: string;
  typeId: TypeWhereUniqueInput;
};
