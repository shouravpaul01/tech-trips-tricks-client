"use client";

import { premiumOrFreeOptions, techBlogCategories } from "@/src/constent";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { useRouter, useSearchParams } from "next/navigation";
import { RadioInputCustom } from "./RadioInputCustom";

export default function FilterByCheckobx() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categories = searchParams.get("categories")?.split(",");
  const handleContentTypeFilter = (value: string) => {
    console.log(value,"type")
    if (value.length == 0) {
      router.push("/");
      return;
    }
    router.push(`/?contentType=${value}`);
  };
  const handleCategoriesFilter = (value: string[]) => {
    if (value.length == 0) {
      router.push("/");
      return;
    }
    router.push(`/?categories=${value}`);
  };

  return (
    <div>
      <div>
      <p className="pb-3 shadow-sm">Content Type</p>
        <RadioGroup
        
          color="secondary"
          orientation="horizontal"
          defaultValue={"Free"}
          onValueChange={(value)=>handleContentTypeFilter(value)}
          classNames={{wrapper:"mt-3 gap-5",base:"rounded-md"}}
        >
          {premiumOrFreeOptions?.map((item,index) => (
            <Radio value={item.value} key={index}>{item.key}</Radio>
          ))}
        </RadioGroup>
      </div>
      <div className=" ">
      <p className="py-3 shadow-sm">Select Categories</p>
            
        <div className="my-2 h-[300px]  overflow-y-auto">
        <CheckboxGroup
          color="secondary"
          defaultValue={categories && categories}
          onChange={(value) => handleCategoriesFilter(value)}
        >
          {techBlogCategories?.map((option, index) => (
            <Checkbox key={index} value={option.value}>
              {option.key}
            </Checkbox>
          ))}
        </CheckboxGroup>
        </div>
      </div>
    </div>
  );
}
