import React from "react";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { Good as TGood } from "../api/good/Good";

type Props = { id: string };

export const GoodTitle = ({ id }: Props) => {
  const { data, isLoading, isError, error } = useQuery<
    TGood,
    AxiosError,
    [string, string]
  >(["get-/api/goods", id], async (key: string, id: string) => {
    const response = await api.get(`${"/api/goods"}/${id}`);
    return response.data;
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <Link to={`${"/api/goods"}/${id}`} className="entity-id">
      {data?.shortname && data?.shortname.length ? data.shortname : data?.id}
    </Link>
  );
};
