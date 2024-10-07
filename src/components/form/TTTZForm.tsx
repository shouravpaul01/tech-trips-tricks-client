"use client";
import { TErrorMessage } from "@/src/types";
import { ReactNode, useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface IFormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}
interface IProps extends IFormConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
  errors?: TErrorMessage[];
}
export default function TTTForm({
  children,
  onSubmit,
  defaultValues,
  resolver,
  errors,
}: IProps) {
  const formConfig: IFormConfig = {};
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  //Handle client side validation errors using zod
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  //Handle server side vailidation errors
  useEffect(() => {
    if (errors?.length! > 0) {
      errors?.forEach((err: TErrorMessage) => {
        methods.setError(err.path, { type: "server", message: err.message });
      });
    }
  }, [errors]);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
