"use client"
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface IFormConfig{
    defaultValues?:Record<string,any>,
    resolver?:any
}
interface IProps extends IFormConfig{
    children:ReactNode,
    onSubmit:SubmitHandler<any>,

}
export default function TTTForm({ children,onSubmit,defaultValues,resolver }:IProps) {
    const formConfig:IFormConfig={}
    if (!!defaultValues) {
        formConfig["defaultValues"]=defaultValues
    }
    if (!!resolver) {
        formConfig["resolver"]=resolver
    }
  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
