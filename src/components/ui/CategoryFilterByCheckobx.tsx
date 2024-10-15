"use client";
import { techBlogCategories } from "@/src/constent";
import useGetAllPosts from "@/src/hooks/PostHook";
import { TQueryArg } from "@/src/types";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function CategoryFilterByCheckobx() {
  const router=useRouter()
  const searchParams = useSearchParams()
  const categories=searchParams.get("categories")?.split(",")

  return (
    <CheckboxGroup color="secondary" defaultValue={categories} onChange={(value) =>router.push(`?categories=${value}`)}>
      {techBlogCategories?.map((option, index) => (
        <Checkbox key={index} value={option.value}>
          {option.key}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
}
