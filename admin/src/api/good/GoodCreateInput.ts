import { TypeWhereUniqueInput } from "../type/TypeWhereUniqueInput";

export type GoodCreateInput = {
  image?: string | null;
  shortname: string;
  typeId: TypeWhereUniqueInput;
};
