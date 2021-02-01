import { TypeWhereUniqueInput } from "../type/TypeWhereUniqueInput";

export type GoodUpdateInput = {
  image?: string | null;
  shortname?: string;
  typeId?: TypeWhereUniqueInput;
};
