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
import { TypeSelect } from "../type/TypeSelect";
import { Good } from "../api/good/Good";
import { GoodCreateInput } from "../api/good/GoodCreateInput";

const INITIAL_VALUES = {} as GoodCreateInput;

export const CreateGood = (): React.ReactElement => {
  useBreadcrumbs("/goods/new", "Create Good");
  const history = useHistory();

  const [create, { error, isError, isLoading }] = useMutation<
    Good,
    AxiosError,
    GoodCreateInput
  >(
    async (data) => {
      const response = await api.post("/api/goods", data);
      return response.data;
    },
    {
      onSuccess: (data, variables) => {
        history.push(`${"/goods"}/${data.id}`);
      },
    }
  );
  const handleSubmit = React.useCallback(
    (values: GoodCreateInput) => {
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
            <FormHeader title={"Create Good"}>
              <Button type="submit" disabled={isLoading}>
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
      <Snackbar open={isError} message={error?.response?.data?.message} />
    </>
  );
};
