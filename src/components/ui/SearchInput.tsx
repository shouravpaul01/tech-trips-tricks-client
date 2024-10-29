import { Input, InputProps } from "@nextui-org/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SearchIcon } from "../icons";

export default function SearchInput({
  handleSearch,
  defaultValue = "",
  inputProps = {
    classNames: {
      base: "max-w-full  h-10 ",
      mainWrapper: "h-full ",
      input: "text-small",
      inputWrapper:
        "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-full",
    },
  },
}: {
  handleSearch: (value: string) => void;
  defaultValue?: string;
  inputProps?: InputProps;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 1000); // 1000ms delay (adjustable)

    // Cleanup function to clear the timeout if the user is still typing
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Handle the debounced search operation here
  useEffect(() => {
    if (debouncedTerm) {
      handleSearch(debouncedTerm);
    }
  }, [debouncedTerm]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (!e.target.value) {
      router.push(pathname);
    }
  };

  return (
    <Input
      {...inputProps}
      defaultValue={defaultValue}
      onChange={handleInputChange}
      placeholder="Type to search..."
      size="sm"
      endContent={<SearchIcon size={18} />}
      type="search"
    />
  );
}
