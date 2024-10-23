"use client";

import { premiumOrFreeOptions, techBlogCategories } from "@/src/constent";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { XmarkIcon } from "../icons";
import { Button } from "@nextui-org/button";
import { use, useEffect, useState } from "react";
import { getCurrentuser } from "@/src/services/AuthService";
import { getSingleUserReq } from "@/src/services/UserService";
import { useUser } from "@/src/context/user.provider";
import { toast } from "sonner";

export default function FilterByCheckobx() {
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialCategories = searchParams.get("categories")?.split(",") || [];
  const contentType = searchParams.get("contentType") || "";

  // State to manage selected categories
  const [selectedContentType, setSelectedContentType] = useState<string>(
    contentType!
  );
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(initialCategories);

  useEffect(() => {
    setSelectedCategories(initialCategories);
    setSelectedContentType(contentType!);
  }, [searchParams, contentType]);
  console.log(contentType, "s", selectedContentType);
  const handleContentTypeFilter = async (value: string) => {
    const { data: currentUser } = await getSingleUserReq();
    console.log(user?._id);
    if (!currentUser.isSubscribed && value == "Premium") {
      toast.error("This feature is available for Premium User.");
      return;
    }
    if (!value) {
      router.push(`${pathname}`); // Clear query if no content type selected
      return;
    }
    router.push(`${pathname}/?contentType=${value}`);
  };

  const handleCategoriesFilter = (value: string[]) => {
    setSelectedCategories(value);

    if (value.length === 0) {
      router.push(`${pathname}`);
      return;
    }

    router.push(`${pathname}/?categories=${value.join(",")}`);
  };

  const handleRemove = (item: string) => {
    const updatedCategories = selectedCategories.filter(
      (category) => category !== item
    );

    setSelectedCategories(updatedCategories);

    if (updatedCategories.length === 0) {
      router.push("/");
    } else {
      router.push(`${pathname}/?categories=${updatedCategories.join(",")}`);
    }
  };

  return (
    <div>
      {selectedCategories.length > 0 && (
        <div>
          <p className="pb-2 shadow-sm">All Filters</p>
          <div className="my-2 flex flex-wrap gap-1 max-h-[150px] overflow-y-auto">
            {selectedCategories.map((item, index) => (
              <Button
                key={index}
                size="sm"
                variant="flat"
                color="secondary"
                onPress={() => handleRemove(item)}
                endContent={<XmarkIcon width={16} height={16} />}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="pb-3 shadow-sm">Content Type</p>
        <RadioGroup
          color="secondary"
          orientation="horizontal"
          defaultValue={selectedContentType}
          onChange={(e) => handleContentTypeFilter(e.target.value)}
         
          classNames={{ wrapper: "mt-3 gap-5", base: "rounded-md" }}
        >
          {premiumOrFreeOptions?.map((item, index) => (
            <Radio value={item.value} key={index}>
              {item.key}
            </Radio>
          ))}
        </RadioGroup>
      </div>

      <div>
        <p className="py-3 shadow-sm">Select Categories</p>

        <div className="my-2 h-[300px] overflow-y-auto">
          <CheckboxGroup
            color="secondary"
            value={selectedCategories} // Sync selected categories with checkboxes
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
