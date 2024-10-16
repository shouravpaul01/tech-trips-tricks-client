"use client"
import { PremiumIcon } from "@/src/components/icons";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function PaymentCencelPage() {
  const router = useRouter();
  return (
    <div className="h-screen flex  flex-col gap-3 justify-center items-center">
      <p className="font-semibold text-md text-gray-500">
        "The payment process was canceled. Please try again if needed."
      </p>
      <Button
        onPress={() => router.push('/premium')}
        color="secondary"
        startContent={<PremiumIcon />}
      >
        Go Premium
      </Button>
    </div>
  );
}
