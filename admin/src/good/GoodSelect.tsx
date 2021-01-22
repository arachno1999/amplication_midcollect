import React, { useMemo } from "react";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { SelectField, SelectFieldProps } from "@amplication/design-system";
import { Good } from "../api/good/Good";

type Data = Good[];

type Props = Omit<SelectFieldProps, "options">;

export const GoodSelect = (props: Props) => {
  const { data } = useQuery<Data, AxiosError>("select-/api/goods", async () => {
    const response = await api.get("/api/goods");
    return response.data;
  });

  const options = useMemo(() => {
    return data
      ? data.map((item) => ({
          value: item.id,
          label:
            item.shortname && item.shortname.length ? item.shortname : item.id,
        }))
      : [];
  }, [data]);

  return <SelectField {...props} options={options} />;
};
