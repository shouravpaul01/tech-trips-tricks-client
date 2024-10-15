"use client";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Controller, useFormContext } from "react-hook-form";
import { RadioInputCustom } from "../ui/RadioInputCustom";
import { techBlogCategories } from "@/src/constent";
import { Button } from "@nextui-org/button";
import { MoreIcon, XmarkIcon } from "../icons";
import { useState } from "react";

type TProps = {
  name: string;
};
export default function RadioInputForCategory({ name }: TProps) {
  const [isCategoryMore, setIsCategoryMore] = useState(false);
  const { control,formState:{errors} } = useFormContext();
  return (
    <>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioGroup
          {...field}
          color="secondary"
          orientation="horizontal"
          label="Select Category"
        >
          {techBlogCategories?.slice(0, 5).map((category) => (
            <RadioInputCustom key={category.key} value={category.value}>
              {category.value}
            </RadioInputCustom>
          ))}
          {isCategoryMore && (
            <>
              {techBlogCategories?.slice(6).map((category) => (
                <RadioInputCustom key={category.key} value={category.value}>
                  {category.value}
                </RadioInputCustom>
              ))}
            </>
          )}
          <Button
            color="secondary"
            variant="faded"
            size="sm"
            radius="full"
            startContent={!isCategoryMore?<MoreIcon fill="#EA33F7"/>:<XmarkIcon fill="#EA33F7"/>}
            onClick={() => setIsCategoryMore((prev) => !prev)}
          >
            More
          </Button>
        </RadioGroup>
      )}
    />
     {errors[name] && <p className="text-red-500">{errors[name]?.message as string}</p>}
    </>
  );
}
