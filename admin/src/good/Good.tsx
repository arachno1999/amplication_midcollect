import * as React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { useQuery, useMutation } from "react-query";
import { Formik } from "formik";
import pick from "lodash.pick";

import {
  Form,
  EnumFormStyle,
  Button,
  FormHeader,
  Snackbar,
  EnumButtonStyle,
  TextField,
} from "@amplication/design-system";

import { api } from "../api";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { TypeSelect } from "../type/TypeSelect";
import { Good as TGood } from "../api/good/Good";
import { GoodUpdateInput } from "../api/good/GoodUpdateInput";

export const Good = (): React.ReactElement => {
  const match = useRouteMatch<{ id: string }>("/goods/:id/");
  const id = match?.params?.id;
  const history = useHistory();

  const { data, isLoading, isError, error } = useQuery<
    TGood,
    AxiosError,
    [string, string]
  >(["get-/api/goods", id], async (key: string, id: string) => {
    const response = await api.get(`${"/api/goods"}/${id}`);
    return response.data;
  });

  const [deleteEntity] = useMutation<TGood, AxiosError>(
    async (data) => {
      const response = await api.delete(`${"/api/goods"}/${id}`, data);
      return response.data;
    },
    {
      onSuccess: (data, variables) => {
        history.push("//goods");
      },
    }
  );

  const [
    update,
    { error: updateError, isError: updateIsError, isLoading: updateIsLoading },
  ] = useMutation<TGood, AxiosError, GoodUpdateInput>(async (data) => {
    const response = await api.patch(`${"/api/goods"}/${id}`, data);
    return response.data;
  });

  const handleSubmit = React.useCallback(
    (values: GoodUpdateInput) => {
      void update(values);
    },
    [update]
  );

  useBreadcrumbs(match?.url, data?.shortname);

  const handleDelete = React.useCallback(() => {
    void deleteEntity();
  }, [deleteEntity]);

  const errorMessage =
    updateError?.response?.data?.message || error?.response?.data?.message;

  const initialValues = React.useMemo(
    () => pick(data, ["shortname", "typeId"]),
    [data]
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      {data && (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form
            formStyle={EnumFormStyle.Horizontal}
            formHeaderContent={
              <FormHeader
                title={`${"Good"} ${
                  data?.shortname && data?.shortname.length
                    ? data.shortname
                    : data?.id
                }`}
              >
                <Button
                  type="button"
                  disabled={updateIsLoading}
                  buttonStyle={EnumButtonStyle.Secondary}
                  icon="trash_2"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
                <Button type="submit" disabled={updateIsLoading}>
                  Save
                </Button>
              </FormHeader>
            }
          >
            <div>
              <TextField label="shortname" name="shortname" />
            </div>
            <div>
              <TypeSelect label="Type_ID" name="typeId.id" />
            </div>
          </Form>
        </Formik>
      )}
      <Snackbar open={isError || updateIsError} message={errorMessage} />
    </>
  );
};
