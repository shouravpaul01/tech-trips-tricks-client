"use client";
import { createSubscription, getMonthlyPaymentsReq } from "@/src/services/SubscriptionService";
import { useMutation, useQuery } from "@tanstack/react-query";
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
export const useGetMonthlyPayments = () => {
 
  return useQuery({
    queryKey: ["monthly-payments"],
    queryFn: async () => {
      const res = await getMonthlyPaymentsReq();
      if (res?.errorMessages?.length > 0) {
        toast.error("Data not found.");
      }
      return res.data;
    },
  });
};
