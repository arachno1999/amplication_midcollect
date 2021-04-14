import * as React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { Formik } from "formik";
import {
  Form,
  EnumFormStyle,
  Button,
  FormHeader,
  Snackbar,
  TextField,
} from "@amplication/design-system";
import { api } from "../api";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { Type as TType } from "../api/type/Type";
import { TypeCreateInput } from "../api/type/TypeCreateInput";

const INITIAL_VALUES = {} as TypeCreateInput;

export const CreateType = (): React.ReactElement => {
  useBreadcrumbs("/types/new", "Create Type");
  const history = useHistory();

  const [create, { error, isError, isLoading }] = useMutation<
    TType,
    AxiosError,
    TypeCreateInput
  >(
    async (data) => {
      const response = await api.post("/api/types", data);
      return response.data;
    },
    {
      onSuccess: (data, variables) => {
        history.push(`${"/types"}/${data.id}`);
      },
    }
  );
  const handleSubmit = React.useCallback(
    (values: TypeCreateInput) => {
      void create(values);
    },
    [create]
  );
  return (
    <>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form
          formStyle={EnumFormStyle.Horizontal}
          formHeaderContent={
            <FormHeader title={"Create Type"}>
              <Button type="submit" disabled={isLoading}>
                Save
              </Button>
            </FormHeader>
          }
        >
          <div>
            <TextField label="Model" name="model" textarea />
          </div>
          <div>
            <TextField label="Name" name="name" />
          </div>
        </Form>
      </Formik>
      <Snackbar open={isError} message={error?.response?.data?.message} />
    </>
  );
};
