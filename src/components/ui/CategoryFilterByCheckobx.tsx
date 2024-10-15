"use client";

import { techBlogCategories } from "@/src/constent";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { useRouter, useSearchParams } from "next/navigation";


export default function CategoryFilterByCheckobx() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categories = searchParams.get("categories")?.split(",");
  const handleCategories = (value: string[]) => {
    console.log(value, "value");
    if (value.length == 0) {
      router.push("/");
      return;
    }
    router.push(`?categories=${value}`);
  };

  return (
    <CheckboxGroup
      color="secondary"
      defaultValue={categories}
      onChange={(value) => handleCategories(value)}
    >
      {techBlogCategories?.map((option, index) => (
        <Checkbox key={index} value={option.value}>
          {option.key}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
}
