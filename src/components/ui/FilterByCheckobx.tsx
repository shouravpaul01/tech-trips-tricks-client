"use client";
import { premiumOrFreeOptions, techBlogCategories } from "@/src/constent";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { XmarkIcon } from "../icons";
import { Button } from "@nextui-org/button";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { useGetSingleUser } from "@/src/hooks/UserHook";
import { CustomCheckbox } from "./CustomCheckedbox";

export default function FilterByCheckbox() {
  const { data: currentUser } = useGetSingleUser();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialCategories = searchParams.get("categories")?.split(",") || [];
  const contentType = searchParams.get("contentType")?.split(",") || [];

  // State to manage selected content type
  const [selectedContentType, setSelectedContentType] = useState<string[]>(
    contentType!
  );

  // State to manage selected categories
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(initialCategories);


    const createQueryString = useCallback(
      (newContentTypes: string[], newCategories: string[]) => {
        const params = new URLSearchParams(searchParams);
        if (newContentTypes.length > 0) {
          params.set("contentType", newContentTypes.join(","));
        } else {
          params.delete("contentType");
        }
        if (newCategories.length > 0) {
          params.set("categories", newCategories.join(","));
        } else {
          params.delete("categories");
        }
        router.push(`${pathname}?${params.toString()}`);
      },
      [router, pathname, searchParams]
    );

  const handleContentTypeFilter = (value: string[]) => {
    if (!currentUser?.isSubscribed && value.includes("Premium")) {
      toast.error("This feature is available for Premium Users.");
      return;
    }
    setSelectedContentType(value);
    createQueryString(value, selectedCategories); // Update both content type and categories
  };

  const handleCategoriesFilter = (value: string[]) => {
    setSelectedCategories(value);
    createQueryString(selectedContentType, value); // Update both content type and categories
  };

  const handleRemove = (item: string) => {
    const updatedCategories = selectedCategories.filter(
      (category) => category !== item
    );
    setSelectedCategories(updatedCategories);
    createQueryString(selectedContentType, updatedCategories); // Update both content type and categories
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
        <CheckboxGroup
          color="secondary"
          orientation="horizontal"
          className="mt-3"
          value={selectedContentType} // Sync selected content types with checkboxes
          onChange={(value) => handleContentTypeFilter(value)}
        >
          {premiumOrFreeOptions?.map((option, index) => (
            <CustomCheckbox key={index} value={option.value}>
              {option.key}
            </CustomCheckbox>
          ))}
        </CheckboxGroup>
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
