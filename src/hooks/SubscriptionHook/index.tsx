"use client";
import { createSubscription } from "@/src/services/SubscriptionService";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function useCreateSubscription() {
  const router = useRouter();
  return useMutation({
    mutationKey: ["SUBSCRIPTION"],
    mutationFn: async (bodyData: FieldValues) =>
      await createSubscription(bodyData),
    onSuccess: (data) => {
      if (data?.status) {
        if (data?.data?.result) {
          router.push(data?.data?.payment_url);
          toast.success("Please complete the payment.");
        }
      }
      if (!!data?.errorMessages) {
        toast.success(data?.errorMessages[0]?.message);
      }
    },
  });
}
