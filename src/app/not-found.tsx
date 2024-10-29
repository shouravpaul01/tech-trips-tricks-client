import Link from "next/link";
import { ArrowForwardIcon, ErrorIcon } from "../components/icons";
import { Button } from "@nextui-org/button";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center">
      <p className="flex items-center font-extrabold text-7xl text-gray-500">
        4{" "}
        <span className="animate-ping px-3">
          <ErrorIcon height={50} width={50} fill="#BB271A" />
        </span>{" "}
        4
      </p>
      <Button href="/" as={Link} color="secondary" className="w-[200px]">
        <ArrowForwardIcon /> Go back
      </Button>
    </div>
  );
}
